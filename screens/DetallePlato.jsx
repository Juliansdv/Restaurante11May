import React, { useContext } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Box, Container, HStack } from "native-base";
import { Button, Card } from "react-native-paper";

//Context de los pedidos
import PedidoContext from "../context/pedidos/pedidosContext";
import globalStyles from "../styles/global";
import { useNavigation } from "@react-navigation/native";

const DetallePlato = () => {
    //uso de navegacion
    const navigate = useNavigation();
    //Llamar el contexto del pedido
    const { pedido } = useContext(PedidoContext)
    const { categoria, descripcion, nombre, imagen, precio, id } = pedido
    console.log(categoria, descripcion, nombre, imagen, precio, id)
    return (

        <Box style={globalStyles.contenedor}>
            <Text>{nombre}</Text>
            <Card>
                <Card.Cover size="90px" source={{ uri: pedido.imagen }}></Card.Cover>
                <Card.Content>
                    <Text>La categoria es: {pedido.categoria}</Text>
                    <Text>{descripcion}</Text>
                </Card.Content>
                <Card.Actions>
                    <Button
                        onPress={() => navigate.navigate('FormularioPlato')}
                    >
                        <Text>Ordenar</Text>
                    </Button>
                </Card.Actions>
            </Card>
        </Box>
    );


}

export default DetallePlato;