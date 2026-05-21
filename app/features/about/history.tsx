export default function ChurchHistory() {
  return (
    <section className="bg-black py-28" id="history">
      <div className="max-w-5xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[5px] text-[#C6A777] text-sm mb-4">
            Our History
          </p>

          <h2 className="text-5xl font-bold text-white">
            A Brief History of Pilgrims Evangelical Church
          </h2>
        </div>

        {/* CONTENT CARD */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 text-gray-300 leading-relaxed space-y-6">
          <p>
            Pilgrims Evangelical Church (PEC) began in 2010 as a small Bible
            study group of four families in the home of Pastor Bernard. As the
            group grew, they moved into a small unit near Tropical Village and
            initially called themselves{" "}
            <span className="text-[#C6A777] font-semibold">
              “Covenant of Grace Church.”
            </span>
          </p>

          <p>
            Through continued growth and providential connections, the church
            later joined Spirit and Truth Ministries International Christian
            Church in 2011, gaining a new worship space and structure under
            shared leadership.
          </p>

          <p>
            In 2017, after a major transition, the congregation gathered again
            independently as{" "}
            <span className="text-[#C6A777] font-semibold">
              Covenant Bible Church
            </span>
            , starting anew with faith and unity. The church was later
            registered with the Securities and Exchange Commission and continued
            to grow in membership, ministry, and outreach.
          </p>

          <p>
            During the pandemic, despite challenges, the church continued
            worship online and later resumed physical gatherings, which became a
            season of unexpected growth and expansion.
          </p>

          <p>
            In 2024, after organizational changes, the church was re-established
            as
            <span className="text-[#C6A777] font-semibold">
              {" "}
              Pilgrims Evangelical Church
            </span>
            , reflecting a deeper identity of faith as pilgrims journeying with
            God.
          </p>

          <p>
            Today, PEC continues its mission with outreach in Maragondon, Cavite
            and active ministry in General Trias under the leadership of Pastor
            Bernard, elders, deacons, and ministry workers.
          </p>
        </div>
      </div>
    </section>
  );
}
