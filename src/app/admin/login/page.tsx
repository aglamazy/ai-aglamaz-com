"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Invalid password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 w-full max-w-sm">
        <h1 className="text-xl font-bold text-gray-900 mb-6">Admin Login</h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full border border-gray-200 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:border-teal-500"
          autoFocus
        />
        <button
          type="submit"
          className="w-full bg-teal-700 text-white font-medium py-2 rounded-lg hover:bg-teal-800 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
}
