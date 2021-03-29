import 'react-native-gesture-handler';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
//Vistas
import Login from './app/screens/views/Login';
import Register from './app/screens/views/Register';
import Assignatures from './app/screens/views/Assignatures';
import LearningStyle from './app/screens/views/LearningStyle';
import Activities from './app/screens/views/Activities';
//Navegacion
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'} screenOptions={style.headerVisible}>
        <Stack.Screen name={'Login'} component={Login} options={style.headerHidden} />
        <Stack.Screen name={'Register'} component={Register} options={{ title: 'Registro' }} />
        <Stack.Screen
          name={'Assignatures'}
          component={Assignatures}
          options={{
            title: 'Asignaturas',
            headerRight: () => (
              <TouchableOpacity style={style.iconMenu}>
                <Icon name="menu" type="material-community" size={34} />
              </TouchableOpacity>
            ),
          }} />
        <Stack.Screen
          name={'LearningStyle'}
          component={LearningStyle}
          options={{
            title: 'Tipos de Aprendizaje',
            headerRight: () => (
              <TouchableOpacity style={style.iconMenu}>
                <Icon name="menu" type="material-community" size={34} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name={'Activities'}
          component={Activities}
          options={{
            title: 'Actividades',
            headerRight: () => (
              <TouchableOpacity style={style.iconMenu}>
                <Icon name="menu" type="material-community" size={34} />
              </TouchableOpacity>
            ),
          }}
        />
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