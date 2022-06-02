import * as React from 'react';
import MenuCard from './MenuCard';
import MenuData from '../data/MenuData';
import {View} from 'react-native';

const Menu = ({addToCart}) => (
  <View style={{paddingBottom: 80}}>
    {MenuData.map((menuItem, i) => (
      <MenuCard key={i} menuItem={menuItem} addToCart={addToCart} />
    ))}
  </View>
);

export default Menu;
