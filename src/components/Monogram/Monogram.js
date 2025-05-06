import React, { useRef, useEffect } from 'react';
import styles from './Monogram.module.css';
import Image from 'next/image';
import { useTheme } from 'components/ThemeProvider';

export const Monogram = () => {
  const monogramRef = useRef(null);
  const { themeId } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const monogramElement = monogramRef.current;
      const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
      const scrollY = window.scrollY;

      if (isMobile && scrollY === 0) {
        monogramElement.style.visibility = 'visible';
      } else {
        monogramElement.style.visibility = 'hidden';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={monogramRef}>
      {themeId == "light" ? <Image width={160} height={120} src='/logo.png'/> : <Image width={160} height={120} src='/logodark.png'/>}
    </div>
  );
};




