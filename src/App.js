
import './App.css';

import ExpenseItem from "./components/Expenses/ExpenseItem.js"
// import Card from './UI/Card.js';
// import Card from './components/UI/Card';
 

function App(props) {
  const expenses=[               //here now we have 4 objects inside the expense array
    {title:'Toilet Paper', amount: 94.12, date:new Date(2020, 7, 14) },
    {title:'New TV', amount: 799.49, date:new Date( 2021,2,12) },
    {title:'Car Insurance', amount: 294.67, date:new Date(2021,2,28) },
    {title:'New Desk (Wooden)', amount: 450, date:new Date(2021,5,12) }
    ];
  return (
    <div>
        <p>let's get started</p>
        <h2>This would not be visible</h2>
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
        {/* <ExpenseItem
         title={expenses[0].title}
         amount={expenses[0].amount} 
         date={expenses[0].date} 
        />
        <ExpenseItem
         title={expenses[1].title}
         amount={expenses[1].amount}
         date={expenses[1].date}
        />
        <ExpenseItem
         title={expenses[2].title}
         amount={expenses[2].amount}
         date={expenses[2].date} 
        />
        <ExpenseItem
         title={expenses[3].title}
         amount={expenses[3].amount}
         date={expenses[3].date} 
        />   BOTH THE METHODS ARE CORRECT to enter the array in the function....BUT UPPER WALA METHOD IS MORE CORRECT*/}
    </div>
  );
}

export default App;
