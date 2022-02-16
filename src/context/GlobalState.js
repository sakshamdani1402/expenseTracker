import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
const initalState = {
    transactions: [
    ]
}

// create context
export const GlobalContext = createContext(initalState);

//  provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initalState);
    //action to delete a transaction that will call the reducer
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }
    // action to add a transaction
    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}