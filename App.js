import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Body from './components/Body.js';
import Header from './components/Header.js';

export default class App extends React.Component {
  Footer = () => {
    return <Text>Rodapé do meu app</Text>;
  };

  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Header></Header>
        <Body></Body>
        <this.Footer></this.Footer>
        <ButtonPersonality></ButtonPersonality>
      </View>
    );
  }
}

const ButtonPersonality = () => {
  return (
    <TouchableOpacity style={{ backgroundColor: 'yellow' }}>
      <View>
        <Text>Clicou mamou</Text>
      </View>
    </TouchableOpacity>
  );
};
