import React from 'react'
import Item from './Item'


function ItemListContainer() {
  return (
    <div class="row">
    <div class="col-12"><Item nombre={"Corte de pelo"} ></Item></div>
    <div class="col-12"> <Item nombre={"Eventos"} ></Item></div>
    <div class="col-12"><Item nombre={"Novias"} ></Item> </div>
    </div>
  )
}

export default ItemListContainer