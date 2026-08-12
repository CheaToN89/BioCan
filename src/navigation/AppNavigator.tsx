import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from '../screens/Inicio';
import MiDex from '../screens/MiDex';
import Mas from '../screens/Mas';
import Explorar from '../screens/Explorar';

import FaunaInicio from '../screens/fauna/FaunaInicio';
import Marinos from '../screens/fauna/Marinos';
import Terrestres from '../screens/fauna/Terrestres';
import Aves from '../screens/fauna/Aves';

import FloraInicio from '../screens/flora/FloraInicio';

import EspeciesLista from '../screens/species/EspeciesLista';
import FichaEspecie from '../screens/species/FichaEspecie';
import { InicioStackParamList } from './types';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<InicioStackParamList>();


function InicioStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="InicioPrincipal"
        component={Inicio}
        options={{ title: 'BioCan' }}
      />


      <Stack.Screen
        name="Explorar"
        component={Explorar}
        options={{ title: 'Explorar' }}
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
        name="FichaEspecie"
        component={FichaEspecie}
        options={{ title: 'Ficha' }}
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
        component={FloraInicio}
        options={{ title: 'Flora' }}
      />


      <Stack.Screen
        name="EspeciesLista"
        component={EspeciesLista}
        options={({ route }) => ({
          title: route.params.titulo,
        })}
      />

    </Stack.Navigator>
  );
}


export default function AppNavigator() {
  return (
    <Tab.Navigator id="RootTabs">

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