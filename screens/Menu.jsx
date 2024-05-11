import React, { useContext, useEffect, Fragment } from 'react';
import { useNavigationBuilder, useNavigation } from '@react-navigation/native';
import FirebaseContext from '../context/firebase/firebaseContext';
import PedidoContext from '../context/pedidos/pedidosContext';
import globalStyles from '../styles/global';
import {
    NativeBaseProvider,
    View,
    ScrollView,
    Text,
    Avatar
} from 'native-base';
import { List } from 'react-native-paper';

const Menu = () => {
    const navigation = useNavigation();
    const { menu, obtenerProducto } = useContext(FirebaseContext)
    const { seleccionarPlatillo } = useContext(PedidoContext)
    useEffect(() => {
        obtenerProducto()
    }, [])

    return (
        <NativeBaseProvider>
            <ScrollView>
                <View>
                    {menu.map((plato, i) => {
                        const { categoria, descripcion, nombre, imagen, precio, id } = plato
                        console.log(categoria,descripcion,nombre,imagen,precio,id)
                        return (
                            <Fragment>
                                <Avatar size="70px" source={{uri:imagen}}></Avatar>
                                <List.Item
                                    title={nombre}
                                    description={descripcion}
                                    onPress={()=> navigation.navigate('DetallePlato')}
                                >
                                    <Text>{nombre}</Text>
                                    <Text>{precio}</Text>
                                </List.Item>
                            </Fragment>
                        )
                    })}
                </View>
            </ScrollView>
        </NativeBaseProvider>
    );
}

export default Menu;