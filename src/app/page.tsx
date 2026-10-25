
"use client";

import { useState, type FormEvent } from "react";

const skills = [
  "MS Office",
  "Communication",
  "HTML",
  "Next.js",
  "3D Modeling",
  "Learning AI",
];

const projects = [
  {
    number: "01",
    name: "Dybala10",
    category: "Personal Project",
    description:
      "A personal project showcasing my creativity and development skills.",
    symbol: "⚡",
    size: "md:col-span-2",
  },
  {
    number: "02",
    name: "Web Experiments",
    category: "Web Development",
    description:
      "Practising HTML, responsive layouts and modern web design.",
    symbol: "⌘",
    size: "md:col-span-2",
  },
  {
    number: "03",
    name: "3D Creations",
    category: "3D Modeling",
    description:
      "Exploring 3D modelling, visual ideas and creative digital work.",
    symbol: "◈",
    size: "md:col-span-2",
  },
];

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setStatus("Please complete all fields.");
      return;
    }

    const atPosition = email.indexOf("@");
    const dotPosition = email.lastIndexOf(".");

    if (
      atPosition < 1 ||
      dotPosition <= atPosition + 1 ||
      dotPosition >= email.length - 1
    ) {
      setStatus("Please enter a valid email address.");
      return;
    }

    const recipient = "YOUR_EMAIL_HERE";

    if (
      recipient === "YOUR_EMAIL_HERE" ||
      recipient.indexOf("@") === -1
    ) {
      setStatus(
        "Please add your email address in the code before using this form."
      );
      return;
    }

    const subject = encodeURIComponent("Portfolio message from " + name);
    const body = encodeURIComponent(
      "Name: " +
        name +
        "\nEmail: " +
        email +
        "\n\n" +
        message
    );

    setStatus("Opening your email application...");

    window.location.href =
      "mailto:" + recipient + "?subject=" + subject + "&body=" + body;
  }

  return (
    <main className="min-h-screen overflow-x-clip bg-[#070b16] text-white selection:bg-cyan-300 selection:text-slate-950">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          background: #070b16;
        }

        body {
          margin: 0;
          background: #070b16;
        }

        * {
          box-sizing: border-box;
        }

        .portfolio-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(148, 163, 184, 0.13);
          border-radius: 24px;
          background: linear-gradient(
            145deg,
            rgba(19, 29, 51, 0.96),
            rgba(10, 16, 31, 0.98)
          );
          transition:
            transform 250ms ease,
            border-color 250ms ease,
            box-shadow 250ms ease;
        }

        .portfolio-card:hover {
          transform: translateY(-4px);
          border-color: rgba(56, 189, 248, 0.4);
          box-shadow: 0 18px 55px rgba(0, 0, 0, 0.2);
        }

        .grid-pattern {
          background-image: linear-gradient(
              rgba(148, 163, 184, 0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(148, 163, 184, 0.045) 1px,
              transparent 1px
            );
          background-size: 34px 34px;
        }

        .skill-badge {
          border: 1px solid rgba(125, 211, 252, 0.16);
          background: rgba(14, 165, 233, 0.075);
          transition:
            border-color 200ms ease,
            background 200ms ease,
            transform 200ms ease;
        }

        .skill-badge:hover {
          transform: translateY(-2px);
          border-color: rgba(34, 211, 238, 0.5);
          background: rgba(14, 165, 233, 0.15);
        }

        .input-field {
          width: 100%;
          min-width: 0;
          border: 1px solid rgba(148, 163, 184, 0.17);
          border-radius: 12px;
          background: rgba(2, 6, 23, 0.55);
          padding: 12px 14px;
          color: white;
          outline: none;
          transition: border-color 200ms ease;
        }

        .input-field:focus {
          border-color: rgba(34, 211, 238, 0.7);
        }

        .input-field::placeholder {
          color: #64748b;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#070b16]/90 backdrop-blur-xl">
        <nav className="mx-auto flex min-h-[68px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex shrink-0 items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-sm font-black text-slate-950">
              AM
            </span>
            <span className="text-base font-bold">
              mateen<span className="text-cyan-400">.</span>
            </span>
          </a>

          <div className="flex items-center gap-3 text-xs font-medium text-slate-400 sm:gap-6 sm:text-sm">
            <a href="#about" className="transition hover:text-cyan-300">
              About
            </a>
            <a href="#skills" className="transition hover:text-cyan-300">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-cyan-300">
              Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-2 text-cyan-200 transition hover:bg-sky-400/20 sm:px-4"
            >
              Contact ↗
            </a>
          </div>
        </nav>
      </header>

      <div className="mx-auto max-w-7xl px-4 pb-12 pt-7 sm:px-6 sm:pt-10 lg:px-8">
        {/* Main bento grid */}
        <section
          id="home"
          className="grid grid-cols-1 gap-4 md:grid-cols-6"
        >
          {/* Hero */}
          <article className="portfolio-card grid-pattern md:col-span-4">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

            <div className="relative flex min-h-[400px] flex-col justify-between gap-10 p-6 sm:p-9 lg:p-11">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-xs font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  BS IT Student · Learning & Building
                </span>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium tracking-wide text-sky-300">
                  HELLO, I&apos;M
                </p>

                <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                  Abdul Mateen<span className="text-cyan-400">.</span>
                </h1>

                <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
                  Exploring web development, artificial intelligence and
                  creative digital experiences.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-400/20"
                  >
                    Explore my work ↗
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400/40 hover:bg-white/[0.07]"
                  >
                    Get in touch
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs tracking-widest text-slate-500">
                <span className="h-px w-8 bg-sky-400/60" />
                BUILDING · LEARNING · CREATING
              </div>
            </div>
          </article>

          {/* Profile card */}
          <article className="portfolio-card flex flex-col justify-between p-6 sm:p-8 md:col-span-2">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-300/20 bg-gradient-to-br from-sky-400/20 to-blue-600/20 text-xl font-black text-cyan-200">
                AMK
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                My direction
              </p>

              <h2 className="mt-3 text-2xl font-bold leading-snug">
                Curious mind.
                <br />
                Creative builder.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Learning new technologies and turning ideas into practical
                projects, one step at a time.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Web", "AI", "3D"].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          {/* About */}
          <article
            id="about"
            className="portfolio-card p-6 sm:p-7 md:col-span-3"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                About me
              </p>
              <span className="text-xl text-cyan-300">✳</span>
            </div>

            <h2 className="mt-5 text-2xl font-bold tracking-tight">
              Learning today.
              <br />
              Building for tomorrow.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              I&apos;m a BS Information Technology student at the University
              of Sargodha. I&apos;m learning web development and AI while
              improving my technical, communication and creative skills.
            </p>
          </article>

          {/* Education */}
          <article className="portfolio-card p-6 sm:p-7 md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Education
            </p>

            <div className="mt-5 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 text-xl">
                🎓
              </div>

              <div className="min-w-0">
                <h2 className="text-lg font-bold">
                  BS Information Technology
                </h2>
                <p className="mt-1 text-sm text-sky-300">
                  University of Sargodha
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Studying information technology and exploring web
                  development and artificial intelligence.
                </p>
              </div>
            </div>
          </article>

          {/* Skills */}
          <article
            id="skills"
            className="portfolio-card p-6 sm:p-7 md:col-span-2"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              My toolkit
            </p>

            <h2 className="mt-4 text-2xl font-bold">Skills & interests</h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Tools and skills I&apos;m developing.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-badge rounded-xl px-3 py-2 text-xs font-medium text-sky-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>

          {/* Creative card */}
          <article className="portfolio-card p-6 sm:p-7 md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Creative interests
            </p>

            <div className="mt-6 flex h-28 items-center justify-center rounded-2xl border border-cyan-300/10 bg-gradient-to-br from-blue-500/10 via-slate-900/40 to-cyan-400/10">
              <span className="text-5xl text-cyan-200" aria-hidden="true">
                ◈
              </span>
            </div>

            <h2 className="mt-5 text-xl font-bold">3D & digital creativity</h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Exploring 3D modeling alongside technology and digital design.
            </p>
          </article>

          {/* Contact prompt */}
          <article className="portfolio-card flex flex-col justify-between p-6 sm:p-7 md:col-span-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Have an idea?
              </p>

              <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-2xl text-cyan-200">
                ↗
              </div>

              <h2 className="mt-5 text-2xl font-bold">Let&apos;s connect.</h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Get in touch to share ideas and connect.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-white"
            >
              Contact me →
            </a>
          </article>
        </section>

        {/* Projects */}
        <section id="projects" className="pt-16 sm:pt-20">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Selected work
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Projects<span className="text-cyan-400">.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-500">
              Personal projects and creative practice as I continue learning.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
            {projects.map((project) => (
              <article
                key={project.number}
                className={`portfolio-card group p-6 sm:p-7 ${project.size}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-semibold tracking-widest text-slate-500">
                    {project.number} / 03
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-300/15 bg-sky-300/[0.07] text-xl text-cyan-200 transition group-hover:scale-110">
                    {project.symbol}
                  </span>
                </div>

                <div className="my-7 flex h-32 items-center justify-center rounded-2xl border border-white/[0.06] bg-gradient-to-br from-blue-500/10 via-slate-900/40 to-cyan-400/[0.08]">
                  <span className="text-5xl font-black text-white/15 transition group-hover:text-cyan-200/40">
                    {project.symbol}
                  </span>
                </div>

                <p className="text-xs font-medium text-cyan-300">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-bold">{project.name}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  Personal learning project
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="pt-16 sm:pt-20">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <article className="portfolio-card p-6 sm:p-8 md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Get in touch
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Let&apos;s start
                <br />
                a conversation<span className="text-cyan-400">.</span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Have a question, an idea or want to connect? Send me a message.
              </p>

              <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                <p className="text-xs text-slate-500">EMAIL</p>
                <p className="mt-2 break-all text-sm font-medium text-slate-200">
                  Update YOUR_EMAIL_HERE
                </p>
              </div>
            </article>

            <article className="portfolio-card p-6 sm:p-8 md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Your name
                    </label>

                    <input
                      id="contact-name"
                      className="input-field"
                      type="text"
                      autoComplete="name"
                      placeholder="Abdul Mateen"
                      value={form.name}
                      onChange={(event) => {
                        setForm({ ...form, name: event.target.value });
                        setStatus("");
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Your email
                    </label>

                    <input
                      id="contact-email"
                      className="input-field"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(event) => {
                        setForm({ ...form, email: event.target.value });
                        setStatus("");
                      }}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    className="input-field min-h-36 resize-y"
                    placeholder="Tell me what you have in mind..."
                    value={form.message}
                    onChange={(event) => {
                      setForm({ ...form, message: event.target.value });
                      setStatus("");
                    }}
                    required
                    rows={5}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-300 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-400/15 sm:w-auto"
                >
                  Prepare message ↗
                </button>

                {status.length > 0 && (
                  <p
                    role="status"
                    aria-live="polite"
                    className="break-words text-sm text-cyan-200"
                  >
                    {status}
                  </p>
                )}

                <p className="text-xs leading-5 text-slate-500">
                  This form opens your email application. It does not send or
                  store messages by itself.
                </p>
              </form>
            </article>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 flex flex-col gap-5 border-t border-white/[0.08] pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="font-bold text-slate-200">
            mateen<span className="text-cyan-400">.</span>
          </a>

          <p>© 2026 Abdul Mateen. Designed with creativity.</p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-300"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-300"
            >
              LinkedIn ↗
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
