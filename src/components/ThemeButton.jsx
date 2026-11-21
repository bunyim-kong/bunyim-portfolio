import { Moon, Sun } from 'lucide-react';

export function ThemeButton({ dark, onToggle }) {
  const label = dark ? 'Switch to light mode' : 'Switch to dark mode';
  return (
    <button
      className="icon-button theme-toggle"
      type="button"
      aria-label={label}
      title={label}
      onClick={onToggle}
    >
      {dark ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
    </button>
  );
}
