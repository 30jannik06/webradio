import {IRadioStation} from "@/interface/IRadioStation";

export interface IRadioGroup {
	[group: string]: IRadioStation[];
}
