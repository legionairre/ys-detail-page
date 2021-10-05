import React, { useEffect, useState } from 'react';
import menuData from '/assests/data/menuData.json';
import Menu from './menu/menu';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../redux/Shopping/shopping-types';

const MenuContainer = () => {
  const [data] = useState(menuData);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (menuData.d.ResultSet) {
      let productsArray = [];

      menuData.d.ResultSet.forEach((menu) => {
        productsArray.push(...menu.Products);
      });
      setProducts(productsArray);
    }
  }, []);

  useEffect(() => {
    if (products.length) {
      dispatch({
        type: actionTypes.SET_PRODUCT_LIST,
        payload: products
      });
    }
  }, [products]);

  return (
    <div className={'d-flex flex-column'}>
      {data.d.ResultSet.map((menu) => {
        return <Menu key={menu.Oid} menu={menu} />;
      })}
    </div>
  );
};

export default MenuContainer;
