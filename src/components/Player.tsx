import config from "../../config.json"
import {Button} from "@/components/ui/button";
import {Slider} from "@/components/ui/slider";
import {PlayIcon, PauseIcon} from "lucide-react"
import {useEffect, useRef, useState} from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export const Player = () => {
    const streamInfo = [
        {
            "id": 1,
            "name": "1 Live",
            "group": "1 Live",
            "streamURL": "https://f121.rndfnk.com/ard/wdr/1live/live/mp3/128/stream.mp3?cid=01FBRZTS1K1TCD4KA2YZ1ND8X3&sid=2ljos2g30e1gYqr1Yf6RCaePmf2&token=Juw0MJXx4gZkcU7rGESbrMF5BB3N9X3uqE18FEhRFrQ&tvf=QetO-mwB8xdmMTIxLnJuZGZuay5jb20"
        },
        {
            "id": 2,
            "name": "1 Live Diggi",
            "group": "1 Live",
            "streamURL": "https://f111.rndfnk.com/ard/wdr/1live/diggi/mp3/128/stream.mp3?cid=01FBS02KK2TSYGZSY19X8ZJ3RK&sid=2lgyShBnju5uMA6t7UFjTQhIqqb&token=81kgwvKEKzXFtNN0YvoYAzSnTpIPfAw-nJjNQIMo5kM&tvf=tymAukSy8hdmMTExLnJuZGZuay5jb20"
        }]

    const stepPercentage: number = config.stepPercentage
    const standartVolume: number = config.standardVolume
    const previousVolume: number = config.previousVolume
    const [currentRadio, setCurrentRadio] = useState<{id: number, name: string, group: string, streamURL: string}>()
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
    }

    const handleRadioChange = (newRadio: string) =>{
        const radio = streamInfo.find(x => x.name == newRadio);
        if (!radio) return
        setCurrentRadio(radio)
    }

    const calculateStep = () => {
        return 1 / (100 * stepPercentage)
    }

    const togglePlay = () => {
        setPlaying(!isPlaying)
    }

    return (
        <div className={"w-screen min-h-screen flex justify-center items-center flex-col"}>

            <audio ref={audioRef} title={"song title"} src={currentRadio?.streamURL}/>

            <a className={"text-black m-2"}>{currentRadio ? currentRadio.name : "Kein aktiver sender"}</a>

            <Slider min={0} defaultValue={[previousVolume]} step={calculateStep()} max={1} className={"w-[20%] m-2"}
                    onValueChange={(value) => handleVolumeChange(value[0])}/>
            <a className={"text-black m-2"}>Aktuelle Lautstärke: {Math.round(volume * 100)}%</a>

            <Select onValueChange={(selectedStation) => handleRadioChange(selectedStation)}>
                <SelectTrigger className={"w-[20%] m-2"}>
                    <SelectValue placeholder={"Wähle ein Radio"} className={"text-black"}/>
                </SelectTrigger>
                <SelectContent className={"text-black m-2"}>
                    {streamInfo.map(x => {
                        return (
                            <SelectItem key={x.id} value={x.name} className={"text-black m-2"}>{x.name}</SelectItem>
                        )
                    })}
                </SelectContent>
            </Select>

            <Button className={"h-[5vh] w-[15%] m-2 font-semibold"}
                    onClick={togglePlay}>{isPlaying ? PAUSE_ICON : PLAY_ICON}{isPlaying ? "Pause" : "Play"}</Button>
        </div>
    )
};
