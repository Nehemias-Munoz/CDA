import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//Vista de Actividades
import ActingGameAct from '../activities/ActingGameAct';
import DebateAct from '../activities/DebateAct';
import ExperimentAct from '../activities/ExperimentAct';
import ImReporterAct from '../activities/ImReporterAct';
//Navegacion
const Tab = createMaterialTopTabNavigator();

const Activities = () => {
  return (
    <SafeAreaProvider>
      <Tab.Navigator tabBarOptions={styleTabBar.tabBar}>
        <Tab.Screen name={'ActingGameAct'} component={ActingGameAct} />
        <Tab.Screen name={'DebateAct'} component={DebateAct} />
        <Tab.Screen name={'ExperimentAct'} component={ExperimentAct} />
        <Tab.Screen name={'ImReporterAct'} component={ImReporterAct} />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};
const styleTabBar = {
  tabBar: {
    showLabel: false,
    allowFontScaling: true,
    tabStyle: {
      padding: 0,
      height: 1,
    },
  },
};
export default Activities;