// @ts-ignore
import { ReactComponent as Headphone } from '../assets/solar_podcast-outline.svg';
// @ts-ignore
import { ReactComponent as Microphone } from '../assets/microphone.svg';
// @ts-ignore
import { ReactComponent as DottedBG } from '../assets/dotted-bg.svg';
import hero_image_1 from '../assets/image-2.jpg';
import hero_image_2 from '../assets/image-1.jpg';


export default function Hero() {
    return (
        <section className="flex text-lg text-white">
            <div className="w-1/2">
                <h1 className="text-5xl font-bold max-w-[580px]">Learn how to launch a successful podcast</h1>
                <p className="mt-6 mb-20 max-w-[433px] text-sm !text-[16px]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s
                </p>
                <button
                    className={`rounded-[10px] px-14 py-4 text-white text-xl font-[Poppins] font-bold bg-gradient-to-r hover:bg-gradient-to-l from-[#4776E6] to-[#8E54E9] transition-colors duration-300`}
                >
                    Sign Up Now
                </button>
            </div>
            <div className="relative left-8 grid grid-rows-5 grid-cols-11 w-1/2">
                <DottedBG className="row-start-2 row-span-4 col-start-2 col-span-9 translate-x-[10%] -z-10" />
                <img src={hero_image_1} className="row-start-1 row-span-5 col-start-2 col-span-9 rounded-[10px] aspect-[7/4] object-cover" />
                <img src={hero_image_2} className="row-start-2 row-span-4 col-start-1 col-span-9 rounded-[10px] aspect-[7/4] object-cover" />
                <Headphone class="absolute -right-[4.5rem] bottom-[6.5rem] scale-[80%] -rotate-[16.83deg]" />
                <Microphone class="absolute -right-6 -bottom-10 scale-[80%] rotate-[15.14deg]" />
            </div>
        </section>
    );
}
