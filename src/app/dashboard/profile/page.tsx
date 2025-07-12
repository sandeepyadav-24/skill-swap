"use client";
import { useState } from "react";

const AVAILABILITY_OPTIONS = ["Weekends", "Evenings", "Weekdays"];

export default function ProfilePage() {
  const [name, setName] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [location, setLocation] = useState("");
  const [availability, setAvailability] = useState<string[]>([]);
  const [isPublic, setIsPublic] = useState(true);
  const [status, setStatus] = useState<string | null>(null);

  // TODO: Replace with real userId from auth/session
  const userId = "demo-user-id";

  const handleAvailabilityChange = (option: string) => {
    setAvailability((prev) =>
      prev.includes(option)
        ? prev.filter((a) => a !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          name,
          profilePhoto,
          location,
          availability,
          isPublic,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("Profile saved successfully!");
      } else {
        setStatus(data.error || "Failed to save profile.");
      }
    } catch (err) {
      setStatus("Network error. Try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Create / Edit Profile</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-xl shadow"
      >
        <div>
          <label className="block font-semibold mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Profile Photo URL</label>
          <input
            type="url"
            value={profilePhoto}
            onChange={(e) => setProfilePhoto(e.target.value)}
            placeholder="https://..."
            className="w-full border rounded px-3 py-2"
          />
          {profilePhoto && (
            <img
              src={profilePhoto}
              alt="Profile Preview"
              className="mt-2 w-20 h-20 rounded-full object-cover border"
            />
          )}
        </div>
        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City, Country"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Availability</label>
          <div className="flex gap-4">
            {AVAILABILITY_OPTIONS.map((option) => (
              <label key={option} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={availability.includes(option)}
                  onChange={() => handleAvailabilityChange(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block font-semibold mb-1">Profile Visibility</label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={isPublic}
              onChange={() => setIsPublic((v) => !v)}
            />
            {isPublic ? "Public" : "Private"}
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
        >
          Save Profile
        </button>
        {status && (
          <div className="mt-4 text-center font-semibold text-green-600">
            {status}
          </div>
        )}
      </form>
    </div>
  );
}
