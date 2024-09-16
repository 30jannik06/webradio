/**
 * @author .jannik
 * @file IVolumeSliderProps.ts
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
export interface IVolumeSliderProps {
	volume: number;
	setVolumeOnLoad: () => number;
	calculateStep: () => number;
	handleVolumeChange: (volume: number) => void;
}
