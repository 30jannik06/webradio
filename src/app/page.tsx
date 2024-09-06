"use client"
import Header from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Button} from "@/components/ui/button";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {Slider} from "@/components/ui/slider";

export default function Home(){
	const streamInfo = {
		"name": "1 Live Diggi",
		"streamURL": "https://f111.rndfnk.com/ard/wdr/1live/diggi/mp3/128/stream.mp3?cid=01FBS02KK2TSYGZSY19X8ZJ3RK&sid=2lgyShBnju5uMA6t7UFjTQhIqqb&token=81kgwvKEKzXFtNN0YvoYAzSnTpIPfAw-nJjNQIMo5kM&tvf=tymAukSy8hdmMTExLnJuZGZuay5jb20"
	}
	const [isPlaying, setPlaying] = useState(false)
	const [isMuted, setisMuted] = useState(false);
	const [volume, setVolume] = useState(0.5)
	const stepPercentage: number = 5
	const previousVolume: number = 0.5


	const audioRef = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		const {current: audioElement} = audioRef;

		if (audioElement) {
			if (isPlaying) {
				audioElement.play();
			} else {
				audioElement.pause();
			}
		}
	}, [isPlaying])



	const handleVolumeChange = (newVolume: number) =>{
		 setVolume(newVolume)
	}

	const togglePlay = () => {
		setPlaying(!isPlaying)
	}
	return (
		<main className={"w-screen h-screen bg-gray-100"}>
			<Header/>
			<div className={"w-screen h-[100%] flex justify-center items-center flex-col"}>
				<Button className={"h-[5.5vh] w-[8%] "} onClick={togglePlay}>{isPlaying ? "Playing" : "Paused"}</Button>
				<audio ref={audioRef} title={"song title"} src={streamInfo.streamURL}/>
				<a className={"text-black"}>{isPlaying ? streamInfo.name : "Kein aktiver sender"}</a>
				{/*<Slider min={0} step={0.01} max={1} defaultValue={[0.5]} className={"w-[20%]"}
						onChange={() => handleVolumeChange()}></Slider>*/}
			</div>
			<Footer/>
		</main>
	);
}
