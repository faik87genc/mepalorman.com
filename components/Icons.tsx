// Small stroke icons (24px grid), inline so no icon font or request is needed.
const P: Record<string, string> = {
  recycle: "M7 19H4.8a1.8 1.8 0 0 1-1.6-2.7L5 13M11 19h6.2a1.8 1.8 0 0 0 1.6-2.7L17 13M8 7.5 9.6 5a1.8 1.8 0 0 1 3.1 0L14 7M10 16l-2 3 3 1M16.5 8l3-.5-.8-3M6 9.5 4 6.8l3-1",
  box: "M21 8 12 3 3 8v8l9 5 9-5V8ZM3.3 7.7 12 12.5l8.7-4.8M12 12.5V21",
  layers: "m12 3 9 5-9 5-9-5 9-5ZM3 12.5l9 5 9-5M3 16.5l9 5 9-5",
  boxes: "M7.5 3 3 5.5v5l4.5 2.5L12 10.500v-5L7.5 3Zm0 5.200L3 5.600M7.500 8.200l4.500-2.600M7.500 8.200V13M16.500 11 12 13.500v5l4.500 2.500 4.500-2.500v-5L16.500 11Zm0 5.200-4.500-2.600m4.500 2.600 4.500-2.600m-4.500 2.600V21",
  handshake: "m11 17 2 2a1.4 1.4 0 0 0 2-2M14 14l2.500 2.500a1.400 1.400 0 0 1-2 2M7 12l5-5 4 1.500M2 11l4-1 5-3.500 2 .5M22 11l-4-1M2 11l5.500 5.500a1.400 1.400 0 0 0 2-2M22 11l-2 2",
  truck: "M3 6.500h11v9H3zM14 9.500h4l3 3v3h-7M7 18a1.800 1.800 0 1 0 0-.1M17 18a1.800 1.800 0 1 0 0-.1",
  phone: "M5 4h3l2 5-2.500 1.500a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z",
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  chat: "M20 11.500a8 8 0 0 1-11.800 7L4 20l1.500-4A8 8 0 1 1 20 11.500Z",
  arrow: "M5 12h14M13 6l6 6-6 6",
  pin: "M12 21s7-6.200 7-11.500A7 7 0 0 0 5 9.500C5 14.800 12 21 12 21ZM12 12a2.500 2.500 0 1 0 0-.1",
};

export function Icon({ name, size = 20, className }: { name: keyof typeof P | string; size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d={P[name] ?? P.box} />
    </svg>
  );
}
