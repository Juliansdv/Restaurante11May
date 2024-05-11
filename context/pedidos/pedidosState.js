import React from "react";
import { useReducer } from "react";
import PedidoContext from "./pedidosContext";
import PedidoReducer from "./pedidosReducer";
import {
    SELECCIONAR_PRODUCTOS,
    GUARDAR_PEDIDO,
    MOSTRAR_RESUMEN,
    ELIMINAR_PRODUCTO
} from "../../types";


const PedidosState = props => {
    //crea el state inicial
    const initialState = {
        pedido: [],
        platillo: null
    }

    //useReducer con el dispatch
    const [state, dispatch] = useReducer(PedidoReducer, initialState)

    //seleccionar y obtener producto
    const seleccionarPlatillo = platillo => {
        dispatch({
            type: SELECCIONAR_PRODUCTOS,
            payload: platillo
        })
    }

    //Guardar el pedido
    const guardarPedido = pedido => {
        dispatch({
            type: GUARDAR_PEDIDO,
            payload: pedido
        })
    }

    //Mostrar los items del pedido
    const mostrarResumen = total => {
        dispatch({
            type: MOSTRAR_RESUMEN,
            payload: total
        })
    }

    //Eliminar un articulo
    const eliminarProducto = id => {
        dispatch({
            type: ELIMINAR_PRODUCTO,
            payload: id
        })
    }

    return (
        <PedidoContext.Provider
            value={{
                pedido: state.pedido,
                platillo: state.platillo,
                total: state.total,
                seleccionarPlatillo,
                guardarPedido,
                mostrarResumen,
                eliminarProducto
            }}
        >
            {props.children}
        </PedidoContext.Provider>
    )
}

export default PedidosState;