import React,{Component} from 'react';
import RealImg from '../imagen/bandera_3.jpg';

export class Real extends Component{
    constructor(props){
        super(props)
        this.state = {
            Cotizacion : [],
        }
    }
    componentDidMount(){
        this.refreshCotizacion();
        this.intervalID = setInterval(this.refreshCotizacion.bind(this), 5000);
    }
    componentWillUnmount() {
        /*
          stop getData() from continuing to run even
          after unmounting this component
        */
        clearInterval(this.intervalID);
      }

    refreshCotizacion(){
        fetch('http://localhost:50111/Api/cotizacion/real')
        .then(res => res.json())
        .then((data) => {
          this.setState({ Cotizacion: data }); console.log("Actualizado") ;
        })
        .catch(console.log)
    }
    render(){
        

        return(
            <div className="h-100 w-25 d-inline-block ">                                  
                <div >
                    <img src={RealImg} width="160" height="100" />
                    <h3 className="textColorB mt-5">Real </h3> 
                    {this.state.Cotizacion.map((todo,i) => (  
                    <h3 className="textColorB"><span className="Simbolo">$</span> {todo.precio} </h3> ))}

                </div> 
            </div>
        );
    }

}