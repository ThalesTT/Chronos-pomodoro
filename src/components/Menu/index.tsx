import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const savedTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return savedTheme;
  });
  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };
  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        href=''
        className={styles.menuLink}
        aria-label='Ir para Home'
        title='Ir para Home'
      >
        <HouseIcon />
      </a>
      <a
        href=''
        className={styles.menuLink}
        aria-label='Ver histórico'
        title='Ver historico'
      >
        <HistoryIcon />
      </a>
      <a
        href=''
        className={styles.menuLink}
        aria-label='configurações'
        title='configurações'
      >
        <SettingsIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Mudar o tema'
        title='Mudar o tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
