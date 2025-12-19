type BrandCard = {
    name: string;
    tagline: string;
    icon: string;
}

export const brandCards: BrandCard[]= [
  {
    name: "AWS",
    tagline: "Cloud Computing",
    icon: `<svg viewBox="0 0 64 64" class="w-7 h-7">
                <path d="M12 34.4l-6.7-4 3.3-9.8 6.7 4-3.3 9.8zM12.9 16l-6.7 4-2.2-9.4 7-3.1 1.9 8.5zM23.9 12.5l-3.1-7 8.5-1.9 3.1 7-8.5 1.9zM34.4 12l4-6.7 9.8 3.3-4 6.7-9.8-3.3zM48 12.9l-4-6.7 9.4-2.2 3.1 7-8.5 1.9zM59.5 23.9l7-3.1 1.9 8.5-7 3.1-1.9-8.5zM64 34.4l6.7-4-3.3-9.8-6.7 4 3.3 9.8zM63.1 48l6.7-4 2.2 9.4-7 3.1-1.9-8.5zM52.1 51.5l3.1 7-8.5 1.9-3.1-7 8.5-1.9zM41.6 52l-4 6.7-9.8-3.3 4-6.7 9.8 3.3zM28 51.1l4 6.7-9.4 2.2-3.1-7 8.5-1.9zM16.5 40.1l-7 3.1-1.9-8.5 7-3.1 1.9 8.5z"/>
            </svg>`,
  },
  {
    name: "OpenAI",
    tagline: "AI Research",
    icon: `<svg viewBox="0 0 64 64" class="w-7 h-7">
                <path d="M32 12c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"/>
                <path d="M32 20c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                <circle cx="32" cy="32" r="4"/>
            </svg>`,
  },
  {
    name: "Microsoft Azure",
    tagline: "Cloud Platform",
    icon: `<svg viewBox="0 0 64 64" class="w-7 h-7">
                <path d="M48 12 16 36l8 8 32-24-8-8z"/>
                <path d="M16 36l8 8-8 8 16 12 16-12-8-8 8-8L32 24 16 36z"/>
                <path d="M24 52l8 8 8-8-8-8-8 8z"/>
            </svg>`,
  },
  {
    name: "Google Cloud",
    tagline: "Data & AI",
    icon: `<svg viewBox="0 0 64 64" class="w-7 h-7">
                <path d="M46 38.5a14 14 0 0 1-14 14 14 14 0 0 1-14-14c0-3.1 1-6 2.8-8.4l7.2 4.2a7 7 0 1 0 8-11.5l7.2-4.2A14 14 0 0 1 46 38.5z"/>
                <path d="M31 20.6a7 7 0 0 1 3.5.9l7.2-4.2a14 14 0 0 0-24.7 7.5l7.2 4.2a7 7 0 0 1 6.8-8.4z"/>
                <path d="M17 31.2a7 7 0 0 1 0 7.6l-7.2 4.2a14 14 0 0 0 0-16l7.2 4.2z"/>
                <path d="M46 38.5a14 14 0 0 1-5.2 10.8l-7.2-4.2a7 7 0 0 0 5.2-11.9l7.2-4.2A14 14 0 0 1 46 38.5z"/>
            </svg>`,
  },
  {
    name: "CrowdStrike",
    tagline: "Cybersecurity",
    icon: `<svg viewBox="0 0 64 64" class="w-7 h-7">
                <path d="M32 12c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"/>
                <path d="M32 20c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                <path d="M32 28c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
            </svg>`,
  },
  {
    name: "Oracle",
    tagline: "Enterprise Cloud",
    icon: `<svg viewBox="0 0 64 64" class="w-7 h-7">
                <rect x="12" y="20" width="40" height="24" rx="4" ry="4" fill="none" stroke="currentColor" stroke-width="3"/>
                <rect x="16" y="24" width="32" height="16" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="3"/>
                <circle cx="32" cy="32" r="6"/>
            </svg>`,
  },
  {
    name: "Vercel",
    tagline: "Edge Platform",
    icon: `<svg viewBox="0 0 64 64" class="w-7 h-7">
                <path d="M32 8l26 46H6L32 8z"/>
            </svg>`,
  },
  {
    name: "GitHub",
    tagline: "Code Platform",
    icon: `<svg viewBox="0 0 64 64" class="w-7 h-7">
                <path d="M32 8a24 24 0 0 0-7.6 46.8c1.2.2 1.6-.5 1.6-1.2v-4.8c-6.7 1.5-8.1-2.8-8.1-2.8-1.1-2.8-2.7-3.5-2.7-3.5-2.2-1.5.2-1.5.2-1.5 2.4.2 3.7 2.5 3.7 2.5 2.2 3.7 5.7 2.7 7.1 2 .2-1.6.9-2.7 1.6-3.3-5.5-.6-11.3-2.7-11.3-12.2 0-2.7 1-4.9 2.5-6.6-.3-.6-1.1-3.1.2-6.5 0 0 2.1-.7 6.8 2.5 2-.6 4.1-.9 6.2-.9 2.1 0 4.2.3 6.2.9 4.7-3.2 6.8-2.5 6.8-2.5 1.3 3.4.5 5.9.2 6.5 1.5 1.7 2.5 3.9 2.5 6.6 0 9.5-5.8 11.6-11.3 12.2.9.8 1.7 2.3 1.7 4.7v6.8c0 .7.4 1.4 1.6 1.2A24 24 0 0 0 32 8z"/>
            </svg>`,
  },
  {
    name: "Docker",
    tagline: "Container Platform",
    icon: `<svg viewBox="0 0 64 64" class="w-7 h-7">
                <path d="M20 24h8v8h-8v-8zm12 0h8v8h-8v-8zm-12 12h8v8h-8v-8zm12 0h8v8h-8v-8zm12-12h8v8h-8v-8z"/>
                <path d="M44 24h-4v8h4v-8z"/>
                <path d="M24 36h8v8h-8v-8z"/>
                <path d="M8 32c0 13.3 10.7 24 24 24s24-10.7 24-24S45.3 8 32 8 8 18.7 8 32Z"/>
            </svg>`,
  },
  {
    name: "Cloudflare",
    tagline: "Web Security",
    icon: `<svg viewBox="0 0 64 64" class="w-7 h-7">
                <path d="M32 8l24 16-24 16L8 24 32 8z"/>
                <path d="M32 24l8 8-8 8-8-8 8-8z"/>
                <circle cx="32" cy="32" r="8"/>
            </svg>`,
  },
];