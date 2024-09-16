import {Button} from "@/components/ui/button";
import {PauseIcon, PlayIcon, Volume2Icon, VolumeOffIcon} from "lucide-react";
import React from "react";
import {IAudioControlsProps} from "@/interface/IAudioControlsProps";

//#region ICONS
const PLAY_ICON: JSX.Element = <PlayIcon className={"mr-2"}/>
const PAUSE_ICON: JSX.Element = <PauseIcon className={"mr-2"}/>
const VOLUME_ON_ICON: JSX.Element = <Volume2Icon className={"mr-2"}/>
const VOLUME_OFF_ICON: JSX.Element = <VolumeOffIcon className={"mr-2"}/>
//#endregion

export const AudioControls = ({isPlaying, togglePlay, isMuted, handleMuteToggle}: IAudioControlsProps) => (
	<div className="w-full max-w-xs h-auto flex flex-col sm:flex-row justify-between m-2">
		<Button className={"h-10 w-full sm:w-[48%] m-2 font-semibold select-none"} onClick={togglePlay}>
			{isPlaying ? PAUSE_ICON: PLAY_ICON}
			{isPlaying ? "Pause" : "Play"}
		</Button>
		<Button className={"h-10 w-full sm:w-[48%] m-2 font-semibold select-none"} onClick={handleMuteToggle}>
			{isMuted ? VOLUME_OFF_ICON: VOLUME_ON_ICON}
			{isMuted ? "Stummgeschaltet" : "Click to Mute"}
		</Button>
	</div>
)
