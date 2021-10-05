import React, { useState } from 'react';
import './restaurantInfo.scss';
import restaurantData from '/assests/data/restoranData.json';
import SuperDeliverySVG from 'assests/images/super-delivery.svg';
import MinPriceSVG from 'assests/images/min-icon.svg';
import DeliverySVG from 'assests/images/motor.svg';

const RestaurantInfo = () => {
  const [name] = useState(restaurantData.d.ResultSet.DisplayName);
  const [serving] = useState(restaurantData.d.ResultSet.Serving);
  const [speed] = useState(restaurantData.d.ResultSet.Speed);
  const [flavour] = useState(restaurantData.d.ResultSet.Flavour);
  const [minPrice] = useState(
    restaurantData.d.ResultSet.DeliveryAreas[0].MinimumPrice
  );
  const [deliveryTime] = useState(
    restaurantData.d.ResultSet.DeliveryAreas[0].DeliveryTime
  );

  return (
    <div className={'info-container'}>
      <div className={'restaurant-info-name'}>{name}</div>
      <div className={'restaurant-super-delivery'}>
        <SuperDeliverySVG />
      </div>
      <div className={'restaurant-speed'}>
        <div className={'restaurant-badge-content'}>Hız</div>
        <div className={'restaurant-point'}>
          {speed.toFixed(1).replace('.', ',')}
        </div>
      </div>
      <div className={'restaurant-service'}>
        <div className={'restaurant-badge-content'}>Servis</div>
        <div className={'restaurant-point'}>
          {serving.toFixed(1).replace('.', ',')}
        </div>
      </div>
      <div className={'restaurant-flavour'}>
        <div className={'restaurant-badge-content'}>Lezzet</div>
        <div className={'restaurant-point'}>
          {flavour.toFixed(1).replace('.', ',')}
        </div>
      </div>
      <div className={'min-price-container'}>
        <MinPriceSVG />
        <div className={'info-header'}>Min. Tutar</div>
        <div className={'info-value'}>
          {minPrice.toFixed(2).replace('.', ',')} TL
        </div>
      </div>
      <div className={'delivery-time-container'}>
        <DeliverySVG />
        <div className={'info-header'}>Servis Süresi</div>
        <div className={'info-value'}>{deliveryTime} dk.</div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
