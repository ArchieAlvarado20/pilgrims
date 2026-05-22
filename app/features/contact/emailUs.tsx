export default function EmailUsSection() {
  return (
    <section className="bg-black py-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-12">
          {/* <p className="uppercase tracking-[5px] text-[#C6A777] text-sm mb-4">
            Contact
          </p> */}

          <h2 className="text-5xl font-bold text-white">Email Us</h2>

          <p className="text-gray-400 mt-4">
            We’d love to hear from you. Send us a message anytime.
          </p>
        </div>

        {/* FORM */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-[#C6A777] transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-[#C6A777] transition"
              />
            </div>

            <input
              type="text"
              required
              placeholder="Subject"
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-[#C6A777] transition"
            />

            <textarea
              rows={6}
              required
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-[#C6A777] transition resize-none"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#C6A777] text-black font-bold hover:scale-[1.02] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
