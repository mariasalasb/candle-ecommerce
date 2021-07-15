import React, {useState} from 'react'

function ItemCount({initial,stock,onAdd}){
    const [cantidad,setCantidad]=useState(1)
    const handleAdd=()=>{
        if(cantidad<stock){
            setCantidad(cantidad+1)
        }
    }
    const handleRemove=()=>{
        if(cantidad>initial){
            setCantidad(cantidad-1)
        }
    }
    const handleOnAdd=()=>{ //en lugar de pasar directamente el onAdd creo esta funcion  para que sea escalable
        onAdd(cantidad)
    }
    return(
      <>
        <div className="card text-center w-50">
            <div className="card-header">
                <h4>ItemCount</h4>
            </div>
            <div className="card-body">
                <button onClick={handleRemove}>-</button>
                <label className="alert alert-white">{cantidad}</label>
                <button onClick={handleAdd}>+</button>
                <button className="btn btn-primary btn-block" onClick={handleOnAdd}> Add to cart</button>
            </div>
        </div>
      </>
    );
  }

export default ItemCount