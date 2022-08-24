import './App.css';

function App() {
   return (
      <div className="App">
         <div>
            <label>
               Nome:
               <input type="text" placeholder="Insira seu nome" />
            </label>
            <label>
               idade:
               <input type="number" placeholder="Insira sua idade" />
            </label>
            <label>
               País:
               <input type="text" placeholder="Insira seu país" />
            </label>
            <label>
               Cargo:
               <input type="text" placeholder="Insira seu cargo" />
            </label>
            <label>
               Salário anual:
               <input type="text" placeholder="Insira seu salário anual" />
            </label>
         </div>
      </div>
   );
}

export default App;
