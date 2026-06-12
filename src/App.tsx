import React from "react";

function App() {
  return (
    <div className="font-sans text-white" style={{background: "#0a0a0f"}}>

      <section className="min-h-screen flex flex-col items-center justify-center px-10 text-center relative">
        <div className="max-w-xl">
          <p className="text-purple-400 tracking-widest uppercase text-sm mb-3">Reaching New Peaks</p>
          <h1 className="text-6xl font-black mb-4">Neha <span className="text-purple-400">Mahamulkar</span></h1>
          <p className="text-xl text-gray-400 mb-4">Data, Business & QA Analyst</p>
          <p className="text-gray-500 mb-8 leading-relaxed">Turning data into clear decisions, ensuring software quality, and evaluating how AI & LLM systems behave. Every problem is a mountain worth climbing.</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="#projects" className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold">See My Work</a>
            <a href="https://www.linkedin.com/in/neha-mahamulkar/" target="_blank" rel="noreferrer" className="border border-purple-500 text-purple-400 px-8 py-3 rounded-full font-semibold">LinkedIn</a>
          </div>
        </div>
      </section>

      <svg viewBox="0 0 1440 80" className="w-full" style={{background: "#0a0a0f", display: "block"}}>
        <path fill="#1a0a3a" d="M0,80 L120,20 L240,50 L360,10 L480,40 L600,5 L720,35 L840,15 L960,45 L1080,20 L1200,50 L1320,25 L1440,55 L1440,80 Z"/>
      </svg>

      <section id="about" className="py-24 px-10" style={{background: "#1a0a3a"}}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-shrink-0">
            <img src="/profile.jpg" alt="Neha" className="w-72 h-72 rounded-2xl object-cover" style={{border: "1px solid rgba(124,58,237,0.3)"}} />
          </div>
          <div>
            <p className="text-purple-400 tracking-widest uppercase text-xs mb-2">Base Camp</p>
            <h2 className="text-4xl font-black mb-6">About <span className="text-purple-400">Me</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">I am a data, business, and QA analyst with several years of experience turning messy data into clear, reliable decisions. I focus on data analysis, software quality, and evaluating how AI and large language model (LLM) systems behave. I am currently studying Informatics at Northeastern University in Boston.</p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">I care about getting to the truth in data, catching issues before users do, and making sure the systems we build are both reliable and genuinely useful.</p>
            <div className="flex gap-6 text-gray-500 text-sm">
              <span>Data Analysis</span>
              <span>Quality Assurance</span>
              <span>Business Analysis</span>
              <span>AI / LLM Evaluation</span>
            </div>
          </div>
        </div>
      </section>

      <svg viewBox="0 0 1440 80" className="w-full" style={{background: "#0d0a1a", display: "block"}}>
        <path fill="#1a0a3a" d="M0,0 L120,60 L240,30 L360,70 L480,40 L600,75 L720,45 L840,65 L960,35 L1080,60 L1200,30 L1320,55 L1440,25 L1440,0 Z"/>
      </svg>

      <section className="py-24 px-10" style={{background: "#0d0a1a"}}>
        <div className="max-w-4xl mx-auto">
          <p className="text-purple-400 tracking-widest uppercase text-xs mb-2">The Ascent</p>
          <h2 className="text-4xl font-black mb-12">Experience</h2>
          <div className="relative border-l-2 border-purple-500 pl-8 space-y-12">
            <div className="relative">
              <div className="absolute -left-10 w-4 h-4 bg-purple-500 rounded-full" style={{boxShadow: "0 0 10px rgba(124,58,237,0.8)"}}></div>
              <p className="text-purple-400 text-sm mb-1">January 2025 - April 2025</p>
              <h3 className="text-xl font-bold">Data Analyst - DOOIT!</h3>
              <p className="text-gray-400 mt-2">Built a dual-view AI career-prediction platform, owning the data pipeline end to end. Automated ETL processes that cut data-processing time by 40%, and analyzed model outputs to improve prediction quality for 500+ users.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-10 w-4 h-4 bg-purple-500 rounded-full" style={{boxShadow: "0 0 10px rgba(124,58,237,0.8)"}}></div>
              <p className="text-purple-400 text-sm mb-1">August 2022 - July 2023</p>
              <h3 className="text-xl font-bold">Data Analyst - Aretove Technologies</h3>
              <p className="text-gray-400 mt-2">Worked on order-lifecycle systems handling 150,000+ daily events, focused on data integrity and quality. Led a Salesforce CRM data integration that reduced manual data handling by 30%, and validated user-facing features for reliability.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-10 w-4 h-4 bg-purple-500 rounded-full" style={{boxShadow: "0 0 10px rgba(124,58,237,0.8)"}}></div>
              <p className="text-purple-400 text-sm mb-1">June 2020 - July 2022</p>
              <h3 className="text-xl font-bold">Data Analyst - Aretove Technologies</h3>
              <p className="text-gray-400 mt-2">Analyzed and validated transaction-data flows for accuracy across backend payment modules. Improved data-retrieval performance with Elasticsearch and Redis, cutting response times by 21%.</p>
            </div>
          </div>
        </div>
      </section>

      <svg viewBox="0 0 1440 80" className="w-full" style={{background: "#080a14", display: "block"}}>
        <path fill="#0d0a1a" d="M0,0 L180,55 L360,25 L540,65 L720,30 L900,60 L1080,20 L1260,50 L1440,15 L1440,0 Z"/>
      </svg>

      <section className="py-24 px-10" style={{background: "#080a14"}}>
        <div className="max-w-4xl mx-auto">
          <p className="text-purple-400 tracking-widest uppercase text-xs mb-2">The Gear</p>
          <h2 className="text-4xl font-black mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["SQL","Python (Pandas)","Excel","Tableau","Power BI","Data Visualization","Business Analysis","Requirements Gathering","Test Case Design","Manual & Automated Testing","Selenium","Playwright","API Testing (Postman)","JIRA","LLM & Prompt Evaluation","ETL Pipelines","Git and GitHub"].map(skill => (
              <div key={skill} className="px-4 py-3 rounded-lg text-center font-medium text-purple-300 text-sm" style={{border: "1px solid rgba(124,58,237,0.4)", background: "rgba(124,58,237,0.05)"}}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <svg viewBox="0 0 1440 80" className="w-full" style={{background: "#0a0a0f", display: "block"}}>
        <path fill="#080a14" d="M0,0 L160,50 L320,20 L480,60 L640,25 L800,55 L960,15 L1120,45 L1280,20 L1440,40 L1440,0 Z"/>
      </svg>

      <section id="projects" className="py-24 px-10" style={{background: "#0a0a0f"}}>
        <div className="max-w-4xl mx-auto">
          <p className="text-purple-400 tracking-widest uppercase text-xs mb-2">The Summit</p>
          <h2 className="text-4xl font-black mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8" style={{background: "rgba(124,58,237,0.05)", border: "1px solid rgba(124,58,237,0.2)"}}>
              <h3 className="text-xl font-bold mb-3">QA Automation Framework</h3>
              <p className="text-gray-400 mb-4">An end-to-end test automation suite using Selenium, Java and TestNG with the Page Object Model, data-driven testing, Allure reports and GitHub Actions CI/CD.</p>
              <div className="flex gap-2 flex-wrap mb-4">{["Java","Selenium","TestNG","Maven"].map(t => <span key={t} className="text-xs px-3 py-1 rounded-full" style={{background: "rgba(124,58,237,0.2)", color: "#c4b5fd"}}>{t}</span>)}</div>
              <a href="https://github.com/nehamahamulkar2603/qa-automation-demo" target="_blank" rel="noreferrer" className="text-purple-400 font-semibold text-sm">View on GitHub</a>
            </div>
            <div className="rounded-2xl p-8" style={{background: "rgba(124,58,237,0.05)", border: "1px solid rgba(124,58,237,0.2)"}}>
              <h3 className="text-xl font-bold mb-3">Playwright Automation</h3>
              <p className="text-gray-400 mb-4">Modern UI test automation built with Playwright and TypeScript, running cross-browser checks across Chromium, Firefox and Safari.</p>
              <div className="flex gap-2 flex-wrap mb-4">{["TypeScript","Playwright","CI/CD"].map(t => <span key={t} className="text-xs px-3 py-1 rounded-full" style={{background: "rgba(124,58,237,0.2)", color: "#c4b5fd"}}>{t}</span>)}</div>
              <a href="https://github.com/nehamahamulkar2603/playwright-automation-demo" target="_blank" rel="noreferrer" className="text-purple-400 font-semibold text-sm">View on GitHub</a>
            </div>
            <div className="rounded-2xl p-8" style={{background: "rgba(124,58,237,0.05)", border: "1px solid rgba(124,58,237,0.2)"}}>
              <h3 className="text-xl font-bold mb-3">LLM Output Evaluation</h3>
              <p className="text-gray-400 mb-4">A study comparing large language model responses on accuracy, relevance and tone, with a scoring rubric and prompt-quality analysis. (Replace with your real project details and add a GitHub link.)</p>
              <div className="flex gap-2 flex-wrap">{["Python","LLM Evaluation","Prompt Analysis"].map(t => <span key={t} className="text-xs px-3 py-1 rounded-full" style={{background: "rgba(124,58,237,0.2)", color: "#c4b5fd"}}>{t}</span>)}</div>
            </div>
            <div className="rounded-2xl p-8" style={{background: "rgba(124,58,237,0.05)", border: "1px solid rgba(124,58,237,0.2)"}}>
              <h3 className="text-xl font-bold mb-3">SQL Data Analysis</h3>
              <p className="text-gray-400 mb-4">Exploratory analysis of a real dataset in SQL, surfacing trends and answering specific business questions, with a summary dashboard. (Replace with your real project details and add a GitHub link.)</p>
              <div className="flex gap-2 flex-wrap">{["SQL","Tableau","Business Analysis"].map(t => <span key={t} className="text-xs px-3 py-1 rounded-full" style={{background: "rgba(124,58,237,0.2)", color: "#c4b5fd"}}>{t}</span>)}</div>
            </div>
          </div>
        </div>
      </section>

      <svg viewBox="0 0 1440 80" className="w-full" style={{background: "#0f0520", display: "block"}}>
        <path fill="#0a0a0f" d="M0,80 L200,20 L400,50 L600,10 L800,40 L1000,15 L1200,45 L1440,20 L1440,80 Z"/>
      </svg>

      <section className="py-24 px-10 text-center" style={{background: "#0f0520"}}>
        <p className="text-purple-400 tracking-widest uppercase text-xs mb-2">Plant Your Flag</p>
        <h2 className="text-4xl font-black mb-6">Let us <span className="text-purple-400">Connect</span></h2>
        <p className="text-gray-400 mb-10 text-lg">Open to opportunities, collaborations and conversations.</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="https://github.com/nehamahamulkar2603" target="_blank" rel="noreferrer" className="bg-purple-600 px-8 py-4 rounded-full font-semibold">GitHub</a>
          <a href="https://www.linkedin.com/in/neha-mahamulkar/" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full font-semibold" style={{border: "1px solid rgba(124,58,237,0.6)", color: "#c4b5fd"}}>LinkedIn</a>
          <a href="mailto:nehamahamulkar26@gmail.com" className="px-8 py-4 rounded-full font-semibold" style={{border: "1px solid rgba(124,58,237,0.3)", color: "#9ca3af"}}>Email</a>
        </div>
      </section>

    </div>
  );
}

export default App;
