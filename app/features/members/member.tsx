export default function ChurchLeadership() {
  const deacons = [
    "Deac. Cesar Cortan",
    "Deac. Elmer Vargas",
    "Deac. Leonora Cruz",
    "Deac. Monical Salacup",
    "Deac. Jhulia Garcia",
  ];

  const ministries = [
    { name: "Rev. Bernardo Llano", role: "Missions & Church Planting" },
    { name: "Bro. Jeremy Llano", role: "Education" },
    { name: "Eld. Asbel Whigan", role: "Prayer & Visitation" },
    { name: "Eld. Ryan Luceña", role: "Men’s Ministry" },
    { name: "Bro. Vergel Bongalosa", role: "Music Ministry" },
    { name: "Bro. Mark Sam Felecia", role: "Youth & Young Adults" },
    { name: "Deac. Jhulia Garcia", role: "Children’s Ministry – PEC Gentri" },
    {
      name: "Sis. Cielo Clarito",
      role: "Children’s Ministry – PEC Maragondon",
    },
    { name: "Sis. Girlie Luceña", role: "Women’s Ministry" },
  ];

  return (
    <section className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-20">
          {/* <p className="uppercase tracking-[5px] text-[#C6A777] text-sm mb-4">
            Leadership
          </p> */}

          <h2 className="text-5xl font-bold text-white">
            Board of Deacons & Ministry Coordinators
          </h2>
        </div>

        {/* DEACONS */}
        <h3 className="text-2xl text-[#EADBC8] font-semibold mb-6">
          Board of Deacons
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {deacons.map((name, i) => (
            <div
              key={i}
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-2xl
                p-6
                flex items-center gap-4
                hover:border-[#C6A777]/40
                transition
              "
            >
              {/* AVATAR */}
              <div className="h-12 w-12 rounded-full bg-[#C6A777]/20 flex items-center justify-center text-[#C6A777] font-bold">
                {name.split(" ")[1]?.charAt(0)}
              </div>

              <div>
                <p className="text-white font-semibold">{name}</p>
                <p className="text-sm text-[#B8B8B8]">Deacon</p>
              </div>
            </div>
          ))}
        </div>

        {/* MINISTRIES */}
        <h3 className="text-2xl text-[#EADBC8] font-semibold mb-6">
          Ministry Coordinators
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((m, i) => (
            <div
              key={i}
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-2xl
                p-6
                hover:-translate-y-1
                hover:border-[#C6A777]/40
                transition-all duration-300
              "
            >
              <div className="flex items-center gap-4 mb-4">
                {/* AVATAR */}
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#EADBC8] to-[#C6A777] flex items-center justify-center text-black font-bold">
                  {m.name.split(" ")[1]?.charAt(0)}
                </div>

                <div>
                  <p className="text-white font-semibold">{m.name}</p>
                  <p className="text-sm text-[#C6A777]">{m.role}</p>
                </div>
              </div>

              {/* QUOTE STYLE BLOCK */}
              <p className="text-[#B8B8B8] text-sm leading-relaxed">
                “Serving the Lord faithfully through this ministry with humility
                and dedication.”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
