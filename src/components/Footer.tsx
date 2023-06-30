// @ts-ignore
import { ReactComponent as Facebook } from '../assets/facebook.svg';
// @ts-ignore
import { ReactComponent as Youtube } from '../assets/youtube.svg';
// @ts-ignore
import { ReactComponent as Instagram } from '../assets/instagram.svg';
// @ts-ignore
import { ReactComponent as Twitter } from '../assets/twitter.svg';

export default function Footer() {
	return (
		<footer className="flex justify-between items-center border-t-[0.5px] border-white px-14 py-5 text-white font-[Poppins] text-xs">
			<span>All Right Reserved @Copyright 2023</span>
			<ul className="flex gap-6 ml-auto mr-16">
				<li>
					<a>Terms of Service</a>
				</li>
				<li>
					<a>Privacy Policy</a>
				</li>
				<li>
					<a>Product</a>
				</li>
			</ul>
			<ul className="flex gap-4">
				<li>
					<a href="https://www.facebook.com" target="_blank">
						<Facebook />
					</a>
				</li>
				<li>
					<a href="https://www.youtube.com" target="_blank">
						<Youtube />
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com" target="_blank">
						<Instagram />
					</a>
				</li>
				<li>
					<a href="https://twitter.com" target="_blank">
						<Twitter />
					</a>
				</li>
			</ul>
		</footer>
	);
}
