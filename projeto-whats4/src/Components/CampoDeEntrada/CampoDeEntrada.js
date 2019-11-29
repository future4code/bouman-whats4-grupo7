import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Mensagens from '../Mensagens/Mensagens';


const CustomInput = styled.input`
    

`
const CustomButton = styled.button`
    background-color:#0D6652;
	border:solid #0D6652;
	cursor:pointer;
    color:#ffffff;
	font-family:Arial;
    text-decoration:none;
    width:auto
}
    
`
const CustomDiv = styled.div`
    border:${props => props.borda};
    min-height:100vh
    width: 50%;
    margin: auto;
    display:flex;
    flex-direction:column;
    justify-content: flex-end;
    box-sizing: border-box;
    background-image: url("https://i.pinimg.com/originals/34/8f/c9/348fc9806e32bba0fb4c42e799ddf880.jpg");
    background-size: 100%;
    `

const CustomSection = styled.section`
    grid-template-columns: 15% 75% 10.1%;
    display:grid;
    

`

class CampoDeEntrada extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            valorUsuario: '',
            valorMensagem:'',
            mensagensEnviadas: [],
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
        let copy = [...this.state.mensagensEnviadas, <Mensagens funcao={this.apagar} key={this.state.mensagensEnviadas.length} user={this.state.valorUsuario} mensagemMandada={this.state.valorMensagem}/>]
        this.setState({
            mensagensEnviadas:copy
        })

    }


  enviarComEnter = (event) => {
    if (event.key === "Enter"){
        this.enviar();}
    }

  apagar = (event) => {
    event.target.innerHTML = "";
 
    }



    render(){
        return(
            <CustomDiv onKeyDown={this.enviarComEnter} borda="2px solid #0D6652">
                {this.state.mensagensEnviadas}
                <CustomSection>
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
                </CustomSection>
            </CustomDiv>
        )
    }

    

}
    


export default CampoDeEntrada;

