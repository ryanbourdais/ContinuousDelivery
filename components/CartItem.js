import * as React from 'react';
import {IconButton, Paragraph} from 'react-native-paper';
import {StyleSheet, View, Image} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flexDirection: 'row',
  },
  ItemContainer: {
    flexDirection: 'column',
  },
});

const CartItem = ({menuItem, removeFromCart, index}) => (
  <View style={styles.Container}>
    <IconButton
      icon="delete"
      onPress={() => {
        removeFromCart(index);
      }}
    />
    <View style={styles.ItemContainer}>
      <Paragraph style={{marginBottom: 0}}>{menuItem.title}</Paragraph>
      <Paragraph style={{fontSize: 12, marginTop: 0}}>
        {menuItem.description}
      </Paragraph>
      <Paragraph style={{fontSize: 14}}>${menuItem.cost}</Paragraph>
    </View>
  </View>
);

export default CartItem;
