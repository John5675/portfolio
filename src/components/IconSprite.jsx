export default function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <symbol id="i-antenna" viewBox="0 0 16 16">
          <path d="M8 13 L8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M5 5 Q 8 1 11 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M3 4 Q 8 -1 13 4" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6" />
          <circle cx="8" cy="8" r="1.6" fill="currentColor" />
          <rect x="6" y="13" width="4" height="1.5" fill="currentColor" />
        </symbol>
        <symbol id="i-queue" viewBox="0 0 16 16">
          <rect x="2" y="4" width="12" height="2" rx="0.5" fill="currentColor" />
          <rect x="2" y="7" width="9" height="2" rx="0.5" fill="currentColor" opacity="0.7" />
          <rect x="2" y="10" width="6" height="2" rx="0.5" fill="currentColor" opacity="0.45" />
        </symbol>
        <symbol id="i-service" viewBox="0 0 16 16">
          <rect x="2.5" y="3" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <circle cx="5.5" cy="6.5" r="0.9" fill="currentColor" />
          <circle cx="5.5" cy="9.5" r="0.9" fill="currentColor" />
          <path d="M8 6.5 L11.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M8 9.5 L10 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </symbol>
        <symbol id="i-observe" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <circle cx="8" cy="8" r="1.8" fill="currentColor" />
          <path
            d="M2 8 L0.5 8 M14 8 L15.5 8 M8 2 L8 0.5 M8 14 L8 15.5"
            stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"
          />
        </symbol>
        <symbol id="i-spark" viewBox="0 0 16 16">
          <path d="M8 2 L8.7 6.3 L13 7 L8.7 7.7 L8 12 L7.3 7.7 L3 7 L7.3 6.3 Z" fill="currentColor" />
          <circle cx="13" cy="3" r="1" fill="currentColor" opacity="0.6" />
          <circle cx="3.5" cy="12.5" r="0.8" fill="currentColor" opacity="0.5" />
        </symbol>
        <symbol id="i-check" viewBox="0 0 16 16">
          <path
            d="M3 8.5 L6.5 12 L13 4.5"
            stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
          />
        </symbol>
        <symbol id="i-arrow" viewBox="0 0 16 16">
          <path
            d="M3 8 L13 8 M9 4 L13 8 L9 12"
            stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"
          />
        </symbol>
        <symbol id="i-arrow-down" viewBox="0 0 16 16">
          <path
            d="M8 3 L8 13 M4 9 L8 13 L12 9"
            stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"
          />
        </symbol>
        <symbol id="i-cal" viewBox="0 0 16 16">
          <rect x="2.5" y="3.5" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
          <path d="M2.5 6.5 L13.5 6.5" stroke="currentColor" strokeWidth="1.3" />
          <path d="M5.5 2 L5.5 5 M10.5 2 L10.5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </symbol>
        <symbol id="i-code" viewBox="0 0 16 16">
          <path
            d="M5.5 4 L1.5 8 L5.5 12 M10.5 4 L14.5 8 L10.5 12"
            stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
          />
        </symbol>
        <symbol id="i-cloud" viewBox="0 0 16 16">
          <circle cx="5" cy="9" r="3" fill="currentColor" />
          <circle cx="9" cy="7" r="3.5" fill="currentColor" />
          <circle cx="11.5" cy="9.5" r="2.5" fill="currentColor" />
          <rect x="3" y="11" width="11" height="1" fill="currentColor" />
        </symbol>
        <symbol id="i-db" viewBox="0 0 16 16">
          <ellipse cx="8" cy="3.8" rx="5" ry="1.8" stroke="currentColor" strokeWidth="1.3" fill="none" />
          <path
            d="M3 3.8 L3 12 Q 3 13.8 8 13.8 Q 13 13.8 13 12 L13 3.8"
            stroke="currentColor" strokeWidth="1.3" fill="none"
          />
          <path
            d="M3 7.5 Q 3 9.3 8 9.3 Q 13 9.3 13 7.5"
            stroke="currentColor" strokeWidth="1.3" fill="none" opacity="0.5"
          />
        </symbol>
        <symbol id="i-monitor" viewBox="0 0 16 16">
          <rect x="1.5" y="3" width="13" height="8.5" rx="1.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
          <path d="M5.5 14 L10.5 14 M8 11.5 L8 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </symbol>
        <symbol id="i-term" viewBox="0 0 16 16">
          <rect x="1.5" y="2.5" width="13" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
          <path
            d="M4 6.5 L6.5 9 L4 11.5 M8 11.5 L11 11.5"
            stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"
          />
        </symbol>
        <symbol id="i-mail" viewBox="0 0 16 16">
          <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <path
            d="M2 4.5 L8 9 L14 4.5"
            stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"
          />
        </symbol>
        <symbol id="i-phone" viewBox="0 0 16 16">
          <rect x="4.5" y="1.5" width="7" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
          <circle cx="8" cy="12.2" r="0.7" fill="currentColor" />
        </symbol>
        <symbol id="i-gh" viewBox="0 0 16 16">
          <path
            d="M8 1.5 C 4.4 1.5 1.5 4.4 1.5 8 c 0 2.9 1.9 5.3 4.5 6.2 0.3 0.06 0.5 -0.14 0.5 -0.3 v -1.2 c -1.8 0.4 -2.2 -0.8 -2.2 -0.8 -0.3 -0.7 -0.7 -1 -0.7 -1 -0.6 -0.4 0.04 -0.4 0.04 -0.4 0.6 0.04 1 0.6 1 0.6 0.6 1 1.5 0.7 1.9 0.5 0.06 -0.4 0.2 -0.7 0.4 -0.9 -1.4 -0.2 -2.9 -0.7 -2.9 -3.1 0 -0.7 0.2 -1.3 0.6 -1.7 -0.06 -0.2 -0.3 -0.8 0.06 -1.7 0 0 0.5 -0.2 1.7 0.6 0.5 -0.1 1 -0.2 1.6 -0.2 0.5 0 1 0.06 1.6 0.2 1.2 -0.8 1.7 -0.6 1.7 -0.6 0.3 0.9 0.1 1.5 0.06 1.7 0.4 0.4 0.6 1 0.6 1.7 0 2.4 -1.5 2.9 -2.9 3.1 0.2 0.2 0.4 0.6 0.4 1.2 v 1.8 c 0 0.2 0.2 0.4 0.5 0.3 2.6 -0.9 4.5 -3.3 4.5 -6.2 0 -3.6 -2.9 -6.5 -6.5 -6.5 z"
            fill="currentColor"
          />
        </symbol>
        <symbol id="i-li" viewBox="0 0 16 16">
          <rect x="1.5" y="1.5" width="13" height="13" rx="1.5" fill="currentColor" />
          <rect x="3.5" y="6.5" width="2" height="6" fill="var(--surface)" />
          <circle cx="4.5" cy="4.5" r="1" fill="var(--surface)" />
          <path
            d="M7.5 12.5 L7.5 6.5 L9.5 6.5 L9.5 7.3 Q 10.3 6.3 11.5 6.3 Q 12.7 6.3 12.5 8 L12.5 12.5 L10.5 12.5 L10.5 9 Q 10.5 8.2 9.8 8.2 Q 9.5 8.2 9.5 8.7 L 9.5 12.5 Z"
            fill="var(--surface)"
          />
        </symbol>
        <symbol id="i-pin" viewBox="0 0 16 16">
          <path
            d="M8 2 C 5.2 2 3 4.2 3 7 C 3 10.5 8 14 8 14 C 8 14 13 10.5 13 7 C 13 4.2 10.8 2 8 2 Z"
            stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinejoin="round"
          />
          <circle cx="8" cy="7" r="1.6" fill="currentColor" />
        </symbol>
        <symbol id="i-bot" viewBox="0 0 16 16">
          <rect x="3" y="5" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
          <circle cx="6.5" cy="9" r="1" fill="currentColor" />
          <circle cx="9.5" cy="9" r="1" fill="currentColor" />
          <path d="M8 5 L8 2.5 M6 2.5 L10 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M1.5 8.5 L3 8.5 M13 8.5 L14.5 8.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </symbol>
        <symbol id="i-compass" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" fill="none" />
          <path d="M10.5 5.5 L7.8 8.2 L5.5 10.5 L8.2 7.8 Z" fill="currentColor" />
        </symbol>
        <symbol id="i-gear" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <circle cx="8" cy="8" r="1" fill="currentColor" />
          <path
            d="M8 1.5 L8 3.5 M8 12.5 L8 14.5 M1.5 8 L3.5 8 M12.5 8 L14.5 8
               M3.5 3.5 L4.9 4.9 M11.1 11.1 L12.5 12.5
               M3.5 12.5 L4.9 11.1 M11.1 4.9 L12.5 3.5"
            stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"
          />
        </symbol>
        <symbol id="i-bolt" viewBox="0 0 16 16">
          <path d="M9 1.5 L3 9 L7 9 L6 14.5 L13 6.5 L8.5 6.5 Z" fill="currentColor" />
        </symbol>
      </defs>
    </svg>
  );
}
