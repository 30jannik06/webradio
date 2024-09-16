export interface IRadioStation {
	id: number,
	name: string,
	group?: string,
	streamURL: string
}

export interface IRadioGroup {
	[group: string]: IRadioStation[];
}
