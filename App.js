import 'react-native-gesture-handler';
import React from 'react';
//Vistas
import Login from './app/screens/views/Login';
//Navegacion
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Activities'} screenOptions={style.headerVisible}>
        <Stack.Screen name={'Login'} component={Login} options={style.headerHidden} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const style = {
  headerHidden: {
    headerShown: false,
  },
  headerVisible: {
    headerShown: true,
    headerMode: 'float',
    headerTitleAlign: 'center',
    headerTitleAllowFontScaling: true,
  },
  headerLeft: {
    margin: 10,
  },
  iconMenu: {
    padding: 10,
  },
};
export default App;