import React from 'react';
import styled from 'styled-components';
import CampoDeEntrada from './Components/CampoDeEntrada/CampoDeEntrada';


const Maindiv = styled.div`
background-color:#00E676;

`

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }

  }
  
  render(){
    return(
      <Maindiv>
        <div>
          <CampoDeEntrada
            borda="1px dotted black"
            
          ></CampoDeEntrada>
        </div>
      </Maindiv>
    )
  }
}

export default App;
