import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Menu from './components/Menu';
import Test from './components/Test';
import CartBar from './components/CartBar';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = menuItem => {
    setCart([...cart, menuItem]);
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar />
      <ScrollView horizontal={false}>
        <View>
          <Menu addToCart={addToCart} />
          <Test />
          <Text>{JSON.stringify(cart, null, 2)}</Text>
        </View>
      </ScrollView>
      <CartBar cart={cart} emptyCart={emptyCart} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  mainView: {
    backgroundColor: '#000000',
  },
});

export default App;
