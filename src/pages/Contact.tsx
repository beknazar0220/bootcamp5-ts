import React, {useEffect} from 'react'
import axios from 'axios'

const API ="https://reqres.in/api/users/"

function Contact() {
  async function getProduct(){
    try {
      const res = await axios.get(API)
      console.log(res);
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getProduct()
  }, [])
  return (
    <div>
    </div>
  )
}

export default Contact