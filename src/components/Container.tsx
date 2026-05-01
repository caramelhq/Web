interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className = '', children }: ContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-0 w-full ${className}`}>
      {children}
    </div>
  );
}
