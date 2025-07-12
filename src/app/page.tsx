"use client";
import { useState } from "react";
import Image from "next/image";

const categories = [
  "Career",
  "Consulting",
  "Content",
  "Cybersecurity",
  "Data & AI",
  "Design",
  "Finance",
  "HR",
  "Law",
  "Marketing",
  "Mental Health",
  "Product",
  "Software",
  "Study Abroad",
  "Best Selling",
  "Supply Chain",
  "Others",
];

const skills = [
  {
    name: "Josh Burns Tech",
    role: "SQL Server DBA",
    color: "bg-green-200",
    company: "",
    img: "/vercel.svg",
  },
  {
    name: "Vineet Joglekar",
    role: "Engineering Manager",
    color: "bg-green-300",
    company: "Google",
    img: "/vercel.svg",
  },
  {
    name: "Vatsal Nahata",
    role: "Career Guidance",
    color: "bg-yellow-200",
    company: "Ridgewood",
    img: "/vercel.svg",
  },
  {
    name: "Vanesa Fernanda",
    role: "Product Marketing",
    color: "bg-red-200",
    company: "Microsoft",
    img: "/vercel.svg",
  },
  {
    name: "Mitchell Clements",
    role: "Design Leader",
    color: "bg-orange-200",
    company: "nCino",
    img: "/vercel.svg",
  },
  {
    name: "Escape to Landscapes",
    role: "Travel Creators",
    color: "bg-yellow-100",
    company: "",
    img: "/vercel.svg",
  },
];

const features = [
  {
    icon: "💸",
    title: "No Fees",
    desc: "Trade skills, not money. 0% commission.",
  },
  { icon: "🔒", title: "Privacy Control", desc: "Public or private profiles." },
  {
    icon: "🧑‍🎓",
    title: "Skill-Based Matching",
    desc: "Find learners & mentors instantly.",
  },
  {
    icon: "🕒",
    title: "Flexible Availability",
    desc: "Swap on weekends or evenings.",
  },
  {
    icon: "⭐",
    title: "Community Feedback",
    desc: "Ratings after every session.",
  },
  {
    icon: "❌",
    title: "Cancel Anytime",
    desc: "Withdraw unaccepted requests anytime.",
  },
];

const testimonials = [
  {
    name: "Aishwarya Srinivasan",
    title: "LinkedIn Top Voice",
    quote: "SkillSwap made it so easy to learn and teach!",
    img: "/vercel.svg",
  },
  {
    name: "Joerg Storm",
    title: "300K on LinkedIn",
    quote: "The experience is seamless. I found a mentor in a day!",
    img: "/vercel.svg",
  },
  {
    name: "Xinran Waibel",
    title: "Founder, Data Engineer Things",
    quote: "My go-to platform for skill exchange.",
    img: "/vercel.svg",
  },
  {
    name: "Payal & Gaurav",
    title: "110K+ on Instagram",
    quote: "All my upskilling now happens in one place.",
    img: "/vercel.svg",
  },
  {
    name: "Lorraine Lee",
    title: "Speaker, 320K on LinkedIn",
    quote: "The team is extremely helpful and cares a lot about feedback.",
    img: "/vercel.svg",
  },
  {
    name: "Jessica",
    title: "Global Data Lead",
    quote: "Seamless to schedule mentoring sessions!",
    img: "/vercel.svg",
  },
];

const faqs = [
  {
    q: "What is SkillSwap?",
    a: "SkillSwap is a platform to exchange skills with others for free.",
  },
  {
    q: "How do I find a match?",
    a: "List your skills and what you want to learn, then browse or search for matches.",
  },
  { q: "Is it really free?", a: "Yes! There are no fees or commissions." },
  {
    q: "Can I cancel a request?",
    a: "Yes, you can withdraw any unaccepted request anytime.",
  },
  {
    q: "How do ratings work?",
    a: "After each session, both users can leave feedback and ratings.",
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen font-sans bg-[#FCEEE6] text-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-black text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-2">
          <span className="bg-white rounded-full p-1">
            <Image
              src="/next.svg"
              alt="SkillSwap logo"
              width={32}
              height={32}
            />
          </span>
          <span className="font-bold text-xl tracking-tight">SkillSwap</span>
        </div>
        <div className="hidden md:flex gap-2 bg-[#18181b] rounded-full px-2 py-1">
          <button className="px-4 py-2 rounded-full font-medium bg-white text-black">
            Home
          </button>
          <button className="px-4 py-2 rounded-full font-medium hover:bg-[#232326] transition">
            Listing
          </button>
          <button className="px-4 py-2 rounded-full font-medium hover:bg-[#232326] transition">
            Search
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <button className="hidden md:block bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
            Join as Expert
          </button>
          <button className="md:hidden p-2 rounded bg-[#232326]">☰</button>
        </div>
      </nav>

      {/* Promo Banner */}
      <div className="flex justify-center items-center bg-lime-100 text-green-900 py-2 text-sm font-medium">
        <span className="rounded-full bg-lime-200 px-3 py-1 mr-2">
          July Only
        </span>
        <span>
          <span className="line-through text-gray-500">10%</span>{" "}
          <span className="font-bold">0% commission</span> on all swaps!
        </span>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            A Professional Storefront for{" "}
            <span className="text-[#FF7A00]">Your Skills</span>
          </h1>
          <p className="text-lg mb-8 max-w-xl">
            Everything you offer—mentoring, digital skills, learning sessions,
            and services—packaged in one trusted link your peers take seriously.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-800 transition">
              Start My Page <span className="text-xl">→</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="bg-white px-3 py-2 rounded-lg text-black font-semibold shadow">
                100k+ <span className="text-yellow-500">★★★★★</span> reviews
              </span>
              <span className="bg-white px-3 py-2 rounded-lg text-black font-semibold shadow">
                1mn+ professionals
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {skills.slice(0, 4).map((s, i) => (
            <div
              key={i}
              className={`rounded-2xl p-4 shadow-lg ${s.color} flex flex-col items-start min-w-[160px]`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src={s.img}
                  alt={s.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-bold">{s.name}</span>
              </div>
              <span className="text-xs font-medium text-gray-700 mb-1">
                {s.role}
              </span>
              {s.company && (
                <span className="text-xs bg-white/70 px-2 py-0.5 rounded-full font-semibold text-gray-800">
                  {s.company}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Category/Tag Filter Bar */}
      <section className="max-w-5xl mx-auto px-6 mb-10">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full border font-medium transition ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "bg-white text-black border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Skill Cards Grid */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <div
              key={i}
              className={`rounded-2xl p-5 shadow-lg ${s.color} flex flex-col items-start min-h-[140px]`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src={s.img}
                  alt={s.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <span className="font-bold text-lg">{s.name}</span>
              </div>
              <span className="text-xs font-medium text-gray-700 mb-1">
                {s.role}
              </span>
              {s.company && (
                <span className="text-xs bg-white/70 px-2 py-0.5 rounded-full font-semibold text-gray-800">
                  {s.company}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Why <span className="text-[#FF7A00]">SkillSwap</span>?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start gap-2"
            >
              <span className="text-3xl mb-2">{f.icon}</span>
              <span className="font-bold text-lg">{f.title}</span>
              <span className="text-gray-600 text-sm">{f.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#183642] py-20 mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          Don't Just Take Our Word for It
        </h2>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-3"
            >
              <span className="text-gray-700 italic mb-2">“{t.quote}”</span>
              <div className="flex items-center gap-3 mt-auto">
                <Image
                  src={t.img}
                  alt={t.name}
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                <div>
                  <span className="font-bold text-sm">{t.name}</span>
                  <br />
                  <span className="text-xs text-gray-500">{t.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-10">Frequently asked questions</h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full text-left flex justify-between items-center py-4 px-6 bg-white rounded-xl shadow font-semibold text-lg hover:bg-gray-50 transition"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {faq.q}
                <span className="ml-4 text-2xl">
                  {openFaq === i ? "-" : "+"}
                </span>
              </button>
              {openFaq === i && (
                <div className="bg-gray-50 px-6 py-4 rounded-b-xl text-gray-700 text-base border-t">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 mt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="bg-white rounded-full p-1">
              <Image
                src="/next.svg"
                alt="SkillSwap logo"
                width={28}
                height={28}
              />
            </span>
            <span className="font-bold text-lg tracking-tight">SkillSwap</span>
          </div>
          <div className="text-gray-400 text-sm">
            &copy; 2024 SkillSwap. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
