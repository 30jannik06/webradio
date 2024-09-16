import {RefObject} from "react";

export interface IAudioPlayerProps {
	audioRef: RefObject<HTMLAudioElement>;
	streamURL?: string;
}
