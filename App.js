import 'react-native-gesture-handler';
import React from 'react';
//Vistas
import Login from './app/screens/views/Login';
import Register from './app/screens/views/Register';
import Assignatures from './app/screens/views/Assignatures';
//Navegacion
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Activities'} screenOptions={style.headerVisible}>
        <Stack.Screen name={'Login'} component={Login} options={style.headerHidden} />
        <Stack.Screen name={'Register'} component={Register} options={{ title: 'Registro' }} />
        <Stack.Screen name={'Assignatures'} component={Assignatures} options={{ title: 'Asignaturas' }} />
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