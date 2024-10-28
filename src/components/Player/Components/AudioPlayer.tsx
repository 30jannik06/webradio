/**
 * @author .jannik
 * @file AudioPlayer.tsx
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
import {IAudioPlayerProps} from "@/interface/Player/IAudioPlayerProps";

export const AudioPlayer = ({audioRef, streamURL}: IAudioPlayerProps) => {
	return (
		<audio ref={audioRef} title="song title" src={streamURL}/>
	)
}
