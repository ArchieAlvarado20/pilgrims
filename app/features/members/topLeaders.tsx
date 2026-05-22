"use client";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-[#C6A777] text-sm mb-4">
            Leadership
          </p>

          <h2 className="text-5xl font-bold text-white">Top Church Leaders</h2>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                shadow-2xl
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
                    group-hover:scale-105
                    transition-transform duration-500
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

                  {/* GOLD DOT */}
                  <motion.span
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="
                      h-3 w-3 rounded-full
                      bg-[#C6A777]
                      shadow-lg shadow-[#C6A777]/40
                    "
                  />
                </div>

                {/* QUOTE */}
                <p
                  className="
                    text-[#B8B8B8]
                    text-sm
                    mt-4
                    opacity-0
                    translate-y-3
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all duration-500
                  "
                >
                  Serving Christ faithfully in ministry and leadership.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
