// @ts-ignore
import { ReactComponent as BackroundFirst } from './assets/background-first.svg';
// @ts-ignore
import { ReactComponent as BackroundLast } from './assets/background-last.svg';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PriceCard from './components/Plan';
import Testimoni from './components/Testimoni';
import GetStart from './components/GetStart';
import Footer from './components/Footer';

export default function App() {

	return (
		<main className="flex flex-col gap-32 mx-auto w-full px-8 pt-9 max-w-[1080px] ">
			<BackroundFirst className="absolute top-0 left-0 right-0 -z-10" />
			<Navbar />
			<Hero />
			<About />
			<PriceCard />
			<Testimoni />
			<GetStart />
			<Footer />
			<BackroundLast className="absolute bottom-0 left-0 right-0 -z-10" />
		</main>
	);
}
