import React from "react";

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <p className="text-purple-400 tracking-widest uppercase text-sm mb-4">Welcome to my world</p>
        <h1 className="text-6xl font-black mb-6">
          Neha <span className="text-purple-400">Mahamulkar</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-10">Developer. Builder. Problem Solver.</p>
        <a href="#projects" className="bg-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold">See My Work</a>
      </section>
      <section id="about" className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black mb-8">About <span className="text-purple-400">Me</span></h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          I am a developer who loves building clean, functional, and beautiful digital experiences.
          Every project I build is a story of problem-solving, creativity, and attention to detail.
        </p>
      </section>

      <section className="bg-zinc-900 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Java","TypeScript","React","Selenium","Playwright","Git and GitHub","Maven","TestNG","CI/CD","Page Object Model","REST APIs","Tailwind CSS"].map(skill => (
              <div key={skill} className="border border-purple-500 text-purple-300 px-4 py-3 rounded-lg text-center font-medium">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-xl font-bold mb-3">QA Automation Framework</h3>
            <p className="text-gray-400 mb-6">Selenium plus Java plus TestNG with Page Object Model, DataProvider, Allure reports and GitHub Actions CI/CD.</p>
            <a href="https://github.com/nehamahamulkar2603/qa-automation-demo" target="_blank" rel="noreferrer" className="text-purple-400 font-semibold">View on GitHub</a>
          </div>
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-xl font-bold mb-3">Playwright Automation</h3>
            <p className="text-gray-400 mb-6">Modern test automation using Playwright and TypeScript with cross-browser testing across Chromium, Firefox and Safari.</p>
            <a href="https://github.com/nehamahamulkar2603/playwright-automation-demo" target="_blank" rel="noreferrer" className="text-purple-400 font-semibold">View on GitHub</a>
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 py-24 px-6 text-center">
        <h2 className="text-4xl font-black mb-6">Let us <span className="text-purple-400">Connect</span></h2>
        <p className="text-gray-400 mb-10 text-lg">Open to opportunities, collaborations and conversations.</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="https://github.com/nehamahamulkar2603" target="_blank" rel="noreferrer" className="bg-purple-500 px-8 py-4 rounded-full font-semibold">GitHub</a>
          <a href="https://linkedin.com/in/nehamahamulkar" target="_blank" rel="noreferrer" className="border border-purple-500 px-8 py-4 rounded-full font-semibold">LinkedIn</a>
        </div>
      </section>

    </div>
  );
}

export default App;
