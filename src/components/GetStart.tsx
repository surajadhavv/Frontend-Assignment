export default function GetStart() {
    return (
        <section className="flex flex-col items-center gap-6 mt-28">
            <h2 className="w-fit text-3xl font-bold">We have what you’re looking for</h2>
            <p className="max-w-[596px] text-xs font-[Poppins] text-[#8E54E9] text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type a
            </p>
            <button
                className={`rounded-[10px] px-14 py-4 text-white text-xl font-[Poppins] font-bold bg-gradient-to-r hover:bg-gradient-to-l from-[#4776E6] to-[#8E54E9] transition-colors duration-300 mt-10`}
            >
                Get Started Now
            </button>
        </section>
    );
}