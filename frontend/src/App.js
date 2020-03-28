import React from 'react';
import './global.css';
import Routes from './routes';

//Propriedades - são atributos repassados para compontentes, seus nomes devem começar com letras maiúsculas
//Estado - é uma informação que vai ser mantida pelo componente, seja ele um input de um usuário, ou uma api externa

/* const [count, setCounter] = useState(0); //ao utilizar o useState, ele nos retorna um array
// Array [valor,função de atualização do valor]
return (
  //JSX (JavaScript XML) - é quando o código html está dentro de um arquivo JS
  <div>
    <Header>Contador: {count}</Header>
    {/* A função de incremento é criada e chamada entre chaves dentro do evento */
  //   <button onClick={increment}>Incrementar</button>
  // </div> 
//Componente - é uma função que retorna um HTML, com funcionalidades JS e CSS
function App() {

  return(
    <Routes/>
  ); 
}
export default App;