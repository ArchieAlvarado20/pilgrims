"use client";
import { useEffect, useState } from "react";

export default function SermonSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    const section = document.getElementById("sermons");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const sermons = [
    {
      title: "Walking in Faith",
      preacher: "Rev. Bernardo P. Llano Jr.",
      video:
        "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fcvntwrshp%2Fvideos%2F501619312369913%2F&show_text=false&width=560&t=0",
    },
    {
      title: "Grace That Sustains",
      preacher: "Eld. Asbel Whigan",
      video:
        "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fcvntwrshp%2Fvideos%2F1410041136586273%2F&show_text=false&width=560&t=0",
    },
    {
      title: "Living for Christ",
      preacher: "Bro. Jeremy Llano",
      video:
        "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fcvntwrshp%2Fvideos%2F443564544966262%2F&show_text=false&width=560&t=0",
    },
  ];

  return (
    <section id="sermons" className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div
          className={`
            text-center mb-14 transition-all duration-1000
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <p className="uppercase tracking-[5px] text-[#C6A777] text-sm mb-4">
            Messages
          </p>

          <h2 className="text-5xl font-bold text-white">Latest Sermons</h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {sermons.map((s, i) => (
            <div
              key={i}
              className={`
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-3xl
                overflow-hidden
                shadow-2xl
                transition-all duration-1000 ease-out
                hover:-translate-y-2

                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
              `}
              style={{ transitionDelay: `${i * 500}ms` }}
            >
              {/* VIDEO */}
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={s.video}
                  title={s.title}
                  allowFullScreen
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-white text-xl font-bold">{s.title}</h3>

                <p className="text-[#C6A777] text-sm mt-1">{s.preacher}</p>

                <button className="mt-4 px-4 py-2 rounded-full bg-[#C6A777] text-black font-semibold text-sm hover:scale-105 transition">
                  Watch Sermon
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
