import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    //taking all the amounts from transactions
    const amounts = transactions.map(transaction => transaction.amount);
    //adding them all together with 2 fixed decimal places
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <>
            <h5>Current Balance</h5>
            <h1 className='fw-bold'>${total}</h1>
        </>
    )
}

export default Balance