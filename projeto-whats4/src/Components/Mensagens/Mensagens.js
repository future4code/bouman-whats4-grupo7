import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Mensagens(props){

    return(
        <div onDoubleClick={props.funcao}>
            <strong>
            <span>
                {props.user}
            </span> </strong>: <span>
                {props.mensagemMandada}
            </span>
            <br/>
            
            {" [APAGAR]"}   /*Nao conseguimos fazer o botao apagar a div inteira*/
        </div>
    )
}
    Mensagens.propTypes = {
        funcao: PropTypes.func,
        user: PropTypes.string,
        mensagemMandada: PropTypes.string,
    }

export default Mensagens;