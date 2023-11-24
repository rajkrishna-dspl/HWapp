import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import style from './style';
import TextItem from './component/Item/TextItem';
import MyText from './component/Item/MyText';
import {Button} from 'react-native-paper';
import HomeScreen from './component/HomeScreen/HomeScrenn';
import {ThemeContext} from './context/Themecontext';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <SafeAreaView>
        <View
          style={{
            backgroundColor: isDarkMode ? '#222222' : '#ffffff',
            height: 200,
          }}>
          <Text>Hello World</Text>
          <Button
            icon="camera"
            mode="contained"
            onPress={() => setIsDarkMode(!isDarkMode)}>
            Press me
          </Button>
        </View>
        <HomeScreen />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export default App;
