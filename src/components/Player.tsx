/**
 * @author .jannik
 * @file Player.tsx
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
import config from "../../config.json"
import streams from "../../data.json"
import {Button} from "@/components/ui/button";
import {Slider} from "@/components/ui/slider";
import {PauseIcon, PlayIcon, Volume2Icon, VolumeOffIcon} from "lucide-react"
import React, {RefObject, useEffect, useRef, useState} from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Toaster} from "@/components/ui/toaster";
import {useToast} from "@/hooks/use-toast";
import {IRadioStation} from "@/interface/IRadioStation";

/**
 * TODO: -Lasse beim ersten laden config values in localstorage schreiben
 * 		 -Beim verändern von werten auch die in localstorage schreiben lassen
 *
 */


export const Player = () => {
	const {toast} = useToast()

	const stepPercentage: number = config.stepPercentage
	const standartVolume: number = config.standardVolume
	const [previousVolume, setPreviousVolume] = useState<number>(config.previousVolume)
	const [currentRadio, setCurrentRadio] = useState<IRadioStation>()
	const [radioStations, setRadioStations] = useState<IRadioStation[]>([])
	const [isPlaying, setIsPlaying] = useState<boolean>(false)
	const [isMuted, setisMuted] = useState<boolean>(false);
	const [volume, setVolume] = useState(standartVolume)

	const PLAY_ICON: JSX.Element = <PlayIcon className={"mr-2"}/>
	const PAUSE_ICON: JSX.Element = <PauseIcon className={"mr-2"}/>
	const VOLUME_ON: JSX.Element = <Volume2Icon className={"mr-2"}/>
	const VOLUME_OFF: JSX.Element = <VolumeOffIcon className={"mr-2"}/>

	const audioRef: RefObject<HTMLAudioElement> = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		const {current: audioElement} = audioRef;
		loadLocalStorage()
		setRadioStations(streams)

		if (audioElement) {
			audioElement.volume = volume;
			if (isPlaying) {
				audioElement.play();
			} else {
				audioElement.pause();
			}
		}
	}, [isPlaying, volume])

	const loadLocalStorage = () => {
		if (!localStorage.getItem("prevVol")){
			localStorage.setItem("prevVol", config.previousVolume.toString())
			console.log("Previous Volume wurde in die Localstorage geschrieben!")
		}
		if (!localStorage.getItem("stepPerc")){
			localStorage.setItem("stepPerc", config.stepPercentage.toString())
			console.log("Step Percentage wurde in die Localstorage geschrieben!")
		}
		if (!localStorage.getItem("standVol")){
			localStorage.setItem("standVol", config.standardVolume.toString())
			console.log("Standart Volume wurde in die Localstorage geschrieben!")
		}
	}

	const calculateStep = () => {
		return 1 / (100 * stepPercentage)
	}

	const handleVolumeChange = (vol: number) => {
		localStorage.setItem("prevVol", "" + vol)
		setVolume(vol)
	}

	const readLocalStorage = () => {
		const ll = localStorage.getItem("prevVol")
		console.log(ll)
	}

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


	const handleRadioChange = (newRadio: string) => {
		const radio = radioStations.find(x => x.name == newRadio);
		if (!radio) return
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

	return (
		<div className={"w-screen min-h-screen flex justify-center items-center flex-col"}>
			<Toaster/>
			<audio ref={audioRef} title={"song title"} src={currentRadio?.streamURL}/>

			<a className={"text-black m-2"}>{currentRadio ? currentRadio.name : "Kein aktiver sender"}</a>

			<Slider min={0} defaultValue={[previousVolume]} step={calculateStep()} max={1} className={"w-[20%] m-2"}
					onValueChange={(value: number[]) => handleVolumeChange(value[0])}/>
			<a className={"text-black m-2"}>Aktuelle Lautstärke: {Math.round(volume * 100)}%</a>

			<Select onValueChange={(selectedStation) => handleRadioChange(selectedStation)}>
				<SelectTrigger className={"w-[20%] m-2"}>
					<SelectValue placeholder={"Wähle ein Radio"} className={"text-black"}/>
				</SelectTrigger>
				<SelectContent className={"text-black m-2"}>

					{radioStations.map(x => {
						return (
							<SelectItem key={x.id} value={x.name} className={"text-black m-2"}>{x.name}</SelectItem>
						)
					})}
				</SelectContent>
			</Select>

			<div className={"w-[25%] h-[10vh] flex flex-row m-2"}>
				<Button className={"h-[5vh] w-[50%] m-2 font-semibold"}
						onClick={togglePlay}>{isPlaying ? PAUSE_ICON : PLAY_ICON}{isPlaying ? "Pause" : "Play"}</Button>
				<Button className={"h-[5vh] w-[50%] m-2 font-semibold"}
						onClick={() => handleMuteToggle()}>{isMuted ? VOLUME_OFF : VOLUME_ON}{isMuted ? "Stummgeschaltet" : "Click to Mute"}
				</Button>
			</div>

			<Button onClick={() => readLocalStorage()}></Button>

		</div>
	)
};
