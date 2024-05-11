import React, { useEffect, useState, useContext } from "react";
import { View, Alert } from "react-native";
import { Container, Box, FormControl, HStack, Avatar } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Button, Text, TextInput, Card } from "react-native-paper";

import PedidoContext from "../context/pedidos/pedidosContext";
import firebase from "../firebase";

const ResumenPedido = () => {
    //Traer los metodos del contexto
    const { pedido, total, mostrarResumen, eliminarProducto } = useContext(PedidoContext)
    const navigation = useNavigation()

    useEffect(() => {
        calcularTotal()
    }, [pedido])

    const calcularTotal = () => {
        let nuevoTotal = 0;
        nuevoTotal = pedido.reduce((nuevoTotal, articulo) => nuevoTotal + articulo.total, 0)
        mostrarResumen
    }

    const ResumenPedido = () => {

    }

    //Eliminar articulo no esta completo
    /*const eliminarArticulo = () => {
        Alert.alert(
        {
            text: 'Confirmar',
                onPress: () => {
                    //Eliminar el state del articulo
                    eliminarProducto(id)
                },
                {
                    text: 'Cancelar',
                    style: 'cancel'
                }
        }*/

        const enviarPedido = () => {
            Alert.alert(
                'Enviar pedido',
                'Una vez enviado no se puede cambiar',
                [
                    {
                        text: 'Confirmar',
                        onPress: async () => {
                            //crear un objeto con toda la informacion
                            const pedidoObj = {
                                tiempoEntrega: 0,
                                estado: false,
                                creado: Date.now(),
                                orden: pedido
                            }

                            //Enviar datos a firebase
                            try {
                                const pedido = await firebase.db.collection('ordenes').add(pedidoObj)
                                console.log(pedido.id)
                                navigation.navigate('ProgresoPedido')
                            } catch (error) {
                                console.log(error)
                            }
                        }
                    },
                    {
                        text: 'Cancelar',
                        style: 'cancel'
                    }
                ]
            )
        }

        return (
            <Container>
                <Box>
                    <Text>Resumen del pedido</Text>
                    {pedido.map((platillo, i) => {
                        const { cantidad, nombre, imagen, id, precio } = platillo;
                        return (
                            <View key={id + i}>
                                <Avatar size='70px' source={{ uri: imagen }}></Avatar>
                                <List.Item>
                                    <Text>{nombre}</Text>
                                    <Text>La cantidad es: {cantidad}</Text>
                                    <Text>El precio es: ${precio}</Text>
                                    <Button
                                        onPress={() => eliminarArticulo(id)}
                                    >
                                        <Text>Eliminar</Text>
                                    </Button>
                                </List.Item>
                            </View>
                        )
                    }
                    )}
                    <Button
                        onPress={() => enviarPedido}
                    >
                        <Text>Enviar pedido</Text>
                    </Button>
                </Box>
            </Container>
        );
    }

    export default ResumenPedido;