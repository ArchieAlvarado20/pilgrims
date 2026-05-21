export default function ChurchHeader() {
  return (
    <section className="bg-black py-24" id="contact">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="uppercase tracking-[5px] text-[#C6A777] text-sm mb-4">
          Contact Us
        </p>
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Pilgrims Evangelical Church
        </h1>

        {/* TAGLINE */}
        <p className="text-[#C6A777] mt-6 text-lg md:text-xl tracking-wide">
          Glorify Christ. Edify His Church. Expand His Kingdom
        </p>

        {/* ADDRESS CARD */}
        <div className="mt-12 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
          <p className="text-gray-300 leading-relaxed">
            Blk 17 Lot 17-19 Europe St. Country Meadow, San Francisco, General
            Trias, Cavite
          </p>

          <p className="text-[#C6A777] mt-4 font-semibold ">📞 0917 704 4395</p>

          <p className="text-gray-400 mt-2 text-sm">
            Contact us for prayers, fellowship, and ministry inquiries
          </p>
        </div>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-full bg-[#C6A777] text-black font-semibold hover:scale-105 transition">
            Visit Us
          </button>

          <button className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition">
            Contact Church
          </button>
        </div>
      </div>
    </section>
  );
}
