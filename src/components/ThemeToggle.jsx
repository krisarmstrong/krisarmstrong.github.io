import { useEffect, useState } from "react";
export default function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      aria-label="Toggle Dark/Light"
      onClick={() => setDark((d) => !d)}
      className="ml-3 p-2 rounded-full bg-gray-800 hover:bg-gray-700"
    >
      {dark ? "🌙" : "🌞"}
    </button>
  );
}