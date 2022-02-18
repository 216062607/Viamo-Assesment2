import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import axios from 'axios'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingPage from '../components/LandingPage'


const App=()=> {
    const [items,setItems]= useState(null)
    
   //Fetching data                                          
    useEffect(()=>{
      const fetchItems=async()=>{
        const results = await axios(
          `https://fe-assignment.vaimo.net/`
        )
        console.log(results.data)
        setItems(results.data)
      }
      fetchItems()
  
    },[])
 
  return (
    <div>
      <Head>
        <title>Viamo Assesment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;500&display=swap" rel="stylesheet"></link>
      </Head>
     
      <LandingPage items={items}/>
    </div>

  )
}
export default App
