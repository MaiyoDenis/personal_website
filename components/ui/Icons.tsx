// Custom SVG icons for technologies and social links

export function GithubIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function XIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function PythonIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 110 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M54.2 2C30.6 2 32 12.2 32 12.2L32.1 22.8H54.6C62.7 22.8 63.6 27.2 63.6 27.2V41.7H50.5C36 41.7 25.1 40.7 21 34.6C16.9 28.5 17 19.3 17 19.3S6.8 21.4 6.8 45.4C6.8 69.4 12.8 71.3 12.8 71.3L21.3 71.2V60C21.3 50.8 29.5 50.8 29.5 50.8H48.4C63.6 50.8 63.6 40 63.6 40V27.4C63.6 15.2 54.2 2 54.2 2ZM40.9 9.3C43.7 9.3 46 11.6 46 14.4C46 17.2 43.7 19.5 40.9 19.5C38.1 19.5 35.8 17.2 35.8 14.4C35.8 11.6 38.1 9.3 40.9 9.3Z"
        fill="#3776AB"
      />
      <path
        d="M55.8 108C79.4 108 78 97.8 78 97.8L77.9 87.2H55.4C47.3 87.2 46.4 82.8 46.4 82.8V68.3H59.5C74 68.3 84.9 69.3 89 75.4C93.1 81.5 93 90.7 93 90.7S103.2 88.6 103.2 64.6C103.2 40.6 97.2 38.7 97.2 38.7L88.7 38.8V50C88.7 59.2 80.5 59.2 80.5 59.2H61.6C46.4 59.2 46.4 70 46.4 70V82.6C46.4 94.8 55.8 108 55.8 108ZM69.1 100.7C66.3 100.7 64 98.4 64 95.6C64 92.8 66.3 90.5 69.1 90.5C71.9 90.5 74.2 92.8 74.2 95.6C74.2 98.4 71.9 100.7 69.1 100.7Z"
        fill="#FFD43B"
      />
    </svg>
  );
}

export function NextjsIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="90" cy="90" r="90" fill="black" />
      <path
        d="M149.508 157.438L69.1435 54H54V125.967H66.6979V69.7578L139.771 164.538C143.208 162.33 146.471 159.954 149.508 157.438Z"
        fill="url(#paint0_linear)"
      />
      <rect x="115.302" y="54" width="12.6984" height="71.9672" fill="url(#paint1_linear)" />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="109"
          y1="116.5"
          x2="144.5"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="121.651"
          y1="54"
          x2="120.799"
          y2="106.875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function TypescriptIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="256" height="256" rx="36" fill="#3178C6" />
      <path
        d="M136.6 156.4c-6.8 7.3-15.8 11.2-27.1 11.2-19.8 0-33.1-13-33.1-32.3 0-19.8 13.8-32.9 33.7-32.9 10.9 0 19.3 3.6 25.8 10.4l-11.2 11.9c-4.4-4.8-9.4-7.1-15-7.1-10.7 0-18.1 7.4-18.1 17.7 0 10 7.2 17.5 17.8 17.5 6 0 11.1-2.4 15.8-7.2l11.4 10.8zm19.6-50.6h55.2v14.4h-19.9v69.6h-15.5v-69.6h-19.8v-14.4z"
        fill="white"
        transform="translate(-25, 12)"
      />
      <text
        x="128"
        y="170"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="120"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
      >
        TS
      </text>
    </svg>
  );
}

export function PostgresqlIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.2 15.6c-.6 0-1.1-.3-1.4-.8l-1.3-2.1c-.2-.3-.5-.5-.9-.5h-1.2v3.4H7V6.5h4.2c2.1 0 3.8 1.6 3.8 3.7 0 1.5-.9 2.8-2.2 3.4l1.8 2.8c.2.3.2.7 0 1-.2.1-.4.2-.4.2zm-2.8-8.2h-2v3h2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"
        fill="#336791"
      />
      <circle cx="12" cy="12" r="10" stroke="#336791" strokeWidth="1.5" fill="none" />
    </svg>
  );
}
