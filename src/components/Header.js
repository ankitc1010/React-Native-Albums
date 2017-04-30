import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
    <Text style={textStyle}>{props.header}</Text>
  </View>
);
};

const styles = {
  textStyle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  viewStyle: {
    backgroundColor: '#4285f4',
    padding: 9,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,

  }
};
export default Header;
