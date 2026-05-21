export default function TopLeaders() {
  const leaders = [
    {
      name: "Rev. Bernardo Llano",
      role: "Senior Pastor",
      img: "images/pastor.jpg",
    },
    {
      name: "Eld. Asbel Whigan",
      role: "Elder / Prayer Ministry",
      img: "images/asbel.webp",
    },
    {
      name: "Bro. Jeremy Llano",
      role: "Education Ministry",
      img: "images/em.png",
    },
  ];

  return (
    <section className="bg-black py-28" id="leaders">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-[#C6A777] text-sm mb-4">
            Leadership
          </p>

          <h2 className="text-5xl font-bold text-white">Top Church Leaders</h2>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                shadow-2xl
                hover:-translate-y-2
                transition-all duration-500
              "
            >
              {/* IMAGE */}
              <div className="h-80 overflow-hidden">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110
                    transition-transform duration-700
                  "
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 p-6 w-full">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white text-xl font-bold">
                      {leader.name}
                    </h3>
                    <p className="text-[#C6A777] text-sm">{leader.role}</p>
                  </div>

                  {/* SMALL GOLD DOT */}
                  <span className="h-3 w-3 rounded-full bg-[#C6A777] shadow-lg shadow-[#C6A777]/40"></span>
                </div>

                {/* QUOTE STYLE */}
                <p className="text-[#B8B8B8] text-sm mt-4 opacity-0 group-hover:opacity-100 transition">
                  Serving Christ faithfully in ministry and leadership.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
