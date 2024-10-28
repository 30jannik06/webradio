/**
 * @author .jannik
 * @file IAudioPlayerProps.ts
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
import {RefObject} from "react";

export interface IAudioPlayerProps {
	audioRef: RefObject<HTMLAudioElement>;
	streamURL?: string;
}
