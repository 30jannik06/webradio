export default function LoadingScreen() {
	return (
		<div className="w-screen h-screen flex justify-center items-center flex-col backdrop-blur bg-neutral-950 bg-opacity-80 gap-10">
			<div className="w-[15rem] h-[15rem] rounded-[50%] bg-transparent border-[15px] border-transparent border-t-[15px] border-t-primary animate-spin"></div>
			<p className="text-white font-bold">
				Die Seite lädt etwas länger als erwartet!
			</p>
		</div>
	);
}
