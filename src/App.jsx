import React from "react";
import {
  ArrowUpRight,
  Mail,
  MoveRight,
  Sparkles,
  Layers3,
  MonitorSmartphone,
  BrainCircuit,
} from "lucide-react";

const works = [
  {
    title: "AI 工具体验笔记",
    eyebrow: "AI Tool Notes",
    image: "/images/work-product.svg",
    role: "Tutorial / Review / Workflow",
    zh: "用普通人能听懂的方式拆解 AI 工具：它适合什么、不适合什么、怎么真正放进日常工作。",
    en: "Practical notes on what AI tools are good at, where they break, and how to use them calmly.",
    tags: ["Tools", "Review", "Tips"],
  },
  {
    title: "轻量教程栏目",
    eyebrow: "Friendly AI Tutorials",
    image: "/images/work-interface.svg",
    role: "Short Video / Newsletter / Demo",
    zh: "把一个概念、一条提示词、一个自动化流程讲清楚，让观众看完就能动手试一次。",
    en: "Short, warm tutorials that make one AI concept immediately usable.",
    tags: ["Video", "Prompt", "Demo"],
  },
  {
    title: "创作者工作流",
    eyebrow: "Creator Workflow Lab",
    image: "/images/work-ai.svg",
    role: "AI Workflow / Research / Tooling",
    zh: "分享选题、脚本、剪辑、图像和资料整理的 AI 流程，让内容生产更轻松，也更稳定。",
    en: "Repeatable workflows for ideation, scripts, visuals, editing, and research.",
    tags: ["Creator", "Systems", "Automation"],
  },
];

const capabilities = [
  {
    icon: Layers3,
    title: "把 AI 讲清楚",
    en: "Clear AI Explainers",
    copy: "少一点术语，多一点场景，让观众知道下一步该怎么试。",
  },
  {
    icon: MonitorSmartphone,
    title: "亲和内容表达",
    en: "Approachable Content",
    copy: "用自然、可信、有温度的方式呈现工具体验和真实感受。",
  },
  {
    icon: BrainCircuit,
    title: "AI 工作流",
    en: "AI Workflow",
    copy: "把提示词、工具链和自动化步骤整理成可以复用的方法。",
  },
];

function App() {
  return (
    <main className="site-shell">
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Back to top">
          AI
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-image-wrap">
          <img
            src="/images/hero-ai-blogger-chinese-male.jpg"
            alt="Friendly Chinese male AI blogger recording in a warm studio"
            className="hero-image"
          />
        </div>
        <div className="hero-content">
          <p className="kicker">AI Blogger / 人工智能内容创作者</p>
          <h1>
            AI With Charlie
            <span>把 AI 讲得亲切、清楚，也真的能用。</span>
          </h1>
          <p className="hero-copy">
            Bilingual notes, tutorials, and workflows for people who want AI to
            feel less mysterious and more useful.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              看内容栏目 <MoveRight size={18} />
            </a>
            <a className="button secondary" href="mailto:hello@example.com">
              商务合作 <Mail size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="section intro">
        <div>
          <p className="section-label">Profile</p>
          <h2>用温和的语气，解释快速变化的 AI 世界。</h2>
        </div>
        <p>
          这里是一位 AI 博主的个人主页雏形：亲和、清楚、可信，适合放教程、
          工具评测、工作流案例和合作入口。中文负责陪伴感，英文负责国际化表达。
        </p>
      </section>

      <section className="section work" id="work">
        <div className="section-heading">
          <p className="section-label">Selected Work</p>
          <h2>内容栏目 / Friendly AI content series</h2>
        </div>
        <div className="work-grid">
          {works.map((work) => (
            <article className="work-card" key={work.title}>
              <img src={work.image} alt={work.eyebrow} />
              <div className="work-card-body">
                <p className="work-role">{work.role}</p>
                <h3>{work.title}</h3>
                <p className="work-eyebrow">{work.eyebrow}</p>
                <p>{work.zh}</p>
                <p className="en">{work.en}</p>
                <div className="tags">
                  {work.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-media">
          <img src="/images/about-desk.svg" alt="Hands arranging a creative desk" />
          <img
            src="/images/process-objects.svg"
            alt="Creative tools, paper textures, and a blank tablet"
          />
        </div>
        <div className="about-copy">
          <p className="section-label">About</p>
          <h2>我希望 AI 内容少一点距离感，多一点“我也可以试试”。</h2>
          <p>
            I make AI tutorials, tool reviews, and creator workflows for curious
            people who want practical clarity without being buried in jargon.
          </p>
          <p>
            我关注的是“看完能不能用起来”：一个真实场景，一个清楚步骤，
            一个可复制的小成果。技术可以很新，但表达应该让人愿意靠近。
          </p>
        </div>
      </section>

      <section className="section capabilities">
        <div className="section-heading">
          <p className="section-label">Capabilities</p>
          <h2>内容能力 / How the channel creates value</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map(({ icon: Icon, title, en, copy }) => (
            <article className="capability-card" key={title}>
              <Icon size={22} />
              <h3>{title}</h3>
              <p className="cap-en">{en}</p>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <img src="/images/contact-studio.svg" alt="" aria-hidden="true" />
        <div className="contact-panel">
          <p className="section-label">Contact</p>
          <h2>如果你在做 AI 产品、工具或内容合作，我们可以聊聊。</h2>
          <p>
            Open to sponsored tool reviews, bilingual tutorials, launch content,
            community sessions, and creator workflow collaborations.
          </p>
          <div className="contact-links">
            <a href="mailto:hello@example.com">
              hello@example.com <ArrowUpRight size={17} />
            </a>
            <a href="https://example.com" target="_blank" rel="noreferrer">
              Social profile <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <span>AI With Charlie</span>
        <span>
          <Sparkles size={15} /> Built as a warm bilingual AI blogger homepage.
        </span>
      </footer>
    </main>
  );
}

export default App;
