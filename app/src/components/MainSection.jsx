import { useState,useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";

const MainSection=()=>{

const[loading,setLoading]=useState("")
const[data,setData]=useState([])
const[error,setError]=useState(false)

useEffect(()=>{
const getData = async ()=>{
  try{
const response= await fetch("http://localhost:9000")
const data= await response.json()
setData(data)
console.log(data)
} catch (error){
  console.log("error")
}
};
getData()
},[])

    return(
<HeroSection>
<CardContainer>
   {
data.map((item,index)=>{
  return (

<Card  key={index} image={item.image} price={item.price}  type={item.type} text={item.text}/>
  )
})
   }
  </CardContainer>
  </HeroSection>
)
}
export default MainSection;

const HeroSection=styled.section`
height:calc(100vh - 150px);
background-image:url('/bg.png');
`

const CardContainer=styled.div`
height:400px;
width:950px;
margin:0 auto;
display:flex;
gap:15px;
flex-wrap:wrap;
background-color:transparent;
padding:30px 20px;
`



const Right=styled.div`

`