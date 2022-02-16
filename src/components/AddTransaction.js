import React, {useState, useContext} from 'react'
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const {transactions, addTransaction} = useContext(GlobalContext)
    
    function onSubmit(e){
        e.preventDefault();
        //get all ids from transactions
        const ids = transactions.map(transaction => transaction.id)
        const newTransaction = {
            //we cant add to null so set id to 1 if ids is empty
            id: ids.length===0 ? 1: Math.max(...ids)+1 , // find max id and set id as max+1
            text,
            amount : +amount //simpleway to convert string to number
        }
        addTransaction(newTransaction);
        //transaction is added so set states to default
        setText('');
        setAmount(0);
    }
    
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction