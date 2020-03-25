
import React ,{ Component }from 'react'
import FormAdd from '../components/FormAdd'
import axios from 'axios'

 class Add extends Component{
  async  onSubmit (product) {
     

      const res = await axios.post("http://localhost:8080/products");
  
      console.log(res.data.data.product);
        
      
   
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
