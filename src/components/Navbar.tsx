export default function Navbar() {
	return (
		<nav className="flex justify-between text-white">
			<span className="font-bold">Logo</span>
			<ul className="flex gap-24">
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#plan">Pricing</a>
				</li>
				<li>
					<a href="#testimoni">Review</a>
				</li>
			</ul>
		</nav>
	);
}
