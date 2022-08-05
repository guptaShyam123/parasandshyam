import React from 'react'
import styled from 'styled-components'
import girls from '../assets/1775.png'

const Stylediv = styled.div`

box-shadow: 10px 10px 34px rgba(0, 0, 0, 0.25);
height:334px;
width:400px;
border-radius:20px;
margin-top:10px;
margin-left:20px;
 
@media(min-width:993px) and (max-width:1024px){

    
box-shadow: 10px 10px 34px rgba(0, 0, 0, 0.25);
height:334px;
width:400px;
border-radius:20px;
margin-top:10px;
margin-left:20px;

}
`
const Styleimge = styled.img`
   height:250px;
   width:310px;
   border-radius:20px;
   align-items: center;
   margin-top:33px;
   
   background-position: center;
   
@media(min-width:993px) and (max-width:1024px){
    height:250px;
    width:310px;
    border-radius:20px;
    align-items: center;
    margin-top:33px;
    
    background-position: center;
}
`
const Stylep = styled.p`
position:absolute;
margin-left:120px;
font-family:Poppins;
font-size:16px;
color:#111d5e;
display:flex;

@media(min-width:993px) and (max-width:1024px){
    position:absolute;
margin-left:130px;
font-family:Poppins;
font-size:16px;
color:#111d5e;
}
`
const Stylemaindiv = styled.div`
 
 grid-template-columns:auto auto auto auto;
 display:inline-grid;
 gap:30px;

 
@media(min-width:993px) and (max-width:1024px){
    grid-template-columns:auto auto auto auto;
 display:inline-grid;
 gap:30px;
}

`
const Responsive = () => {
  return (
 <>
 <center>
 <Stylemaindiv>
 <Stylediv>
 <Styleimge src="https://www.bing.com/th?id=OIP.OjNHJL6A-Lzw_jLJfFgtMwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" />
 <Stylep>NICE WHEATHER</Stylep>
 </Stylediv>
 <Stylediv>
 <Styleimge src="https://www.bing.com/th?id=OIP.SLZm1hecv0zdhrgLrH8N9QHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" />
 <Stylep>NICE WHEATHER</Stylep>
 </Stylediv>
 <Stylediv>
 <Styleimge src="https://th.bing.com/th/id/OIP.kvN6AmVoX8xO9nQ3BfDuEwHaEo?w=295&h=183&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
 <Stylep>NICE WHEATHER</Stylep>
 </Stylediv>
 </Stylemaindiv>
 </center>
 </>
  )
}

export default Responsive