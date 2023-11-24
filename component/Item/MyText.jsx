import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-paper';

const MyText = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <View>
      <View></View>
    </View>
  );
};

export default MyText;
