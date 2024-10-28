/**
 * @author .jannik
 * @file CurrentRadioDisplay.tsx
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
import { ICurrentRadioDisplayProps } from "@/interface/Player/ICurrentRadioDisplayProps";

export const CurrentRadioDisplay = ({ currentRadio }: ICurrentRadioDisplayProps) => {
	return (
		<div className="w-full max-w-xs bg-gray-100 text-black font-semibold text-center py-2 px-4 rounded-lg shadow-md m-2">
			<p className="text-lg">
				{currentRadio ? currentRadio.name : "Kein aktiver Sender"}
			</p>
		</div>
	);
};
