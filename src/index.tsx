import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';
    
    this.get('/transactions', () => {
      return {
        id: 1,
        title: 'Teste',
        amount: 400,
        type: 'deposit',
        category: 'food',
        date: '05/06/1997'
      }
    })
  }
}) 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
