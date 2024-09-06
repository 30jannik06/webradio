import config from "../../config.json"
import {Button} from "@/components/ui/button";
import {Slider} from "@/components/ui/slider";
import {PlayIcon, PauseIcon} from "lucide-react"
import {useEffect, useRef, useState} from "react";

export const Player = () => {
    const streamInfo = {
        "name": "1 Live Diggi",
        "streamURL": "https://f111.rndfnk.com/ard/wdr/1live/diggi/mp3/128/stream.mp3?cid=01FBS02KK2TSYGZSY19X8ZJ3RK&sid=2lgyShBnju5uMA6t7UFjTQhIqqb&token=81kgwvKEKzXFtNN0YvoYAzSnTpIPfAw-nJjNQIMo5kM&tvf=tymAukSy8hdmMTExLnJuZGZuay5jb20"
    }

    const stepPercentage: number = config.stepPercentage
    const standartVolume: number = config.standardVolume
    const previousVolume: number = config.previousVolume
    const [isPlaying, setPlaying] = useState(false)
    const [isMuted, setisMuted] = useState(false);
    const [volume, setVolume] = useState(standartVolume)

    const PLAY_ICON = <PlayIcon className={"mr-2"}/>
    const PAUSE_ICON = <PauseIcon className={"mr-2"}/>

    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const {current: audioElement} = audioRef;

        if (audioElement) {
            audioElement.volume = volume;
            if (isPlaying) {
                audioElement.play();
            } else {
                audioElement.pause();
            }
        }
    }, [isPlaying, volume])

    const handleVolumeChange = (newVolume: number) => {
        setVolume(newVolume)
        console.log(newVolume)
    }

    const calculateStep = () => {
        return 1 / (100 * stepPercentage)
    }

    const togglePlay = () => {
        setPlaying(!isPlaying)
    }
    return (
        <div className={"w-screen h-[100%] flex justify-center items-center flex-col"}>
            <Button className={"h-[5.5vh] w-[8%] m-2 font-semibold"}
                    onClick={togglePlay}>{isPlaying ? PAUSE_ICON : PLAY_ICON}{isPlaying ? "Pause" : "Play"}</Button>
            <audio ref={audioRef} title={"song title"} src={streamInfo.streamURL}/>
            <a className={"text-black m-2"}>{isPlaying ? streamInfo.name : "Kein aktiver sender"}</a>
            <Slider min={0} defaultValue={[previousVolume]} step={calculateStep()} max={1} className={"w-[20%] m-2"}
                    onValueChange={(value) => handleVolumeChange(value[0])}/>
            <a className={"text-black m-2"}>Aktuelle Lautstärke: {Math.round(volume * 100)}%</a>
        </div>
    )
};
