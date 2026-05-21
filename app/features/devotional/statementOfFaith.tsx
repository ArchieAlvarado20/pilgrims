export default function StatementOfFaith() {
  const beliefs = [
    {
      title: "The Word of God",
      text: "We believe the Bible is inspired by God, without error in its original form, and is the final authority for faith and life.",
    },
    {
      title: "The One True God",
      text: "We believe in one God, Creator of all, who exists eternally in three persons: Father, Son, and Holy Spirit.",
    },
    {
      title: "Jesus Christ",
      text: "We believe in the deity of Christ, His atoning death for sin, His bodily resurrection, ascension, and present reign in heaven.",
    },
    {
      title: "Humanity & Sin",
      text: "We believe man is created in God's image but fallen in sin, and all humanity is in need of redemption.",
    },
    {
      title: "Salvation",
      text: "We believe salvation is by grace alone through faith in Jesus Christ, not by works, resulting in repentance and new life.",
    },
    {
      title: "The Holy Spirit",
      text: "We believe the Holy Spirit is fully God, personally active in believers, guiding and empowering the church.",
    },
    {
      title: "The Church",
      text: "We believe there is one universal church under Christ, called to worship, edification, and faithful gathering.",
    },
    {
      title: "Leadership",
      text: "We believe the church is biblically led by qualified elders who oversee and shepherd the congregation.",
    },
    {
      title: "Sacraments",
      text: "We believe baptism and the Lord’s Supper are covenant signs that point to Christ, not human power or ritual.",
    },
    {
      title: "Christian Life & Mission",
      text: "We believe believers are called to holiness, service, and gospel mission in all areas of life.",
    },
  ];

  return (
    <section className="bg-black py-28" id="faith">
      <div className="max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[5px] text-[#C6A777] text-sm mb-4">
            Doctrine
          </p>

          <h2 className="text-5xl font-bold text-white">Statement of Faith</h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {beliefs.map((item, i) => (
            <div
              key={i}
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-6
                hover:border-[#C6A777]/50
                transition
              "
            >
              <h3 className="text-[#C6A777] font-semibold text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
