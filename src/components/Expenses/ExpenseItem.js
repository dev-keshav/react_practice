// import '../Expense/ExpenseItem.css';
import './ExpenseItem.css';
import Card from '../UI/Card.js';

function ExpenseItem(props) {
// const expenseDate = new Date(2021,2,28);    //as the month jan is no. as 0 HERE WE ARE ARE CREATEING DYNAMIC DATA
// const expenseTitle = 'Car Insurance';
// const expenseAmount = 249.67;          //we can not just directly use $ symbol in it as = $249.67

const month = props.date.toLocaleString('en-US',{month: 'long'});
const day = props.date.toLocaleString('en-US',{day: '2-digit'});
const year = props.date.getFullYear();

return(                                // be careful with the bracket opening for the return statement is should be as...return()
 <Card className="expense-item">
    {/* <div>{props.date.toISOString()}</div>       */}
    {/* <div>{props.date.toLocaleString('en-US',{month: 'long'})}</div> */}
    <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
    </div>
    <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
    </div>
    <button>Change Title</button>
</Card>
//<button onClick={() => {console.log('Clicked!!')}}> Change Title </button>
);
}
export default ExpenseItem;
