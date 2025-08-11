'use client';

import { usePathname } from 'next/navigation';
import { Header, HeaderItems } from '../header/header';

export const DynamicHeader = () => {
  const pathname = usePathname();

    const isLandingPage = pathname === '/';

  const landingPageProps = {
    enabledLinks: [HeaderItems.RESOURCES, HeaderItems.PRICES, HeaderItems.CONTACTS],
    showBackButton: false,
  };

  const otherPageProps = {
    enabledLinks: [],
    showBackButton: true,
  };

  return <Header {...(isLandingPage ? landingPageProps : otherPageProps)} />;
};