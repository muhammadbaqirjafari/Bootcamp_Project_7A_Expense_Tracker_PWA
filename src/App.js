import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TransactionLists} from './components/TransactionLists';
import {AddTransaction} from './components/AddTransaction';

import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
           <Balance/>
           <IncomeExpenses/>
           <TransactionLists/>
           <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;