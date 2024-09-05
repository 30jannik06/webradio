import Header from "@/components/Header";
import {Footer} from "@/components/Footer";

export default function Home() {
	return (
		<main className={"w-screen h-screen bg-gray-100"}>
			<Header/>
			<div className={"w-screen h-auto"}></div>
			<Footer/>
		</main>
	);
}
