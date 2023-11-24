import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {ThemeContext} from '../../context/Themecontext';

const HomeScreen = () => {
  const isDarkMode = useContext(ThemeContext);
  return (
    <View style={{backgroundColor: isDarkMode ? '#222222' : '#ffffff'}}>
      <Text style={{color: isDarkMode ? '#ffffff' : '#222222'}}>
        Welcome to my application
      </Text>
    </View>
  );
};

export default HomeScreen;
