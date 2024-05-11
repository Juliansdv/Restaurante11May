import 'react-native-gesture-handler';
import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import NuevaOrden from './screens/NuevaOrden';
import FormularioPlato from './screens/FormularioPlato';
import Menu from './screens/Menu';
import DetallePlato from './screens/DetallePlato';
import ResumenPedido from './screens/ResumenPedido';
import ProgresoPedido from './screens/ProgresoPedido';

import FirebaseState from './context/firebase/firebaseState';
import PedidosState from './context/pedidos/pedidosState';
import { NativeBaseProvider } from 'native-base';

const Stack = createStackNavigator()

const App = () => {
  return (
    <NativeBaseProvider>
      <FirebaseState>
        <PedidosState>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='NuevaOrden' component={NuevaOrden}
                options={{ title: 'Nueva Orden' }} />
              <Stack.Screen name='Menu' component={Menu}
                options={{ title: 'Menu' }} />
              <Stack.Screen name='DetallePlato' component={DetallePlato}
                options={{ title: 'Detalle Plato' }} />
              <Stack.Screen name='FormularioPlato' component={FormularioPlato}
                options={{ title: 'Formulario Plato' }} />
              <Stack.Screen name='ResumenPedido' component={ResumenPedido}
                options={{ title: 'Resumen Pedido' }} />
              <Stack.Screen name='ProgresoPedido' component={ProgresoPedido}
                options={{ title: 'Progreso Pedido' }} />
            </Stack.Navigator>
          </NavigationContainer>
        </PedidosState>
      </FirebaseState>
    </NativeBaseProvider>
  )
}

export default App;