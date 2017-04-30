import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  const { containerStyles } = styles;
  return (
    <View style={containerStyles}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyles: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 3,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  }
};

export default Card;
