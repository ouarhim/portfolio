import React from 'react';
import useIsMobile from './useIsMobile';
import HeroWeb from './HeroWeb';
import HeroMobile from './HeroMobile';

export default function Hero() {
  const isMobile = useIsMobile();
  return isMobile ? <HeroMobile /> : <HeroWeb />;
} 