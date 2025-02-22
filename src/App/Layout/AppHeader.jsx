import React from 'react';

import '../Components/HeaderMenu/styles.css';
import { Logo } from '../Components/logo/logo';

import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu';

// const Logo = () => (
//   <a href="/">
//     {' '}
//     <img
//       style={{ width: 50 }}
//       src="./Images/start-it-logo.svg"
//       className="logo"
//       alt="logo"
//     />
//   </a>
//);

export function AppHeader() {
  return (
    <header>
      <Logo />

      <HeaderMenu />
    </header>
  );
}
