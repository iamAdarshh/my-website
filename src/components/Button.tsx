import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'white' | 'dark';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = 'primary',
  href,
  className = '',
  children,
  ...props
}: ButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all select-none";
  
  const variants = {
    primary: "bg-zinc-900 text-white hover:bg-zinc-800",
    secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
    outline: "bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-50 hover:border-zinc-300 shadow-sm hover:shadow-md",
    white: "bg-white text-zinc-900 hover:bg-zinc-200",
    dark: "bg-zinc-800 text-white hover:bg-zinc-700"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...(props as any)}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
