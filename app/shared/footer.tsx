export default function Footer() {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Sermons", href: "#sermons" },
    { name: "Devotions", href: "#devotion" },
    { name: "About", href: "#about" },
    { name: "History", href: "#history" },
    { name: "Leaders", href: "#leaders" },
    { name: "Statement of Faith", href: "#faith" },

    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-10 py-20">
        {/* LANDSCAPE ROW */}
        <div className="flex flex-col md:flex-row justify-between gap-16">
          {/* LEFT */}
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold">Pilgrims Evangelical Church</h2>

            <p className="text-[#C6A777]">
              Glorify Christ. Edify His Church. Expand His Kingdom
            </p>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              A church committed to biblical teaching, worship, and community
              transformation through Jesus Christ.
            </p>
          </div>

          {/* MIDDLE */}
          <div className="flex-1 space-y-4">
            <h3 className="text-lg font-semibold text-[#C6A777]">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-3 text-gray-300 text-sm">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="relative group hover:text-[#C6A777] transition"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#C6A777] group-hover:w-full transition-all"></span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 space-y-4">
            <h3 className="text-lg font-semibold text-[#C6A777]">Contact Us</h3>

            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Blk 17 Lot 17-19 Europe St. Country Meadow,
              <br />
              San Francisco, General Trias, Cavite
            </p>

            <p className="text-[#C6A777] font-semibold">📞 0917 704 4395</p>

            <p className="text-gray-400 text-sm">Sunday Worship: 9:00 AM</p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Pilgrims Evangelical Church. All rights
        reserved.
      </div>
    </footer>
  );
}
