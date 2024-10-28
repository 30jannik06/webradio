/**
 * @author .jannik
 * @file RadioSelector.tsx
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import type {IRadioSelectorProps} from "@/interface/Player/IRadioSelectorProps";

export const RadioSelector = ({radioStations, handleRadioChange, groupRadioStations, loading}: IRadioSelectorProps) => (
	<Select onValueChange={handleRadioChange} disabled={loading}>
		{/* Select Trigger */}
		<SelectTrigger
			className="w-full max-w-xs bg-gray-100 text-black font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gray-200 hover:scale-105">
			<SelectValue placeholder="Wähle ein Radio" className="text-black"/>
		</SelectTrigger>

		{/* Select Content */}
		<SelectContent className="bg-white border border-gray-300 rounded-lg shadow-lg mt-2 max-h-60 overflow-y-auto">
			{Object.keys(groupRadioStations(radioStations)).map((groupName) => (
				<SelectGroup key={groupName} className="mb-2">
					<SelectLabel className="text-gray-500 font-bold px-4 py-2">{groupName}</SelectLabel>
					{groupRadioStations(radioStations)[groupName]?.map((station) => (
						<SelectItem
							key={station.id}
							value={station.name}
							className="text-black px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
						>
							{station.name}
						</SelectItem>
					))}
				</SelectGroup>
			))}
		</SelectContent>
	</Select>
);
