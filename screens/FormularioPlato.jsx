import React, { useEffect, useState, useContext } from "react";
import { View, Alert } from "react-native";
import { Container, Box, FormControl, HStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Button, Text, TextInput, Card } from "react-native-paper";

import PedidoContext from "../context/pedidos/pedidosContext";
//import CardActions from "react-native-paper/lib/typescript/components/Card/CardActions";

const FormularioPlato = () => {
    const navigate = useNavigation();
    const [cantidad, guardarCantidad] = useState(1);
    const [total, guardarTotal] = useState(0);

    //Traer los contextos
    const { pedido, guardarPedido } = useContext(PedidoContext)
    const { precio } = platillo

    const incrementar = () => {
        const nuevaCantidad = parseInt(cantidad) + 1
        guardarCantidad(nuevaCantidad)
    }
    const decrementar = () => {
        if (cantidad > 1) {
            const nuevaCantidad = parseInt(cantidad) - 1
            guardarCantidad(nuevaCantidad)
        }
    }

    const calcularTotal = () => {
        const totalPagar = cantidad * precio
        guardarTotal(totalPagar)
    }

    const confirmarOrden = () => {
        Alert.alert(
            '¿Desea confirmar el pedido?',
            'Se va a enviar el pedido',
            [
                {
                    text: 'Ok',
                    onPress: () => {
                        const pedido = {
                            ...platillo,
                            cantidad,
                            total
                        }
                        guardarPedido(pedido)
                        navigation.navigate('ResumenPedido')
                    }
                },
                {
                    text: 'Cancelar'
                }
            ]
        )
    }

    //Uso de useEffect
    useEffect(() => {
        calcularTotal()
    }, [cantidad])

    return (
        <Container>
            <Box>
                <FormControl>
                    <Text>Cantidades</Text>
                    <HStack space={3}>
                        <Button
                            onPress={decrementar()}
                        >
                            -
                        </Button>
                        //Falta algo aqui
                        <TextInput></TextInput>
                        <Button
                            onPress={() => incrementar()}
                        >
                            +
                        </Button>
                    </HStack>
                    <Text>Total a pagar: ${total}</Text>
                    <Box>
                        <HStack safeAreaBottom>
                            <Card>
                                <CardActions>
                                    <Button
                                        onPress={() => confirmarOrden()}
                                    >
                                        <Text>Ordenar</Text>
                                    </Button>
                                </CardActions>
                            </Card>
                        </HStack>
                    </Box>
                </FormControl>
            </Box>
        </Container>
    );
}

export default FormularioPlato;