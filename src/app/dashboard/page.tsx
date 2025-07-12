"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

type UserCard = {
  name: string;
  subtitle: string;
  photo: string;
};

type Skill = {
  name: string;
  icon: string; // image url or emoji
};

const TRENDING_SKILLS: Skill[] = [
  { name: "Cooking", icon: "/cooking.jpg" },
  { name: "Music", icon: "/music.jpg" },
  { name: "Dance", icon: "/dance.jpg" },
];

const NEARBY_PEOPLE: UserCard[] = [
  {
    name: "Kevin.T",
    subtitle: "Video Editor and Graphic Designer",
    photo: "/kevin.jpg",
  },
  {
    name: "Aashik.M",
    subtitle: "Cook and also music lover",
    photo: "/aashik.jpg",
  },
  {
    name: "Priya.V",
    subtitle: "Professional Football player",
    photo: "/priya.jpg",
  },
];

const POPULAR_USERS: UserCard[] = [
  { name: "Andrew.K", subtitle: "", photo: "/andrew.jpg" },
  { name: "Jenny.M", subtitle: "", photo: "/jenny.jpg" },
  { name: "Rahul.K", subtitle: "", photo: "/rahul.jpg" },
  { name: "Bessi.T", subtitle: "", photo: "/bessi.jpg" },
];

const MATCH_AVATARS = [
  "/kevin.jpg",
  "/aashik.jpg",
  "/priya.jpg",
  "/andrew.jpg",
  "/jenny.jpg",
  "/rahul.jpg",
  "/bessi.jpg",
];

export default async function DashboardPage() {
  return (
    <div className="max-w-2xl mx-auto py-4 px-2 sm:px-4">
      {/* Top CTA Card */}
      <div className="relative bg-gradient-to-tr from-blue-600 to-blue-400 rounded-2xl shadow-lg p-6 mb-6 overflow-hidden">
        <div className="text-white text-lg font-semibold mb-2">
          Find Your Perfect Skill Exchange Partner
        </div>
        <button className="bg-white text-blue-700 font-semibold rounded-full px-6 py-2 shadow hover:bg-blue-50 transition mb-2">
          View Matches
        </button>
        {/* Avatars */}
        <div className="absolute right-4 bottom-4 flex flex-wrap gap-2">
          {MATCH_AVATARS.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="avatar"
              className="w-8 h-8 rounded-full border-2 border-white shadow"
              style={{ zIndex: 10 - i, marginLeft: i ? -12 : 0 }}
            />
          ))}
        </div>
        <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 400 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 top-0"
          >
            <ellipse
              cx="320"
              cy="-20"
              rx="120"
              ry="60"
              fill="#2563eb"
              fillOpacity="0.25"
            />
          </svg>
        </div>
      </div>
      {/* Trending Skills */}
      <div className="flex justify-between items-center mb-2">
        <div className="font-semibold text-lg">Trending skills</div>
        <a
          href="#"
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          View more &gt;
        </a>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 mb-6">
        {TRENDING_SKILLS.map((skill) => (
          <button
            key={skill.name}
            className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 shadow-sm min-w-[110px]"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-7 h-7 rounded-full object-cover"
            />
            <span className="font-medium text-gray-700">{skill.name}</span>
          </button>
        ))}
      </div>
      {/* Nearby People */}
      <div className="font-semibold text-lg mb-2">Nearby people</div>
      <div className="flex gap-4 overflow-x-auto pb-2 mb-6">
        {NEARBY_PEOPLE.map((user) => (
          <div
            key={user.name}
            className="min-w-[180px] bg-white rounded-2xl shadow p-4 flex flex-col items-center border border-gray-100"
          >
            <img
              src={user.photo}
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover border mb-2"
            />
            <div className="font-semibold text-gray-800 text-base mb-1">
              {user.name}
            </div>
            <div className="text-xs text-gray-500 mb-3 text-center min-h-[32px]">
              {user.subtitle}
            </div>
            <button className="border border-blue-600 text-blue-600 font-semibold rounded-full px-4 py-1 hover:bg-blue-50 transition">
              View profile
            </button>
          </div>
        ))}
      </div>
      {/* Popular Users */}
      <div className="flex justify-between items-center mb-2">
        <div className="font-semibold text-lg">Popular users</div>
        <a
          href="#"
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          View more &gt;
        </a>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2 mb-6">
        {POPULAR_USERS.map((user) => (
          <div
            key={user.name}
            className="flex flex-col items-center min-w-[80px]"
          >
            <img
              src={user.photo}
              alt={user.name}
              className="w-14 h-14 rounded-full object-cover border mb-1"
            />
            <div className="text-xs font-medium text-gray-800 text-center">
              {user.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
