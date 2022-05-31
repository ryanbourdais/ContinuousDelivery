import CartItem from './CartItem';
import * as React from 'react';
import {View} from 'react-native';

const Cart = ({cart, removeFromCart}) => {
  return (
    <View style={{paddingBottom: 60}}>
      {cart.map((menuItem, i) => (
        <>
          <CartItem
            key={i}
            index={i - 1}
            menuItem={menuItem}
            removeFromCart={removeFromCart}
          />
        </>
      ))}
    </View>
  );
};
export default Cart;
