export default function DevotionalSection() {
  const devotionals = [
    {
      title: "Devotional",
      date: "September 4, 2025",
      excerpt:
        "Purihin natin ang Diyos at Ama ng ating Panginoong Jesu-Cristo, ang Ama ng kahabagan at Diyos na pinagmumulan ng lahat ng kaaliwan...",
      link: "https://pilgrimsevangelicalchurch.wordpress.com/2025/08/26/devotional-august-26-2025/",
      image: "images/devotional1.webp",
    },
    {
      title: "Devotional – August 26, 2025",
      date: "August 26, 2025",
      excerpt:
        "Kaya’t hiniling ni Moises, “Yahweh, ipakita po ninyo sa akin ang inyong kaluwalhatian!” Exodus 33:18...",
      link: "https://pilgrimsevangelicalchurch.wordpress.com/2025/08/26/devotional-august-26-2025/",
      image: "images/devotional2.webp",
    },
  ];

  return (
    <section className="relative bg-black py-28 overflow-hidden" id="devotion">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-500/10 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[5px] text-[#C6A777] text-sm mb-4">
            Spiritual Growth
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Latest Devotionals
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Be encouraged and strengthened through biblical reflections,
            gospel-centered teachings, and daily devotionals for Christ’s
            church.
          </p>
        </div>

        {/* DEVOTIONAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {devotionals.map((devotional, index) => (
            <div
              key={index}
              className="
                group
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-3xl
                overflow-hidden
                hover:-translate-y-2
                hover:border-amber-400/40
                transition-all duration-500
                shadow-2xl
              "
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden h-72">
                <img
                  src={devotional.image}
                  alt={devotional.title}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110
                    transition-transform duration-700
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* DATE */}
                <div className="absolute bottom-5 left-5">
                  <p className="bg-[#C6A777] text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {devotional.date}
                  </p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-5 group-hover:[#C6A777] transition">
                  {devotional.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-lg mb-8">
                  {devotional.excerpt}
                </p>

                {/* BUTTON */}
                <a
                  href={devotional.link}
                  target="_blank"
                  className="
                    inline-flex items-center gap-3
                    text-[#C6A777]
                    font-semibold
                    text-lg
                    hover:gap-5
                    transition-all duration-300
                  "
                >
                  Read Full Devotional
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
