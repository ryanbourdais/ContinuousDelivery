import * as React from 'react';
import {Button, Paragraph, Dialog} from 'react-native-paper';
import Cart from './Cart';
import {ScrollView} from 'react-native';

const MyComponent = ({
  cart,
  visible,
  makeNotVisible,
  removeFromCart,
  emptyCart,
}) => {
  return (
    <Dialog
      style={{maxHeight: '70%'}}
      visible={visible}
      onDismiss={() => makeNotVisible()}>
      <Dialog.Title>Alert</Dialog.Title>
      <ScrollView>
        <Dialog.Content>
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            style={{alignContent: 'flex-start'}}
            onPress={() => {
              emptyCart();
            }}>
            Empty Cart
          </Button>
          <Button
            onPress={() => {
              makeNotVisible();
            }}>
            Done
          </Button>
        </Dialog.Actions>
      </ScrollView>
    </Dialog>
  );
};

export default MyComponent;
