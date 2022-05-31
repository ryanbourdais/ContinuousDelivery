import * as React from 'react';
import {Appbar, Paragraph} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  Price: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Roboto',
    marginLeft: '70%',
    position: 'relative',
    top: 2,
  },
});

const total = cart => {
  if (cart.length === 0) {
    return 0;
  }

  return cart.map(item => item.cost).reduce((prev, curt) => prev + curt);
};

const CartBar = ({cart, emptyCart, makeVisible}) => (
  <Appbar style={styles.bottom}>
    <Appbar.Action
      icon="cart"
      onPress={() => {
        makeVisible();
      }}
      style={styles.ButtonContainer}
    />
    <Paragraph style={styles.Price}>${total(cart).toFixed(2)}</Paragraph>
  </Appbar>
);

export default CartBar;
