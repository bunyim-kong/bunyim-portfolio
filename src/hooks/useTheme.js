import { useEffect, useState } from 'react';

export function useTheme() {
  const [preference, setPreference] = useState(() => {
    try {
      return localStorage.getItem('bunyim-theme');
    } catch {
      return null;
    }
  });
  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  const dark = preference ? preference === 'dark' : systemDark;
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const update = (e) => setSystemDark(e.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    document.querySelector('meta[name="theme-color"]').content = dark ? '#141010' : '#fafafa';
  }, [dark]);
  function toggle() {
    const value = dark ? 'light' : 'dark';
    setPreference(value);
    try {
      localStorage.setItem('bunyim-theme', value);
    } catch {
      /* Theme still works when storage is unavailable. */
    }
  }
  return [dark, toggle];
}
