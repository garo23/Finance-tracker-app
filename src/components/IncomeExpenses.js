import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

export default function IncomeExpenses() {
    const { transactions } = useContext(GlobalContext);
    const income = transactions
        .filter(transaction => transaction.amount > 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    const expenses = transactions
        .filter(transaction => transaction.amount < 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0) * -1;
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${income}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className="money minus">${expenses}</p>
            </div>
        </div>
    )
}