import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from '../screens/Inicio';
import MiDex from '../screens/MiDex';
import Mas from '../screens/Mas';

import FaunaInicio from '../screens/fauna/FaunaInicio';
import Marinos from '../screens/fauna/Marinos';
import Terrestres from '../screens/fauna/Terrestres';
import Aves from '../screens/fauna/Aves';

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
        component={FaunaInicio}
        options={{ title: 'Fauna' }}
      />

      <Stack.Screen
        name="Marinos"
        component={Marinos}
        options={{ title: 'Marinos' }}
      />

      <Stack.Screen
        name="Terrestres"
        component={Terrestres}
        options={{ title: 'Terrestres' }}
      />

      <Stack.Screen
        name="Aves"
        component={Aves}
        options={{ title: 'Aves' }}
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