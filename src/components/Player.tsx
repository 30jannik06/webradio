/**
 * @author .jannik
 * @file Player.tsx
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
import config from "@/utils/config.json"
import streams from "@/utils/data.json"
import {Button} from "@/components/ui/button";
import {Slider} from "@/components/ui/slider";
import {PauseIcon, PlayIcon, Volume2Icon, VolumeOffIcon} from "lucide-react"
import React, {RefObject, useCallback, useEffect, useRef, useState} from "react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import {useToast} from "@/hooks/use-toast";
import {IRadioGroup} from "@/interface/IRadioGroup";
import {IRadioStation} from "@/interface/IRadioStation";
import {Skeleton} from "@/components/ui/skeleton";
import {useRouter} from "next/navigation";
import {VolumeLevel} from "@/types/VolumeLevel";

export const Player = () => {
	//#region Constants
	const {toast} = useToast()
	const router = useRouter()

	const stepPercentage: number = config.stepPercentage
	const standartVolume: number = config.standardVolume
	const [previousVolume, setPreviousVolume] = useState<number>(config.previousVolume)
	const [currentRadio, setCurrentRadio] = useState<IRadioStation>()
	const [radioStations, setRadioStations] = useState<IRadioStation[]>([])
	const [isPlaying, setIsPlaying] = useState<boolean>(false)
	const [isMuted, setisMuted] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true)
	const [volume, setVolume] = useState<VolumeLevel>(standartVolume)
	//#endregion

	//#region ICONS
	const PLAY_ICON: JSX.Element = <PlayIcon className={"mr-2"}/>
	const PAUSE_ICON: JSX.Element = <PauseIcon className={"mr-2"}/>
	const VOLUME_ON_ICON: JSX.Element = <Volume2Icon className={"mr-2"}/>
	const VOLUME_OFF_ICON: JSX.Element = <VolumeOffIcon className={"mr-2"}/>
	//#endregion

	const audioRef: RefObject<HTMLAudioElement> = useRef<HTMLAudioElement>(null);

	const loadRadiostations = useCallback(() => {
		try {
			setRadioStations(streams)
		} catch (e) {
			console.error("Fehler beim Laden der Radiostationen:", e);
			toast({
				variant: "destructive",
				title: "Lade Fehler",
				description: "Die Radiostationen konnten nicht geladen werden."
			})
			router.push("/problem")
		} finally {
			setLoading(false)
		}
	},[toast, router])

	//Diese Funktion setzt beim Laden des Webradio die zuletzt in der Localstorage gesetzte Lautstärke.
	const setVolumeOnLoad = useCallback(() => {
		if (typeof window !== "undefined") {
			const standVolString: string | null = localStorage.getItem("standVol")
			const prevVolString = localStorage.getItem("prevVol");
			if (!standVolString) {
				localStorage.setItem("standVol", config.standardVolume.toString())
				console.log("Standart Volume wurde in die Localstorage geschrieben!")
			}
			if (!prevVolString) {
				localStorage.setItem("prevVol", config.previousVolume.toString())
				router.refresh()
				console.log("Previous Volume wurde in die Localstorage geschrieben!")
			}
			const prevVolStr = localStorage.getItem("prevVol");
			const prevVol = prevVolStr ? parseFloat(prevVolStr) : 0.0;
			return prevVol
		}
		return 0.0;
	}, [router])

	// Alle Funktionen werden hier automatisch beim aufrufen der seite geladen.
	useEffect(() => {
		const {current: audioElement} = audioRef;

		loadRadiostations()
		setVolumeOnLoad()

		if (audioElement) {
			audioElement.volume = volume;
			if (isPlaying) {
				audioElement.play();
			} else {
				audioElement.pause();
			}
		}
	}, [isPlaying, volume, loadRadiostations, setVolumeOnLoad])

	//Diese Funktion Berechnet die Prozent Steps im Slider
	const calculateStep = () => {
		return 1 / (100 * stepPercentage)
	}

	//Diese Funktion is für die setzung der Lautstärke zuständig.
	const handleVolumeChange = (vol: number) => {
		localStorage.setItem("prevVol", "" + vol)
		setVolume(vol)
	}



	//Diese Funktion Handelt das Muten vom Aktiven Stream
	const handleMuteToggle = () => {
		setisMuted(!isMuted)
		if (isMuted) {
			setVolume(previousVolume)
		} else {
			setPreviousVolume(volume)
			setVolume(0)
		}
		setisMuted(!isMuted)
	}

	//Diese Funktion Handelt den Radio Station Wechsel
	const handleRadioChange = (newRadio: string) => {
		const radio = radioStations.find(x => x.name == newRadio);
		if (!radio) return
		localStorage.setItem("prevStrm", radio.name)
		setCurrentRadio(radio)
	}

	const togglePlay = () => {
		if (!currentRadio) {
			toast({
				variant: "destructive",
				title: "Es Fehlt eine Ausgewählte Radiostation",
				description: "Bitte wähle eine Radiostation aus vor dem Play drücken!"
			})
			return
		}
		setIsPlaying(!isPlaying)
	}

	const groupRadioStations = (stations: IRadioStation[]): IRadioGroup => {
		return stations.reduce((groups, station) => {
			const groupName = station.group;
			if (groupName) { // Sicherstellen, dass groupName nicht undefined ist
				if (!groups[groupName]) {
					groups[groupName] = [];
				}
				groups[groupName].push(station);
			}
			return groups;
		}, {} as IRadioGroup);
	}

	return (
		<div className={"w-full min-h-screen flex justify-center items-center p-4"}>
			<div
				className={"flex flex-col w-full max-w-lg bg-gray-100 items-center justify-center p-4 rounded-lg shadow-md"}>
				<audio ref={audioRef} title={"song title"} src={currentRadio?.streamURL}/>

				<a className={"text-black m-2 select-none text-center"}>{currentRadio ? currentRadio.name : "Kein aktiver sender"}</a>

				<Slider
					min={0}
					defaultValue={[setVolumeOnLoad()]}
					step={calculateStep()}
					max={1}
					className={"w-full max-w-xs m-2"}
					onValueChange={(value: number[]) => handleVolumeChange(value[0])}
				/>

				<a className={"text-black m-2 select-none text-center"}>Aktuelle
					Lautstärke: {Math.round(setVolumeOnLoad() * 100)}%</a>

				{loading ?
					(<Skeleton className="w-full max-w-xs h-[40px] rounded-md bg-gray-700"/>) :
					(<Select onValueChange={(selectedStation: string) => handleRadioChange(selectedStation)}>
						<SelectTrigger className={"w-full max-w-xs m-2"}>
							<SelectValue placeholder={"Wähle ein Radio"} className={"text-black"}/>
						</SelectTrigger>
						<SelectContent className={"text-black m-2"}>
							{Object.keys(groupRadioStations(radioStations)).map(groupName => (
								<SelectGroup key={groupName}>
									<SelectLabel>{groupName}</SelectLabel>
									{groupRadioStations(radioStations)[groupName].map(station => (
										<SelectItem key={station.id} value={station.name} className={"text-black m-2"}>
											{station.name}
										</SelectItem>
									))}
								</SelectGroup>
							))}
						</SelectContent>
					</Select>)
				}

				<div className={"w-full max-w-xs h-auto flex flex-col sm:flex-row justify-between m-2"}>
					<Button
						className={"h-10 w-full sm:w-[48%] m-2 font-semibold select-none"}
						onClick={togglePlay}>
						{isPlaying ? PAUSE_ICON : PLAY_ICON}
						{isPlaying ? "Pause" : "Play"}
					</Button>
					<Button
						className={"h-10 w-full sm:w-[48%] m-2 font-semibold select-none"}
						onClick={handleMuteToggle}>
						{isMuted ? VOLUME_OFF_ICON : VOLUME_ON_ICON}
						{isMuted ? "Stummgeschaltet" : "Click to Mute"}
					</Button>
				</div>
			</div>
		</div>
	);
};
