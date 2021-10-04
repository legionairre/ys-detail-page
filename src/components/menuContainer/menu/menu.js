import React from 'react';
import './menu.scss';
import MenuItem from './menuItem/menuItem';

const Menu = ({ menu }) => {
  return (
    <div className={'menu-container d-flex flex-column'}>
      <div className={'menu-header'}>{menu.DisplayName}</div>
      {menu.Products?.length &&
        menu.Products.map((product) => {
          return <MenuItem key={product.ProductId} product={product} />;
        })}
    </div>
  );
};

export default Menu;
