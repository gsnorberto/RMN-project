import './App.css';
import {useState} from 'react';

function App() {
   const [name, setName] = useState('');
   const [age, setAge] = useState(0);
   const [country, setCountry] = useState('');
   const [position, setPosition] = useState('');
   const [wage, setWage] = useState(0);

   const displayInfo = () => {
      
   }

   return (
      <div className="App">
         <div className="information">
            <label>
               Nome: <br/>
               <input type="text" placeholder="Insira seu nome" onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
               Idade: <br/>
               <input type="number" placeholder="Insira sua idade" onChange={(e) => setAge(e.target.value)} />
            </label>
            <label>
               País: <br/>
               <input type="text" placeholder="Insira seu país" onChange={(e) => setCountry(e.target.value)}/>
            </label>
            <label>
               Cargo: <br/>
               <input type="text" placeholder="Insira seu cargo" onChange={(e) => setPosition(e.target.value)}/>
            </label>
            <label>
               Salário anual: <br/>
               <input type="number" placeholder="Insira seu salário anual" onChange={(e) => setWage(e.target.value)}/>
            </label>
         </div>

         <button>Adicionar empregado</button>
      </div>
   );
}

export default App;
