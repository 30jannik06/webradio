import {Slider} from "@/components/ui/slider"
import {IVolumeSliderProps} from "@/interface/IVolumeSliderProps";

export const VolumeSlider = ({volume, setVolumeOnLoad, calculateStep, handleVolumeChange}: IVolumeSliderProps) => {
	return(
		<div className="w-full max-w-xs m-2">
			<Slider
				min={0}
				defaultValue={[setVolumeOnLoad()]}
				step={calculateStep()}
				max={1}
				onValueChange={(value: number[]) => handleVolumeChange(value[0])}
			/>
			<a className={"text-black m-2 select-none text-center"}>Aktuelle Lautstärke: {Math.round(volume * 100)}%</a>
		</div>
	)
}
