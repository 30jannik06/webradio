/**
 * @author .jannik
 * @file IRadioStation.ts
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
export interface IRadioStation {
	id: number,
	name: string,
	group?: string,
	streamURL: string
}

export interface IRadioGroup {
	[group: string]: IRadioStation[];
}
