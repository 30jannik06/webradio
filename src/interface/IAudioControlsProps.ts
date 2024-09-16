export interface IAudioControlsProps {
	isPlaying: boolean;
	togglePlay: () => void;
	isMuted : boolean;
	handleMuteToggle: () => void;
}
