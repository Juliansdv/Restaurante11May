import React from "react";
import { useReducer } from "react";
import firebase from '../../firebase';
import firebaseContext from "./firebaseContext";
import firebaseReducer from "./firebaseReducer";
import { OBTENER_PRODUCTOS_EXITO } from "../../types";
import _ from 'lodash'
import { Menu } from "react-native-paper";

const FirebaseState = props => {
    //crea el state inicial
    const initialState={
        menu:[]
    }

    //useReducer con el dispatch
    const [ state, dispatch] = useReducer(firebaseReducer, initialState)

    const obtenerProducto = () => {
        firebase.db
        .collection('productos')//nombre de la coleccion en firebase
        .onSnapshot(manejarSnapshot) //manejo de db en tiempo real

        function manejarSnapshot(snapshot){
            let plato = snapshot.docs.map(doc=> {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });

            plato = _.sortBy(plato, 'categoriaScrollView')
            dispatch({
                type: OBTENER_PRODUCTOS_EXITO,
                payload: plato
            })
        }
    }

    return(
        <firebaseContext.Provider
            value={{
                menu: state.menu,
                firebase,
                obtenerProducto
            }}
        >
            {props.children}
        </firebaseContext.Provider>
    )
}

export default FirebaseState;