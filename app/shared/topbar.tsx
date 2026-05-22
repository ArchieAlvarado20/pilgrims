export default function Topbar() {
  return (
    <header className="w-full fixed top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer">
          {/* LOGO */}
          <div className="h-12 w-12 rounded-full overflow-hidden border border-white/20 shadow-lg flex-shrink-0">
            <img
              src="/images/logo.jpg"
              alt="Pilgrims Evangelical Logo"
              className="h-full w-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <h1 className="text-2xl font-bold text-white leading-none parisienne-regular">
              Pilgrims Evangelical
            </h1>

            <p className="text-xs tracking-[3px] text-gray-300 uppercase mt-1">
              Church Ministry
            </p>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-10 text-white font-medium oswald">
          <a href="#" className="relative group transition duration-300">
            Home
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* DROPDOWN */}
          <div className="relative group">
            <button className="relative flex items-center gap-1">
              About
              <span className="text-xs mt-1">▼</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </button>

            {/* MENU */}
            <div
              className="
                absolute top-12 left-0 w-60
                bg-white/10 backdrop-blur-xl
                border border-white/10
                rounded-2xl
                shadow-2xl
                p-3
                opacity-0 invisible
                translate-y-3
                group-hover:opacity-100
                group-hover:visible
                group-hover:translate-y-0
                transition-all duration-300
              "
            >
              <a
                href="#"
                className="block px-4 py-3 rounded-xl text-sm hover:bg-white/10 transition"
              >
                Our Story
              </a>

              <a
                href="#"
                className="block px-4 py-3 rounded-xl text-sm hover:bg-white/10 transition"
              >
                Mission & Vision
              </a>

              <a
                href="#"
                className="block px-4 py-3 rounded-xl text-sm hover:bg-white/10 transition"
              >
                Leadership
              </a>

              <a
                href="#"
                className="block px-4 py-3 rounded-xl text-sm hover:bg-white/10 transition"
              >
                Ministries
              </a>
            </div>
          </div>

          <a href="#" className="relative group transition duration-300">
            Events
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#" className="relative group transition duration-300">
            Sermons
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#" className="relative group transition duration-300">
            Contact
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <a href="#email">
            <button
              className="
              px-6 py-3
              rounded-full
              bg-gradient-to-r from-[#C6A777] to-[#C6A888]
              text-black
              font-bold
              shadow-lg
              hover:scale-105
              hover:shadow-amber-500/40
              transition-all duration-300
            "
            >
              Get Connected
            </button>
          </a>
        </div>

        {/* MOBILE MENU ICON */}
        <button className="lg:hidden text-white text-3xl">☰</button>
      </div>
    </header>
  );
}
