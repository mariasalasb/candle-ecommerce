import React from 'react'
import {useParams,Link} from 'react-router-dom'
import './ItemListContainer.css'
import image1 from '../../assets/lights.jpg'
import image2 from '../../assets/fakelights.jpg'
import ItemListTopSale from './ItemListTopSale'

function ItemListContainer({source}){

      const {categoryId} = useParams()
      console.log(categoryId)
      return(
        <>
      <div className="contenedor">
        <div className="image">
          <img src={image1} alt="Avatar" className="image_img" />
            <Link to='/category/velas'>
              <div className="image_overlay">
                <div className="image_title">Velas</div>
                <p className="image_description">Conocé lo + nuevo</p>
              </div>
            </Link>
          </div>
        
        
          <div className="image">
            <img src={image2} alt="Sección de luces" className="image_img"/>
              <Link to='/category/luces'> 
                <div className="image_overlay">
                      <div className="image_title">Luces</div>
                      <p className="image_description">Conocé lo + nuevo</p>
                </div>
              </Link>
          </div>
      </div>
      <ItemListTopSale/>
      </>
    );
  }

export default ItemListContainer
