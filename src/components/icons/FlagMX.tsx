interface FlagMXProps {
  className?: string;
}

export default function FlagMX({ className = '' }: FlagMXProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" className={className} aria-label="Bandera de México">
      <rect width="10" height="20" fill="#006847" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#CE1126" />
      <ellipse cx="15" cy="9.5" rx="2.2" ry="2.8" fill="#8B6914" opacity="0.75" />
      <path d="M12.5 8 Q15 6.5 17.5 8" fill="none" stroke="#4A7A1A" strokeWidth="0.8" opacity="0.8" />
      <path d="M13.2 12.5 Q15 13.8 16.8 12.5" fill="#7A3A10" stroke="none" opacity="0.8" />
    </svg>
  );
}
