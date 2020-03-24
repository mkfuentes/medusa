
import React, {useState} from 'react'
import FormAdd from '../components/FormAdd'
import api from '../lib/api'

 function Add (props) {
  async function onSubmit (product) {
    const payload = await api.newProduct(product)
    console.log(payload)

    window.alert(payload.data.product._id)
    console.log(props.history)
    props.history.push('/')
  }

  return (
    <FormAdd
    onSubmit={onSubmit} 
    />
  )

  }
  export default Add
