"use client";
import React from "react";
import {IAdminProps} from "@/interface/Admin/IAdminProps";
import {AdminEditButtons} from "@/components/Admin/Edit/Components/AdminButtons";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

export const AdminEdit: React.FC<IAdminProps> = ({streams}) => {
	return (
		<main className="bg-blue-500 min-h-screen flex justify-center items-center flex-col">
			<div
				className="bg-gray-800 rounded-md flex justify-center p-8 mb-2 max-w-2xl max-h-[60vh] h-auto w-full shadow-lg overflow-y-auto">
				{streams.map(s => (
					<div className={"flex flex-col w-full items-center"}>
						<Label htmlFor={"id"} className={"text-white p-1 font-bold"}>Stream ID</Label>
						<Input id={"id"} className={"text-white w-[80%]"} defaultValue={s.id}/>
						<Label htmlFor={"name"} className={"text-white p-1 font-bold"}>Stream Name</Label>
						<Input id={"name"} className={"text-white w-[80%]"} defaultValue={s.name}/>
						<Label htmlFor={"streamurl"} className={"text-white p-1 font-bold"}>Stream URL</Label>
						<Input id={"streamurl"} className={"text-white w-[80%]"} defaultValue={s.streamURL}/>
						<Label htmlFor={"group"} className={"text-white p-1 font-bold"}>Stream Group</Label>
						<Input id={"group"} className={"text-white w-[80%]"} defaultValue={s.group}/>
					</div>
				))}
			</div>
			<AdminEditButtons/>
		</main>
	);
};
