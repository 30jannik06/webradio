import {ICurrentRadioDisplayProps} from "@/interface/ICurrentRadioDisplayProps";

export const CurrentRadioDisplay = ({currentRadio}: ICurrentRadioDisplayProps) => {
	return (
		<a className={"text-black m-2 select-none text-center"}>
			{currentRadio ? currentRadio.name : "Kein aktiver Sender"}
		</a>
	)
}
