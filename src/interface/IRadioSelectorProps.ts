import {IRadioGroup, IRadioStation} from "@/interface/IRadioStation";

export interface IRadioSelectorProps {
	radioStations: IRadioStation[];
	handleRadioChange: (station: string) => void;
	groupRadioStations: (stations: IRadioStation[]) => IRadioGroup;
}
