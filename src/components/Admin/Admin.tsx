"use client";
import React from "react";
import {IAdminProps} from "@/interface/Admin/IAdminProps";
import {AdminStreamsTable} from "@/components/Admin/Components/AdminStreamsTable";
import {AdminButtons} from "@/components/Admin/Components/AdminButtons";

export const Admin: React.FC<IAdminProps> = ({streams}) => {
	return (
		<main className="bg-blue-500 min-h-screen flex justify-center items-center flex-col">
			<AdminStreamsTable streams={streams}/>
			<AdminButtons/>
		</main>
	);
};
