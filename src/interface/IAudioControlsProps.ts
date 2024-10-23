/**
 * @author .jannik
 * @file IAudioControlsProps.ts
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
export interface IAudioControlsProps {
	isPlaying: boolean;
	togglePlay: () => void;
	isMuted : boolean;
	handleMuteToggle: () => void;
}
