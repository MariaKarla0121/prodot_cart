import React, { useState } from 'react';
import Color from './Color';


    export default function Color_extra(){
        const [state, setState] = useState("#FFF");
        const handleInput =(e)=>{
           setState(e.target.value)
        }
        return(<Color value={state} onChange={handleInput}/>)
    }