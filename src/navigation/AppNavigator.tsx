import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Inicio from '../screens/Inicio';
import MiDex from '../screens/MiDex';
import Mas from '../screens/Mas';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={Inicio}
        options={{
          title: 'Inicio',
          tabBarLabel: 'Inicio',
        }}
      />

      <Tab.Screen
        name="Mi DEX"
        component={MiDex}
        options={{
          title: 'Mi DEX',
          tabBarLabel: 'Mi DEX',
        }}
      />

      <Tab.Screen
        name="Más"
        component={Mas}
        options={{
          title: 'Más',
          tabBarLabel: 'Más',
        }}
      />
    </Tab.Navigator>
  );
}