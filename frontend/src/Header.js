import React from 'react';

// Também é possível identificar cada propriedade a receber identificando-as dentro de um objeto a receber pela função no lugar do props
//...Header({children})
export default function Header(props) {
    return (
        <header>
            {/* Para usar como parâmetro o conteúdo de um JS dentro de um HTML, utiliza-se o children */}
            <h1>{props.children}</h1> 
            {/* <h1>{props.title}</h1> */}
            {/* Para adicionar uma propriedade JS dentro de um HTML devem estar entre chaves */}
        </header>
    );
}