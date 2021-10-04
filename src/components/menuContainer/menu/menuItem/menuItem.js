import React, { useState } from 'react';
import AddSVG from '/assests/images/add-icon.svg';
import './menuItem.scss';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../../../redux/Shopping/shopping-types';

const MenuItem = ({ product }) => {
  const [value, setValue] = useState(1);

  const onChangeInput = (value) => {
    let newValue = value;

    if (!isNaN(+newValue)) {
      setValue(newValue);
      if (newValue >= 99) setValue(99);
    }
    if (newValue === '') {
      setValue(1);
    }
  };

  const dispatch = useDispatch();

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: product
    });
    setValue(1);
  };

  return (
    <div className={'menu-item-container d-flex'}>
      <input
        className={'menu-item-input'}
        type="text"
        value={value}
        onChange={(event) => onChangeInput(event.target.value)}
      />
      <button className={'plus-btn'} onClick={addToBasket}>
        <AddSVG />
      </button>
      <div className={'d-flex flex-column'}>
        <div className={'product-name'}>{product.DisplayName}</div>
        <div className={'product-description'}>{product.Description}</div>
      </div>
      <span className={'product-price'}>{product.ExtendedPrice} TL</span>
    </div>
  );
};

export default MenuItem;
