import { useState } from 'react';
// @ts-ignore
import { ReactComponent as Star } from '../assets/star.svg';
import ProfileImage from '../assets/profile.jpg';
// @ts-ignore
import { Splide, SplideTrack, SplideSlide, Options } from '@splidejs/react-splide';
// @ts-ignore
import { ReactComponent as ArrowIcon } from '../assets/arrow.svg';
import './testimoni.css';

function TestimoniCard() {
	return (
		<div className="rounded-[10px] border-[0.5px] border-[#E1A6FF]/40 px-12 py-9 w-[465px] h-[238px]">
			<div className="grid grid-rows-3 grid-cols-[auto,1fr] gap-x-6">
				<img src={ProfileImage} className="row-span-3 rounded-full w-[70px] aspect-square"></img>
				<span className="col-start-2 font-bold">Lolla Smith</span>
				<span className="col-start-2 mt-auto text-sm font-[Poppins]">Microsoft</span>
				<div className="col-start-2 flex gap-2">
					<Star />
					<Star />
					<Star />
					<Star />
					<Star />
				</div>
			</div>
			<p className="mt-6 text-xs">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
				when an unknown printer took a galley of type and scrambled it to make
			</p>
		</div>
	);
}


export default function Testimoni() {

	const SlideOption: Options = {
		arrows: true,
		pagination: true,
		classes: {
			pagination: 'pagination',
			page: 'pagination-page',
		},
		padding: '11rem',
		gap: '2rem',
		trimSpace: true,
		autoWidth: true,
	};

	const [slidePosition, setSlidePosition] = useState<'start' | 'end' | 'middle'>('start');

	function handleSlideMove(_slide: any, list: { items: string | any[] }, _prev: any, curr: { page: number }) {
		if (curr?.page === undefined) return;
		if (curr.page < 1) {
			setSlidePosition('start');
		} else if (curr.page > list.items.length - 2) {
			setSlidePosition('end');
		} else {
			setSlidePosition('middle');
		}
	}
	return (
		<section id="testimoni" className="flex flex-col gap-6 pt-36">
			<h2 className="text-4xl font-bold">Review from customers</h2>
			<p className="max-w-[400px] text-xs font-[Poppins]">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
			</p>
			<div className="absolute mt-32 left-0 w-screen">
				<Splide options={SlideOption} hasTrack={false} onPaginationUpdated={handleSlideMove}>
					<SplideTrack>
						<SplideSlide>
							<TestimoniCard />
						</SplideSlide>
						<SplideSlide>
							<TestimoniCard />
						</SplideSlide>
						<SplideSlide>
							<TestimoniCard />
						</SplideSlide>
						<SplideSlide>
							<TestimoniCard />
						</SplideSlide>
						<SplideSlide>
							<TestimoniCard />
						</SplideSlide>
					</SplideTrack>
					<div className="splide__arrows absolute flex justify-between left-1/2 -translate-x-1/2 -translate-y-52 w-[70%]">
						<button
							className={`splide__arrow splide__arrow--prev p-1 bg-[#E1A6FF]/40 hover:bg-[#E1A6FF] transition-colors duration-200 rounded-full ${slidePosition === 'start' ? 'invisible' : ''}`}
						>
							<ArrowIcon />
						</button>
						<button
							className={`splide__arrow splide__arrow--next transform rotate-180 p-1 bg-[#E1A6FF]/40 hover:bg-[#E1A6FF] transition-colors duration-200 rounded-full ${slidePosition === 'end' ? 'invisible' : ''}`}
						>
							<ArrowIcon />
						</button>
					</div>
				</Splide>
			</div>
			<div className="mt-1 invisible">
				<TestimoniCard />
			</div>
		</section>
	);
}
