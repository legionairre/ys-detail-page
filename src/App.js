import React from 'react';
import './index.scss';

import Header from './components/header/header';
import Basket from './components/basket/basket';
import MenuContainer from './components/menuContainer/menuContainer';
import RestaurantInfo from './components/restaurantInfo/restaurantInfo';

const App = () => (
  <div>
    <Header />
    <div className={'container d-flex flex-wrap justify-content-center mt-4'}>
      <Basket />
      <div
        className={
          'd-flex flex-column justify-content-evenly right-side-container'
        }
      >
        <RestaurantInfo />
        <MenuContainer />
      </div>
    </div>
  </div>
);

export default App;
