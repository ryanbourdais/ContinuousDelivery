import * as React from 'react';
import {Button, Card, Paragraph} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Title: {
    justifyContent: 'center',
    width: '100%',
    alignContent: 'center',
    color: '#03DAC6',
    fontSize: 20,
    fontFamily: 'Roboto',
    marginLeft: '5%',
  },
  Cost: {
    color: '#03DAC6',
    fontSize: 10,
    fontFamily: 'Roboto',
    marginLeft: '5%',
  },
  Card: {
    marginTop: 20,
    backgroundColor: '#121212',
    width: '80%',
    height: 350,
    marginLeft: '10%',
  },
  Description: {
    color: '#03DAC6',
    marginBottom: 5,
    fontFamily: 'Roboto',
    marginLeft: '5%',
  },
  Image: {
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: '5%',
    marginBottom: 10,
  },
  Button: {
    color: '#03DAC6',
    marginLeft: '3%',
    fontFamily: 'Roboto',
    padding: 5,
  },
});

const MenuCard = ({menuItem, addToCart}) => (
  <Card style={styles.Card}>
    <Card.Content>
      <Paragraph style={styles.Title}>
        {menuItem.title ?? 'menu item'}
      </Paragraph>
      <Paragraph style={styles.Cost}>{`$${menuItem.cost ?? '0.00'}`}</Paragraph>
      <Paragraph style={styles.Description}>{menuItem.description}</Paragraph>
      <Card.Cover
        style={styles.Image}
        source={{uri: menuItem.image} ?? {uri: 'https://picsum.photos/700'}}
      />
      <Card.Actions style={styles.Button}>
        <Button
          mode="contained"
          theme={{colors: {primary: '#03DAC6'}}}
          onPress={() => {
            addToCart(menuItem);
          }}>
          Add to Cart
        </Button>
      </Card.Actions>
    </Card.Content>
  </Card>
);

export default MenuCard;
