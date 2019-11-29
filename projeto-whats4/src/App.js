import React from 'react';
import styled from 'styled-components';
import CampoDeEntrada from './Components/CampoDeEntrada/CampoDeEntrada';




class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

     
    }

  }
  
  render(){
    return(
      <div> 
        <div>
          <CampoDeEntrada
            mensagem="Usúario"
            
          
          ></CampoDeEntrada>
        

        </div>
      </div>
    )
  }


}



export default App;
