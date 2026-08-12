import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from '../screens/Inicio';
import MiDex from '../screens/MiDex';
import Mas from '../screens/Mas';
import Explorar from '../screens/Explorar';

import FaunaInicio from '../screens/fauna/FaunaInicio';
import Marinos from '../screens/fauna/Marinos';
import Terrestres from '../screens/fauna/Terrestres';

import FloraInicio from '../screens/flora/FloraInicio';

import EspeciesLista from '../screens/species/EspeciesLista';
import FichaEspecie from '../screens/species/FichaEspecie';
import FuenteExternaWebView from '../screens/species/FuenteExternaWebView';
import { InicioStackParamList, MiDexStackParamList } from './types';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<InicioStackParamList>();
const MiDexStackNavigator = createNativeStackNavigator<MiDexStackParamList>();


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
        name="FuenteExternaWebView"
        component={FuenteExternaWebView}
        options={({ route }) => ({
          title: route.params.titulo,
        })}
      />


      <Stack.Screen
        name="Terrestres"
        component={Terrestres}
        options={{ title: 'Terrestres' }}
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


function MiDexStack() {
  return (
    <MiDexStackNavigator.Navigator>

      <MiDexStackNavigator.Screen
        name="MiDexInicio"
        component={MiDex}
        options={{ title: 'Mi DEX' }}
      />


      <MiDexStackNavigator.Screen
        name="FichaEspecie"
        component={FichaEspecie}
        options={{ title: 'Ficha' }}
      />


      <MiDexStackNavigator.Screen
        name="FuenteExternaWebView"
        component={FuenteExternaWebView}
        options={({ route }) => ({
          title: route.params.titulo,
        })}
      />

    </MiDexStackNavigator.Navigator>
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
        component={MiDexStack}
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