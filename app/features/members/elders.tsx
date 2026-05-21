export default function EldersSection() {
  const elders = [
    {
      name: "Rev. Bernardo P. Llano Jr., MDiv",
      role: "Senior Pastor / Elder",
      img: "images/pastor.jpg",
    },
    {
      name: "Eld. Asbel I. Whigan",
      role: "Prayer Ministry / Elder",
      img: "images/asbel.webp",
    },
    {
      name: "Eld. Ryan Jhay B. Luceña",
      role: "Elder",
      img: "images/ryan.webp",
    },
  ];

  return (
    <section className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">Our Elders</h2>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {elders.map((elder, i) => (
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
                  src={elder.img}
                  alt={elder.name}
                  className="
    w-full h-full object-cover object-top
    group-hover:scale-110
    transition-transform duration-700
  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 p-6 w-full">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white text-xl font-bold">
                      {elder.name}
                    </h3>
                    <p className="text-[#C6A777] text-sm">{elder.role}</p>
                  </div>

                  <span className="h-3 w-3 rounded-full bg-[#C6A777] shadow-lg shadow-[#C6A777]/40"></span>
                </div>

                <p className="text-[#B8B8B8] text-sm mt-4 opacity-0 group-hover:opacity-100 transition">
                  Faithful servants of God in ministry and leadership.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
