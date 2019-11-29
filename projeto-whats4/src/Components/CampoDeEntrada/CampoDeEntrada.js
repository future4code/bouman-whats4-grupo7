import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CustomInput = styled.input`
    width:${props => props.largura};

`
const CustomButton = styled.button`
    width:${props => props.largura};
`
const CustomDiv = styled.div`
    border: 1px solid black;
    min-height:100vh
    width: 50%;
    margin: auto;
    display:flex;
    flex-direction:column;
    justify-content: flex-end;
    box-sizing: border-box;
`

const CustomFieldset = styled.section`
    grid-template-columns: 15% 75% 10%;
    display:grid;

`

class CampoDeEntrada extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            valorUsuario: '',
            valorMensagem:'',
            mensagensEnviadas: [

            ],
            
            
        

        }
 
    }




    atualizarUsuario = (event) => {
        this.setState({
            valorUsuario:event.target.value
        })

    }

    atualizarMensagem = (event) => {
        this.setState({
            valorMensagem:event.target.value
        })
    }

    enviar = () => {
        let copy = [...this.state.mensagensEnviadas, <div> <span><strong>
            {this.state.valorUsuario}</strong></span>:   <span>{this.state.valorMensagem}</span></div>]
        this.setState({
            mensagensEnviadas:copy
        })
    }













    render(){
        return(
            <CustomDiv>
                {this.state.mensagensEnviadas}
                <CustomFieldset>
                    <CustomInput 
                        type='text'
                        value={this.state.valorUsuario}
                        onChange={this.atualizarUsuario}
                        placeholder="Usúario"



                    ></CustomInput>
                    <CustomInput
                        type='text'
                        value={this.state.valorMensagem}
                        onChange={this.atualizarMensagem}
                        placeholder="Mensagem"

                    >

                    </CustomInput>
                    <CustomButton
                        onClick={this.enviar}
                    >
                        Enviar
                    </CustomButton>
                </CustomFieldset>
            </CustomDiv>
        )
    }

}

export default CampoDeEntrada;

