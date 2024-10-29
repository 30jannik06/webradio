/**
 * @author .jannik
 * @file AudioControls.tsx
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
import {Edit, Trash} from "lucide-react";
import React from "react";
import {IAdminProps} from "@/interface/Admin/IAdminProps";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {useRouter} from "next/navigation";
import {db} from "@/server/db"


export const AdminStreamsTable = ({streams}: IAdminProps) => {
	const router = useRouter();

	const handleEditClick = (id: number)=> {
		router.push(`/admin/edit/${id}`);
	}

	const deleteStream = (id: number) => {
		console.log(id);
		//db.streams.delete({where: {id: id}})
	}

	return (
		<div
			className="bg-gray-800 rounded-md flex justify-center p-8 mb-2 max-w-6xl max-h-[60vh] h-auto w-full shadow-lg overflow-y-auto">
			<Table className="w-full">
				<TableHeader>
					<TableRow className={"hover:bg-transparent"}>
						<TableHead className="text-white font-bold w-[10px]">Radio ID</TableHead>
						<TableHead className="text-white font-bold w-[100px]">Radio Name</TableHead>
						<TableHead className="text-white font-bold w-[100px]">Radio URL</TableHead>
						<TableHead className="text-white font-bold w-[100px]">Radio Group</TableHead>
						<TableHead className="text-white font-bold w-[10px]"></TableHead>
						<TableHead className="text-white text-right font-bold w-[10px]"></TableHead>
					</TableRow>
				</TableHeader>
				<TableBody className="w-full">
					{streams.map(s => (
						<TableRow className="text-white hover:bg-gray-600" key={s.id}>
							<TableCell className="text-white">{s.id}</TableCell>
							<TableCell className="text-white">{s.name}</TableCell>
							<TableCell className="text-white">{s.streamURL.slice(0, 40)}</TableCell>
							<TableCell className="text-white">{s.group}</TableCell>
							<TableCell className="text-white">
								<Edit className={"w-[2vh] hover:text-green-400"}
									  onClick={() => handleEditClick(s.id)}/></TableCell>
							<TableCell className="text-white">
								<Trash className={"w-[2vh] hover:text-red-500"}
									   onClick={() => deleteStream(s.id)}/></TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
};
