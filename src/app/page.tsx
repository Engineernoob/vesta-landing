export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Hero Section */}
      <section className="px-6 py-24 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 tracking-tight">
          Vesta
        </h1>
        <p className="text-2xl md:text-3xl font-display mb-10 text-accent">
          Where ambition meets comfort.
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-gray-700 dark:text-gray-300">
          A women-first dating app for ambitious, homebody women who want
          equally ambitious men. Think{" "}
          <span className="font-semibold">LinkedIn + Netflix + Raya</span>.
        </p>
        <a
          href="#contact"
          className="btn-gradient px-8 py-3 rounded-lg text-lg font-medium transition-colors"
        >
          Join Me as Co-Founder
        </a>
      </section>

      {/* Pitch Section */}
      <section className="px-6 py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Ambition, Verified",
              text: "LinkedIn-style profiles: careers, goals, and lifestyle alignment.",
            },
            {
              title: "Women-First Safety",
              text: "Exclusivity, curation, and respectful connections only.",
            },
            {
              title: "Cozy & Meaningful",
              text: "Designed for homebodies who value real chemistry over endless swipes.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-6 text-center"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mockups Section */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12">
            Experience Vesta
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Curated Profiles", "Smart Matching", "Cozy Connections"].map(
              (title) => (
                <div
                  key={title}
                  className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center border border-gray-200 dark:border-gray-700"
                >
                  <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">
                      Coming Soon — App Preview
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="px-6 py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12">
            Meet the Founder
          </h2>
          <h3 className="text-2xl font-semibold mb-2">Taahirah Denmark</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Technical founder (AI/ML, full-stack, product).
          </p>
          <p className="text-lg">
            Now seeking a{" "}
            <span className="font-semibold">female co-founder</span> to lead
            brand & community.
          </p>
        </div>
      </section>

      {/* The Ask Section */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            I am looking for a co-founder
          </h2>
          <p className="text-xl mb-6 text-gray-600 dark:text-gray-400">
            Female co-founder in brand & community — basically, I need a Steve
            Jobs to my Wozniak.
          </p>
          <p className="text-lg">
            Also open to early teammates: product designer, mobile dev, and
            growth/partnerships.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">
            Interested? Let&apos;s talk.
          </h2>
          <form
            action="https://formsubmit.co/taahirahdenmark09@gmail.com"
            method="POST"
            className="flex gap-4 max-w-md mx-auto mb-8"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 
                         rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent 
                         bg-white dark:bg-gray-900 text-black dark:text-white"
            />
            <button
              type="submit"
              className="btn-gradient px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Send
            </button>
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://joinvesta.vercel.app/thanks"
            />
          </form>
          <a
            href="https://calendly.com/taahirahdenmark09"
            target="_blank"
            className="btn-gradient px-8 py-3 rounded-lg text-lg font-medium transition-colors"
          >
            Book 15 minutes
          </a>
        </div>
      </section>

      {/* Signal / Credibility Section */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg">
            Built by an engineer with experience launching multiple AI/ML
            projects.{" "}
            <a
              href="https://github.com/Engineernoob"
              target="_blank"
              className="text-accent hover:underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="px-6 py-24 bg-accent/5 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-black dark:text-white">
            Join the early waitlist
          </h2>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
            Be the first to know when we launch.
          </p>
          <form
            action="https://formsubmit.co/taahirahdenmark09@gmail.com"
            method="POST"
            className="flex gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 
                         rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent 
                         bg-white dark:bg-gray-900 text-black dark:text-white"
            />
            <button
              type="submit"
              className="btn-gradient px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Join
            </button>
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://joinvesta.vercel.app/thanks"
            />
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-black text-white text-center">
        <p className="text-lg">
          Privacy and transparency by design. No hidden profiles. No
          exploitative engagement.
        </p>
      </footer>
    </div>
  );
}
