import React from 'react';
import QR from './Movil/QR';
import General from './Paginas/General';
import Carta from './Movil/Carta'
import Carta_First from './Movil/Carta_First';
import Cuenta from './Movil/Cuenta'
import Paginacion from './Movil/Paginacion'
import MainState from './context/main/mainState'

function App() {

    return(
    <MainState>
        <General/>
     
    </MainState>
    )
}
export default App;