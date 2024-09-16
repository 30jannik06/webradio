export interface IVolumeSliderProps {
	volume: number;
	setVolumeOnLoad: () => number;
	calculateStep: () => number;
	handleVolumeChange: (volume: number) => void;
}
