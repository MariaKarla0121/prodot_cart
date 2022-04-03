import React from 'react';
import Navegacion from '../Components/Navegacion';
import Tabla from '../Components/Tabla'
import '../CSS/Pedidos.css'

class Pedidos extends React.Component{
  constructor(props){
    super(props);
    this.state = {active: 'aTab'};
  }

  render(){
    const content ={
      aTab: <Tabla/>,
      bTab: 'Tab B',
      cTab: 'Tab C',
      dTab: 'Tab C'
    };
    return(
      <div style={{display:"flex",flexDirection:"column", margin: "15px 80px 0 80px",}}>
        <div style={{
              color: "#000000",

              fontWeight: "700",
              fontSize: "24px",
            }}>Pedidos</div>
        
        <Navegacion
         
          active={this.state.active}
          onChange={active=>this.setState({active})}
        >
          <div key='aTab'>DÍA <div className='lne1'/></div>
          <div key='bTab'>SEMANA <div className='lne2'/></div>
          <div key='cTab'>MES <div className='lne3'/></div>
          <div key='dTab'>HISTORIAL</div>
        </Navegacion>
       
        
        <p>{content[this.state.active]}</p>
      </div>

    )
  }
  
};

export default Pedidos;
