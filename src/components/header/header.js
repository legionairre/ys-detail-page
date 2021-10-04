import React from 'react';
import './header.scss';
import Logo from '/assests/images/logo.svg';

const Header = () => (
  <div className={'header-container'}>
    <Logo className={'logo'} width={214} height={42} />
  </div>
);

export default Header;
