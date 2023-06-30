import BgMic from '../assets/bg-mic.png';

function Cards({ className }: { className?: string }) {
	return (
		<div className={`flex flex-col gap-4 border-[0.5px] border-[#7A3199] rounded-[10px] p-7 max-w-[268px] aspect-[67/40] font-[Poppins] ${className}`}>
			<h4 className="text-xl font-bold">Interactive Features</h4>
			<p className="text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
		</div>
	);
}

export default function About() {
	return (
		<section id="about" className="flex gap-20 pt-40">
			<img src={BgMic} className="absolute right-0 -translate-y-64 -z-10 opacity-20" />
			<div className="w-3/5">
				<div className="grid grid-rows-2 grid-cols-2 justify-center items-center gap-4 mr-auto w-fit">
					<Cards className="row-start-1 col-start-1 mb-8" />
					<Cards className="row-start-1 col-start-2 mt-8" />
					<Cards className="row-start-2 col-start-1 mb-8" />
					<Cards className="row-start-2 col-start-2 mt-8" />
				</div>
			</div>
			<div className="w-2/5 my-auto">
				<h1 className="text-5xl !text-[44px] font-bold max-w-[580px]">About the Course</h1>
				<p className="mt-6 mb-12 max-w-[433px] text-sm !text-[16px]">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
					1500s, when an unkno
				</p>
				<button
					className={`rounded-[10px] px-14 py-4 text-white text-xl font-[Poppins] font-bold bg-gradient-to-r hover:bg-gradient-to-l from-[#4776E6] to-[#8E54E9] transition-colors duration-300`}
				>
					Explore Now
				</button>
			</div>
		</section>
	);
}
