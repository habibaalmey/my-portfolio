function createIcon(path, viewBox = '0 0 24 24') {
  return function Icon(props) {
    const { children, ...rest } = props;
    return (
      <svg
        aria-hidden={rest['aria-hidden'] ?? true}
        focusable="false"
        viewBox={viewBox}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      >
        {path}
        {children}
      </svg>
    );
  };
}

export const Mail = createIcon(
  <g>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <polyline points="3 7 12 13 21 7" />
  </g>
);

export const Download = createIcon(
  <g>
    <path d="M12 3v12" />
    <polyline points="7 11 12 16 17 11" />
    <path d="M5 19h14" />
  </g>
);

export const Github = createIcon(
  <path d="M12 2C7 2 3 6 3 11c0 4 2.6 7.4 6.2 8.6-.1-.7-.2-1.8 0-2.5.2-.7 1.3-4.4 1.3-4.4s-.3-.6-.3-1.4c0-1.3.8-2.2 1.8-2.2.8 0 1.3.6 1.3 1.4 0 .8-.5 2-0.8 3.1-.2.9.4 1.6 1.3 1.6 1.5 0 2.7-1.6 2.7-4 0-2.1-1.5-3.6-3.7-3.6-2.5 0-4 1.9-4 3.8 0 .8.3 1.6.7 2.1.1.2.1.4-.1.4-.3 1.2-.4 1.3-.1.2-.3.2-.5.1-1.5-.7-2.4-2.7-2.4-4.3 0-3.5 2.5-6.6 6.9-6.6 3.6 0 6.4 2.6 6.4 6.1 0 3.6-2.3 6.5-5.4 6.5-1.1 0-2.1-.6-2.5-1.3l-.7 2.5c-.3 1-1 2.1-1.5 2.8.9.3 1.9.4 2.9.4 5 0 9-4 9-9s-4-9-9-9z" />,
  '0 0 24 24'
);

export const Linkedin = createIcon(
  <g>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <line x1="8" y1="10" x2="8" y2="16" />
    <line x1="8" y1="8" x2="8" y2="8" />
    <path d="M13 16v-3a2 2 0 0 1 4 0v3" />
  </g>
);

export const LayoutGrid = createIcon(
  <g>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
  </g>
);

export const ExternalLink = createIcon(
  <g>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M5 5v16h16" />
  </g>
);

export const Briefcase = createIcon(
  <g>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M3 13h18" />
  </g>
);

export const CalendarDays = createIcon(
  <g>
    <rect x="3" y="4" width="18" height="17" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <rect x="8" y="14" width="3" height="3" rx="0.5" />
    <rect x="13" y="14" width="3" height="3" rx="0.5" />
  </g>
);

export const Sparkles = createIcon(
  <g>
    <path d="M5 11a3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1-3-3" />
    <path d="M19 11a4 4 0 0 0-4-4 4 4 0 0 0 4-4" />
    <path d="m12 22 1.4-4.2L17 17l-3.6-0.8L12 12l-1.4 4.2L7 17l3.6 0.8z" />
  </g>
);

export const Award = createIcon(
  <g>
    <circle cx="12" cy="8" r="4" />
    <path d="M8.5 12.5 7 22l5-2 5 2-1.5-9.5" />
  </g>
);

export const Trophy = createIcon(
  <g>
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="M7 4h10v5a5 5 0 0 1-10 0z" />
    <path d="M5 4h2v2a3 3 0 0 1-3 3h-1V6a2 2 0 0 1 2-2z" />
    <path d="M19 4h-2v2a3 3 0 0 0 3 3h1V6a2 2 0 0 0-2-2z" />
  </g>
);

export const Menu = createIcon(
  <g>
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </g>
);

export const ExternalArrow = ExternalLink;

export const LanguagesIcon = createIcon(
  <g>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14.5 14.5 0 0 1 4 9 14.5 14.5 0 0 1-4 9 14.5 14.5 0 0 1-4-9 14.5 14.5 0 0 1 4-9" />
  </g>
);
