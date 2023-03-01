import React from 'react';
import { useState } from 'react';
import { getPhotographer } from '../../library/api'
const daten = await getPhotographer()

function index() {
    const [data, setData] = useState(daten)
    console.log(data)

  return (
    <div>
        <h2>{data[0].name}</h2>
        <img src={data[0].fotos[0].url}></img>
    </div>
  )
}

export default index