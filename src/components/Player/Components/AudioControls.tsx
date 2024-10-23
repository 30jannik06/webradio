/**
 * @author .jannik
 * @file AudioControls.tsx
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
import { Button } from "@/components/ui/button";
import { PauseIcon, PlayIcon, Volume2Icon, VolumeOffIcon } from "lucide-react";
import React from "react";
import { IAudioControlsProps } from "@/interface/IAudioControlsProps";

//#region ICONS
const PLAY_ICON: JSX.Element = <PlayIcon className={"mr-2"} />;
const PAUSE_ICON: JSX.Element = <PauseIcon className={"mr-2"} />;
const VOLUME_ON_ICON: JSX.Element = <Volume2Icon className={"mr-2"} />;
const VOLUME_OFF_ICON: JSX.Element = <VolumeOffIcon className={"mr-2"} />;
//#endregion

export const AudioControls = ({ isPlaying, togglePlay, isMuted, handleMuteToggle }: IAudioControlsProps) => (
	<div className="w-full max-w-xs p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-center sm:flex-row sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4">
		{/* Play/Pause Button */}
		<Button
			className="w-full sm:w-auto flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
			onClick={togglePlay}
		>
			{isPlaying ? PAUSE_ICON : PLAY_ICON}
			<span>{isPlaying ? "Pause" : "Play"}</span>
		</Button>

		{/* Mute/Unmute Button */}
		<Button
			className="w-full sm:w-auto flex items-center justify-center bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
			onClick={handleMuteToggle}
		>
			{isMuted ? VOLUME_OFF_ICON : VOLUME_ON_ICON}
			<span>{isMuted ? "Stummgeschaltet" : "Ton an"}</span>
		</Button>
	</div>
);
