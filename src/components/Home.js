import React,{Component} from 'react';
import {Dolar} from './Dolar';
import {Euro} from './Euro';
import {Real} from './Real';
export class Home extends Component{   

    render(){        
        return(            
            <div>
                <div className="mt-5 d-flex justify-content-center">
                    <h3>Bienvenidos al sistema de Cotizacion</h3><br></br>                
                </div>
                <div className=" mt-5 mt-12 d-inline-block w-75">
                    <div className="justify-content-center fondo">
                        <h3 className="textColorB fondoTitle mt-5">Tipo de Cambio</h3>   
                        <div className="App mt-5 " >
                            <Dolar/>
                            <Euro/>
                            <Real/>
                        </div> 
                        <h5 className="textColorB textH5" >EL TIPO DE CAMBIO ES INFORMATIVO Y PUEDE VARIAR CADA 5 SEGUNDOS DURANTE EL DÍA.</h5> 
                         
                    </div>
                </div>
            </div>            
        );
    }

}