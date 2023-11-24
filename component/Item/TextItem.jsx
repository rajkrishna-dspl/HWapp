import {View, Text} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const TextItem = ({name, price}) => {
  return (
    <View>
      <Text>Name is = {name}</Text>
      <Text>Price is = {price}</Text>
    </View>
  );
};

export default TextItem;
