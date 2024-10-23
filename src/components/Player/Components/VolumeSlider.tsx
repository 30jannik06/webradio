/**
 * @author .jannik
 * @file VolumeSlider.tsx
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
import { Slider } from "@/components/ui/slider";
import { IVolumeSliderProps } from "@/interface/IVolumeSliderProps";

export const VolumeSlider = ({
								 volume,
								 setVolumeOnLoad,
								 calculateStep,
								 handleVolumeChange,
							 }: IVolumeSliderProps) => {
	return (
		<div className="w-full max-w-xs m-4 p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
			<div className="flex items-center justify-between w-full mb-4">
				<label className="text-sm font-semibold text-gray-700">Lautstärke</label>
				<span className="text-sm text-gray-500">{Math.round(volume * 100)}%</span>
			</div>
			<Slider
				min={0}
				defaultValue={[setVolumeOnLoad() ?? 0]}
				step={calculateStep() ?? 0.1}
				max={1}
				onValueChange={(value: number[]) => handleVolumeChange(value[0])}
				className="w-full h-2 bg-gray-300 rounded-full cursor-pointer"
			>
				<div className="h-2 bg-green-500 rounded-full" />
			</Slider>
		</div>
	);
};
