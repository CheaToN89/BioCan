import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from '../screens/Inicio';
import MiDex from '../screens/MiDex';
import Mas from '../screens/Mas';
import Fauna from '../screens/Fauna';
import Flora from '../screens/Flora';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function InicioStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="InicioPrincipal"
        component={Inicio}
        options={{ title: 'BioCan' }}
      />

      <Stack.Screen
        name="Fauna"
        component={Fauna}
        options={{ title: 'Fauna' }}
      />

      <Stack.Screen
        name="Flora"
        component={Flora}
        options={{ title: 'Flora' }}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={InicioStack}
        options={{
          tabBarLabel: 'Inicio',
        }}
      />

      <Tab.Screen
        name="Mi DEX"
        component={MiDex}
        options={{
          tabBarLabel: 'Mi DEX',
        }}
      />

      <Tab.Screen
        name="Más"
        component={Mas}
        options={{
          tabBarLabel: 'Más',
        }}
      />
    </Tab.Navigator>
  );
}