/**
 * @author .jannik
 * @file Player.tsx
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
import config from "@/utils/config.json"
import streams from "@/utils/data.json"
import React, {RefObject, useCallback, useEffect, useRef, useState} from "react";
import {useToast} from "@/hooks/use-toast";
import {IRadioGroup, IRadioStation} from "@/interface/IRadioStation";
import {useRouter} from "next/navigation";
import {VolumeLevel} from "@/types/VolumeLevel";
import {AudioControls} from "@/components/Player/Components/AudioControls";
import {VolumeSlider} from "@/components/Player/Components/VolumeSlider";
import {RadioSelector} from "@/components/Player/Components/RadioSelector";
import {AudioPlayer} from "@/components/Player/Components/AudioPlayer";
import {CurrentRadioDisplay} from "@/components/Player/Components/CurrentRadioDisplay";

export const Player = () => {
	//#region Constants
	const {toast} = useToast();
	const router = useRouter();

	const stepPercentage: number = config.stepPercentage;
	const standartVolume: number = config.standardVolume;
	const [previousVolume, setPreviousVolume] = useState<number>(config.previousVolume);
	const [currentRadio, setCurrentRadio] = useState<IRadioStation>();
	const [radioStations, setRadioStations] = useState<IRadioStation[]>([]);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [isMuted, setisMuted] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);
	const [volume, setVolume] = useState<VolumeLevel>(standartVolume);

	const audioRef: RefObject<HTMLAudioElement> = useRef<HTMLAudioElement>(null);
	//#endregion

	const loadRadiostations = useCallback(() => {
		try {
			setRadioStations(streams);
		} catch (e) {
			console.error("Fehler beim Laden der Radiostationen:", e);
			toast({
				variant: "destructive",
				title: "Lade Fehler",
				description: "Die Radiostationen konnten nicht geladen werden."
			});
			router.push("/problem");
		} finally {
			setLoading(false);
		}
	}, [toast, router]);

	// Setzt beim Laden des Webradio die zuletzt in der LocalStorage gesetzte Lautstärke.
	const setVolumeOnLoad = useCallback(() => {
		if (typeof window !== "undefined") {
			const standVolString: string | null = localStorage.getItem("standVol");
			const prevVolString = localStorage.getItem("prevVol");
			if (!standVolString) {
				localStorage.setItem("standVol", config.standardVolume.toString());
				console.log("Standart Volume wurde in die LocalStorage geschrieben!");
			}
			if (!prevVolString) {
				localStorage.setItem("prevVol", config.previousVolume.toString());
				router.refresh();
				console.log("Previous Volume wurde in die LocalStorage geschrieben!");
			}
			const prevVolStr = localStorage.getItem("prevVol");
			const prevVol = prevVolStr ? parseFloat(prevVolStr) : 0.0;
			return prevVol;
		}
		return 0.0;
	}, [router]);

	// Alle Funktionen werden hier automatisch beim Aufrufen der Seite geladen.
	useEffect(() => {
		const {current: audioElement} = audioRef;

		loadRadiostations();
		setVolumeOnLoad();

		if (audioElement) {
			audioElement.volume = volume;
			if (isPlaying) {
				audioElement.play();
			} else {
				audioElement.pause();
			}
		}
	}, [isPlaying, volume, loadRadiostations, setVolumeOnLoad]);

	// Berechnet die Prozent-Schritte im Slider.
	const calculateStep = () => {
		return 1 / (100 * stepPercentage);
	};

	// Setzt die Lautstärke.
	const handleVolumeChange = (vol: number) => {
		localStorage.setItem("prevVol", "" + vol);
		setVolume(vol);
	};

	// Handelt das Muten des aktiven Streams.
	const handleMuteToggle = () => {
		setisMuted(!isMuted);
		if (isMuted) {
			setVolume(previousVolume);
		} else {
			setPreviousVolume(volume);
			setVolume(0);
		}
		setisMuted(!isMuted);
	};

	// Handelt den Wechsel der Radiostation.
	const handleRadioChange = (newRadio: string) => {
		const radio = radioStations.find(x => x.name === newRadio);
		if (!radio) return;
		localStorage.setItem("prevStrm", radio.name);
		setIsPlaying(false);
		setCurrentRadio(radio);
	};

	const togglePlay = () => {
		if (!currentRadio) {
			toast({
				variant: "destructive",
				title: "Es fehlt eine ausgewählte Radiostation",
				description: "Bitte wähle eine Radiostation aus, bevor du Play drückst!"
			});
			return;
		}
		setIsPlaying(!isPlaying);
	};

	const groupRadioStations = (stations: IRadioStation[]): IRadioGroup => {
		return stations.reduce((groups, station) => {
			const groupName = station.group;
			if (groupName) {
				if (!groups[groupName]) {
					groups[groupName] = [];
				}
				groups[groupName].push(station);
			}
			return groups;
		}, {} as IRadioGroup);
	};


	return (
		<div className={"w-full min-h-screen flex justify-center items-center p-4"}>
			<div
				className={"flex flex-col w-full max-w-lg bg-gray-100 items-center justify-center p-4 rounded-lg shadow-md"}>

				{/*Audio-Player*/}
				<AudioPlayer
					audioRef={audioRef}
					streamURL={currentRadio?.streamURL}/>

				{/*Current-Radio Display*/}
				<CurrentRadioDisplay
					currentRadio={currentRadio}/>

				{/*Volume-Slider*/}
				<VolumeSlider
					volume={volume}
					setVolumeOnLoad={setVolumeOnLoad}
					calculateStep={calculateStep}
					handleVolumeChange={handleVolumeChange}/>

				{/*Radio-Selector*/}
				<RadioSelector
					radioStations={radioStations}
					handleRadioChange={handleRadioChange}
					groupRadioStations={groupRadioStations} loading={loading}/>

				{/*Audio-Controls*/}
				<AudioControls
					isPlaying={isPlaying}
					togglePlay={togglePlay}
					isMuted={isMuted}
					handleMuteToggle={handleMuteToggle}/>
			</div>
		</div>
	);
};
