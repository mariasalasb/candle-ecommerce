import React, {useContext,useState} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { getFirestore } from '../../servicios/firebaseService'
import Confirmation from './Confirmation';
import 'firebase/firestore'
import './Formulario.css'

function Formulario() {
  const {cart,price}=useContext(CartContext);

  const [buyer, setBuyer] = useState({})

  const handleChange = (event)=>{
    setBuyer({
        ...buyer,
        [event.target.name]: event.target.value
    })
    console.log(order);
  };

  const [orderId, setOrderId] = useState()

  const order={buyer, cart, total: price()}

  const handleSubmit = (event)=>{
    event.preventDefault()
    if(buyer.mail===buyer.mail2){
      const db=getFirestore()
      db.collection('order').add(order)
      .then(resp => {
          console.log(resp);
          const results=resp._delegate._key.path.segments[1];
          setOrderId(results)
          console.log(results)
          setShow(!show);
          //alert('Tu pedido es la orden IDDD:' +results )
        })
      .catch(err=> console.log(err))
      console.log(order);
    }
    else{
      alert('El mail debe ser igual en ambos campos')
    }
    
};

  const [show, setShow] = useState(true);

  const formStyle = {
    display: show ? 'grid' : 'none',
  };

  const confirmationStyle = {
    display: show ? 'none' : 'block',
  };


    return (
        <>
           <form className="grilla formulario-registro" onSubmit={handleSubmit} id="form1" style={formStyle}>
            <input 
              name="nombre"
              className="input" 
              type="text" 
              placeholder="Nombre"
              onChange={handleChange}
            />
            <input 
              name="apellido"
              className="input" 
              type="text" 
              placeholder="Apellido"
              onChange={handleChange}
            />
            <input 
              name="direccion"
              className="input" 
              type="text" 
              placeholder="Direccion"
              onChange={handleChange}
            />
            <input 
              name="telefono"
              className="input" 
              type="text" 
              placeholder="Teléfono"
              onChange={handleChange}
            />
            <input 
              name="mail"
              className="input" 
              type="text" 
              placeholder="Mail"
              onChange={handleChange}
            />
            <input 
              name="mail2"
              className="input" 
              type="text" 
              placeholder="Repetir Mail"
              onChange={handleChange}
            />
            <button type="submit" form="form1" value="Submit" className="boton-de-pago colu-12" >Confirmar y Finalizar</button>
          </form> 

          <Confirmation orderId={orderId} style={confirmationStyle}/>

        </>
    )
}

export default Formulario
