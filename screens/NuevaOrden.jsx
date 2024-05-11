import React from 'react';
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { Container, Button, Text } from 'native-base';



const NuevaOrden = () => {
    const navigation = useNavigation();
    return (
        <Container style={globalStyles.contenedor}>
            <View style={ [globalStyles.contenido, styles.contenidoView]}>
                <Button
                    style= {globalStyles.Button}
                    onPress={() => navigation.navigate('Menu')}
                >
                    <Text style= {globalStyles.buttonText}>
                        Crear una Orden 
                    </Text>
                </Button>
            </View>
        </Container>

    );
}

const styles = StyleSheet.create({
    contenidoView:{
        flexDirection:'column',
        justifyContent:'center'
    }
})

export default NuevaOrden;