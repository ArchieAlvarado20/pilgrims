export default function About() {
  return (
    <>
      <section className="relative bg-black py-28 overflow-hidden" id="about">
        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C6A777]/10 blur-[140px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-1 gap-20 items-center">
            {/* IMAGE SIDE */}
            {/* <div className="relative group">
              <div
                className="
            absolute -inset-4
            rounded-[2rem]
            bg-gradient-to-r
            from-[#EADBC8]/20
            to-[#C6A777]/10
            blur-2xl
            opacity-70
          "
              />

              <img
                src="https://images.unsplash.com/photo-1520637836862-4d197d17c90a?q=80&w=1400&auto=format&fit=crop"
                alt="Church Worship"
                className="
            relative
            rounded-[2rem]
            h-[650px]
            w-full
            object-cover
            border border-white/10
            shadow-2xl
            group-hover:scale-[1.02]
            transition-all duration-700
          "
              />
            </div> */}

            {/* CONTENT SIDE */}
            <div>
              {/* LABEL */}
              <p className="uppercase tracking-[5px] text-[#C6A777] text-sm mb-5">
                About Us
              </p>

              {/* TITLE */}
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
                A Gospel-Centered
                <span className="text-[#C6A777]"> Community Church</span>
              </h2>

              {/* FIRST PARAGRAPH */}
              <p className="text-[#B8B8B8] text-lg leading-relaxed mb-7">
                Pilgrims Evangelical Church is a non-denominational evangelical
                community church located at B17 L17–19 Europe Street, Country
                Meadow, San Francisco, General Trias, Cavite.
              </p>

              {/* SECOND PARAGRAPH */}
              <p className="text-[#B8B8B8] text-lg leading-relaxed mb-7">
                PEC upholds the historic orthodox Christian faith as revealed in
                the Holy Scriptures and faithfully summarized in the Apostles’
                Creed.
              </p>

              {/* THIRD PARAGRAPH */}
              <p className="text-[#B8B8B8] text-lg leading-relaxed mb-10">
                As a confessional church, all of our beliefs and practices are
                governed by the authority of Scripture — the inerrant,
                infallible, and inspired Word of God. The Westminster Standards
                serve as our confessional framework, systematically expressing
                the doctrines taught in Scripture.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-5">
                <button
                  className="
              px-8 py-4
              rounded-full
              bg-gradient-to-r
              from-[#EADBC8]
              to-[#C6A777]
              text-black
              font-semibold
              shadow-lg
              hover:scale-105
              transition-all duration-300
            "
                >
                  Learn More
                </button>

                <button
                  className="
              px-8 py-4
              rounded-full
              border border-white/10
              bg-white/5
              backdrop-blur-md
              text-white
              hover:bg-white/10
              transition-all duration-300
            "
                >
                  Our Beliefs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
