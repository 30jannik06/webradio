import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import {IRadioSelectorProps} from "@/interface/IRadioSelectorProps";

export const RadioSelector = ({ radioStations, handleRadioChange, groupRadioStations }: IRadioSelectorProps) => (
	<Select onValueChange={handleRadioChange}>
		<SelectTrigger className="w-full max-w-xs m-2">
			<SelectValue placeholder="Wähle ein Radio" className="text-black" />
		</SelectTrigger>
		<SelectContent className="text-black m-2">
			{Object.keys(groupRadioStations(radioStations)).map((groupName) => (
				<SelectGroup key={groupName}>
					<SelectLabel>{groupName}</SelectLabel>
					{groupRadioStations(radioStations)[groupName].map((station) => (
						<SelectItem key={station.id} value={station.name} className="text-black m-2">
							{station.name}
						</SelectItem>
					))}
				</SelectGroup>
			))}
		</SelectContent>
	</Select>
);
