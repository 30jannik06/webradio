/**
 * @author .jannik
 * @file IRadioSelectorProps.ts
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
import {IRadioGroup, IRadioStation} from "@/interface/IRadioStation";

export interface IRadioSelectorProps {
	radioStations: IRadioStation[];
	handleRadioChange: (station: string) => void;
	groupRadioStations: (stations: IRadioStation[]) => IRadioGroup;
}
