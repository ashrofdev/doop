import React, {useState} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import AppLoading from 'expo-app-loading';

import * as Font from 'expo-font';
import Login from './src/screens/Login';
import Login1 from './src/screens/Login1';
import Profile from './src/screens/Profile';
import Profile1 from './src/screens/Profile1';
import Splash1 from './src/screens/Splash1';
import Splash2 from './src/screens/Splash2';
import Splash3 from './src/screens/Splash3';

const DrawerNavigation = createDrawerNavigator({
  Login: Login,
  Login1: Login1,
  Profile: Profile,
  Profile1: Profile1,
  Splash1: Splash1,
  Splash2: Splash2,
  Splash3: Splash3,
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation,
    },
    Login: Login,
    Login1: Login1,
    Profile: Profile,
    Profile1: Profile1,
    Splash1: Splash1,
    Splash2: Splash2,
    Splash3: Splash3,
  },
  {
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      'roboto-900': require('./src/assets/fonts/roboto-900.ttf'),
      'roboto-700': require('./src/assets/fonts/roboto-700.ttf'),
      'roboto-300': require('./src/assets/fonts/roboto-300.ttf'),
      'roboto-regular': require('./src/assets/fonts/roboto-regular.ttf'),
    }),
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
