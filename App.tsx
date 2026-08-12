import { NavigationContainer } from '@react-navigation/native';

import { AvistamientosProvider } from './src/context/AvistamientosContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <AvistamientosProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AvistamientosProvider>
  );
}