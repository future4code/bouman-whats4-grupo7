import React from 'react';
import styled from 'styled-components';


const BotaoDeletar = styled.button`
    background-color:red;
    color:white;
    

`




function Mensagens(props){

    
    return(
        <div onDoubleClick={props.funcao}>
            <span>
                {props.user}
            </span>: <span>
                {props.mensagemMandada}
            </span>
           {" APAGAR"}
        </div>
    )
}

export default Mensagens;