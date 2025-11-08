export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 px-4 mt-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          &copy; {new Date().getFullYear()} Kris Armstrong. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a
            href="https://github.com/krisarmstrong"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition"
          >
            <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.6 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387.6.113.793-.263.793-.577v-2.234c-3.338.725-4.033-1.416-4.033-1.416-.547-1.389-1.334-1.758-1.334-1.758-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.238 1.839 1.238 1.07 1.835 2.809 1.305 3.495.997.108-.775.418-1.306.762-1.607-2.665-.303-5.467-1.334-5.467-5.93 0-1.309.468-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.241 2.873.12 3.176.77.84 1.234 1.912 1.234 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .318.192.694.801.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/kris-armstrong-cissp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition"
          >
            <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667h-3.554v-11.5h3.414v1.569h.049c.476-.899 1.637-1.849 3.369-1.849 3.602 0 4.268 2.368 4.268 5.452v6.328zM5.337 7.433c-1.144 0-2.068-.926-2.068-2.065 0-1.143.924-2.065 2.068-2.065 1.141 0 2.065.922 2.065 2.065 0 1.139-.924 2.065-2.065 2.065zm1.777 13.019h-3.554v-11.5h3.554v11.5zm15.385-19.014h-17.338c-1.104 0-2 .896-2 2v20.014c0 1.104.896 2 2 2h17.338c1.104 0 2-.896 2-2v-20.014c0-1.104-.896-2-2-2z"/>
            </svg>
          </a>
          <a
            href="mailto:kris@icloud.com"
            aria-label="Email"
            className="hover:text-white transition"
          >
            <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12.713l11.985-9.713v17.988c0 1.104-.896 2-2 2h-19.97c-1.104 0-2-.896-2-2v-17.988l11.985 9.713zm0-2.427l-11.986-9.713h23.971l-11.985 9.713z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}