
import React ,{ Component }from 'react'
import FormAdd from '../components/FormAdd'
import api from '../lib/api'

 class Add extends Component{
  async  onSubmit (product) {
    const payload = await api.newProducts(product)
    console.log(payload)
      window.alert(payload.data.product._id)
   
  }
render(){

  return (
    <FormAdd
    onSubmit={this.onSubmit.bind(this)} 
    />
  )

  }
}
  
  export default Add
