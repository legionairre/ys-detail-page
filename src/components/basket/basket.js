import React, { useEffect, useState } from 'react';
import './basket.scss';
import BasketSVG from '/assests/images/basket.svg';
import TrashSVG from '/assests/images/trash.svg';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../../redux/Shopping/shopping-types';

const Basket = () => {
  const cart = useSelector((state) => state.shop.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart.length) {
      let price = 0;

      cart.map((item) => {
        price +=
          parseFloat(item.ExtendedPrice.replace(',', '.')) *
          parseFloat(item.qty);
        setTotalPrice(price.toFixed(2).replace('.', ','));
      });
    }
  }, [cart]);

  const onChangeInput = (value, item) => {
    let newValue = value;

    if (!isNaN(+newValue)) {
      dispatch({
        type: actionTypes.ADJUST_ITEM_QTY,
        payload: { ...item, qty: newValue }
      });
      if (newValue >= 99)
        dispatch({
          type: actionTypes.ADJUST_ITEM_QTY,
          payload: { ...item, qty: 99 }
        });
    }
    if (newValue === '') {
      dispatch({
        type: actionTypes.ADJUST_ITEM_QTY,
        payload: { ...item, qty: 1 }
      });
    }
  };

  const onTrashClicked = (item) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: item
    });
  };

  return (
    <div className={'basket-container d-flex flex-column'}>
      <div className={'basket-header'}>
        <p>YEMEK SEPETİM</p>
      </div>
      <div className={'basket-address'}>
        <p>Şişli (Esentepe Mah. - Plazalar.)</p>
      </div>
      <div
        className={'basket-content d-flex'}
        style={{ height: !cart.length ? '100%' : 'auto' }}
      >
        {!cart.length ? (
          <div>
            <BasketSVG />
            <span className={'basket-content-empty-text'}>
              Sepetiniz Henüz Boş
            </span>
          </div>
        ) : (
          <div className={'d-flex flex-column'}>
            {cart.map((item) => (
              <div key={item.ProductId} className={'d-flex align-items-center'}>
                <div className={'basket-product-name'}>{item.DisplayName}</div>
                <input
                  className={'basket-product-input'}
                  type={'text'}
                  value={item.qty}
                  onChange={(event) => onChangeInput(event.target.value, item)}
                />
                <div className={'basket-product-price'}>
                  {item.ExtendedPrice} TL
                </div>
                <button
                  className={'trash-button'}
                  onClick={() => onTrashClicked(item)}
                >
                  <TrashSVG fill={'#AB0012'} />
                </button>
              </div>
            ))}
            <div className={'total-container'}>
              <div>TOPLAM:</div>
              <div className={'total-price'}>{totalPrice} TL</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
