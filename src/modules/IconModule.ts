export type IconName = 'systems' | 'platform' | 'automation' | 'dashboard' | 'data' | 'ai' | 'arrow' | 'mail' | 'linkedin' | 'github';

const svgAttrs = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"';

export function icon(name: IconName): string {
  const icons: Record<IconName, string> = {
    systems: `<svg ${svgAttrs}><rect x="3" y="4" width="18" height="14" rx="3"/><path d="M8 20h8"/><path d="M12 18v2"/><path d="M8 9h8"/><path d="M8 13h5"/></svg>`,
    platform: `<svg ${svgAttrs}><path d="M4 7.5 12 3l8 4.5-8 4.5L4 7.5Z"/><path d="m4 12 8 4.5L20 12"/><path d="m4 16.5 8 4.5 8-4.5"/></svg>`,
    automation: `<svg ${svgAttrs}><path d="M5 12a7 7 0 0 1 12-5"/><path d="M17 3v4h-4"/><path d="M19 12a7 7 0 0 1-12 5"/><path d="M7 21v-4h4"/></svg>`,
    dashboard: `<svg ${svgAttrs}><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 14v3"/><path d="M12 10v7"/><path d="M16 7v10"/></svg>`,
    data: `<svg ${svgAttrs}><ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5"/><path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>`,
    ai: `<svg ${svgAttrs}><path d="M12 3l1.5 5L19 9.5 13.5 11 12 17l-1.5-6L5 9.5 10.5 8 12 3Z"/><path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z"/></svg>`,
    arrow: `<svg ${svgAttrs}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>`,
    mail: `<svg ${svgAttrs}><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>`,
    linkedin: `<svg ${svgAttrs}><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 11v5"/><path d="M8 8h.01"/><path d="M12 16v-5"/><path d="M16 16v-3.2a1.8 1.8 0 0 0-3.6 0"/></svg>`,
    github: `<svg ${svgAttrs}><path d="M15 22v-3.5c.1-1-.3-1.7-.9-2.1 3-.3 6.1-1.5 6.1-6.6 0-1.5-.5-2.7-1.4-3.7.1-.3.6-1.8-.1-3.7 0 0-1.1-.4-3.7 1.4A12.6 12.6 0 0 0 8.3 4C5.7 2.2 4.6 2.6 4.6 2.6c-.7 1.9-.2 3.4-.1 3.7-.9 1-1.4 2.2-1.4 3.7 0 5.1 3.1 6.3 6.1 6.6-.5.4-.8 1.1-.8 2.1V22"/><path d="M9 19c-3 .9-4-1.4-4-1.4"/></svg>`,
  };

  return icons[name];
}
