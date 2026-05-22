"use client";

import { motion } from "framer-motion";

export default function DevotionalSection() {
  const devotionals = [
    {
      title: "Devotional",
      date: "September 4, 2025",
      excerpt:
        "Purihin natin ang Diyos at Ama ng ating Panginoong Jesu-Cristo, ang Ama ng kahabagan at Diyos na pinagmumulan ng lahat ng kaaliwan...",
      link: "/",
      image: "images/devotional1.webp",
    },
    {
      title: "Devotional – August 26, 2025",
      date: "August 26, 2025",
      excerpt:
        "Kaya’t hiniling ni Moises, “Yahweh, ipakita po ninyo sa akin ang inyong kaluwalhatian!” Exodus 33:18...",
      link: "/",
      image: "images/devotional2.webp",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.92,
      rotateX: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative bg-black py-32 overflow-hidden" id="devotion">
      {/* ANIMATED BACKGROUND */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/10 blur-[180px]"
      />

      {/* FLOATING LIGHT */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-40 h-40 bg-[#C6A777]/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0px" }}
            whileInView={{ opacity: 1, letterSpacing: "5px" }}
            transition={{ duration: 1 }}
            className="uppercase text-[#C6A777] text-sm mb-4"
          >
            Spiritual Growth
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              type: "spring",
            }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Latest Devotionals
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed"
          >
            Be encouraged and strengthened through biblical reflections,
            gospel-centered teachings, and daily devotionals for Christ’s
            church.
          </motion.p>
        </motion.div>

        {/* DEVOTIONAL GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {devotionals.map((devotional, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -15,
                rotateX: -2,
                rotateY: 2,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 14,
              }}
              className="
                group
                relative
                bg-white/5
                border border-white/10
                backdrop-blur-2xl
                rounded-[32px]
                overflow-hidden
                shadow-[0_0_60px_rgba(0,0,0,0.5)]
              "
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* SHIMMER EFFECT */}
              <div
                className="
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  transition duration-700
                  bg-gradient-to-r
                  from-transparent
                  via-white/10
                  to-transparent
                  -translate-x-full
                  group-hover:translate-x-full
                "
              />

              {/* IMAGE */}
              <div className="relative overflow-hidden h-80">
                <motion.img
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 1.2 }}
                  src={devotional.image}
                  alt={devotional.title}
                  className="w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* GLOW */}
                <div className="absolute inset-0 bg-amber-400/0 group-hover:bg-amber-400/10 transition duration-700" />

                {/* DATE */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-5 left-5"
                >
                  <div className="bg-[#C6A777] text-black px-5 py-2 rounded-full text-sm font-bold shadow-2xl">
                    {devotional.date}
                  </div>
                </motion.div>
              </div>

              {/* CONTENT */}
              <div className="p-8 relative z-10">
                <motion.h3
                  whileHover={{
                    x: 6,
                  }}
                  className="text-3xl font-bold text-white mb-5 group-hover:text-[#C6A777] transition duration-500"
                >
                  {devotional.title}
                </motion.h3>

                <p className="text-gray-400 leading-relaxed text-lg mb-8">
                  {devotional.excerpt}
                </p>

                {/* BUTTON */}
                <motion.a
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.96 }}
                  href={devotional.link}
                  // target="_blank"
                  className="
                    inline-flex items-center gap-3
                    text-[#C6A777]
                    font-semibold
                    text-lg
                    relative
                  "
                >
                  <span className="relative">
                    Read Full Devotional
                    <span
                      className="
                        absolute left-0 -bottom-1
                        w-0 h-[2px]
                        bg-[#C6A777]
                        group-hover:w-full
                        transition-all duration-500
                      "
                    />
                  </span>

                  <motion.span
                    animate={{
                      x: [0, 6, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                    }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>

              {/* BORDER GLOW */}
              <div
                className="
                  absolute inset-0 rounded-[32px]
                  border border-[#C6A777]/0
                  group-hover:border-[#C6A777]/40
                  transition duration-700
                  pointer-events-none
                "
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
