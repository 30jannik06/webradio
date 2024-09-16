import {IAudioPlayerProps} from "@/interface/IAudioPlayerProps";

export const AudioPlayer = ({audioRef, streamURL}: IAudioPlayerProps) => {
	return (
		<audio ref={audioRef} title="song title" src={streamURL}/>
	)
}
