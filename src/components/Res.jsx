import React from 'react'
import girl from '../assets/ladki2.png'
import styled from 'styled-components'

const Stylediv = styled.div`
             
`
 const Styleimg = styled.img`
       width:100%; 
 
      @media(min-width:993px) and (max-width:1024px){
  
      }
`
 const Textdiv = styled.div`
 position:absolute;
 bottom:73%;
 left:53%;

@media(min-width:993px) and (max-width:1024px){
  position:absolute;
  bottom:85%;
  left:53%;
  
}

`
const Para = styled.p`
       font-family: Poppins;
       font-size:17px;
       font-weight:normal;
       letter-spacing:3px;
       color:black; 
       @media(min-width:993px) and (max-width:1024px){
        font-family: Poppins;
       font-size:17px;
       font-weight:normal;
       letter-spacing:3px;
       color:black; 
      }
`

const Bigtext = styled.div`
       position:absolute;
       bottom:60%;
       left:53%;
       @media(min-width:993px) and (max-width:1024px){
        position:absolute;
        bottom:72%;
        left:53%;
       }
       
      
`
const Text = styled.p`
    font-size:40px;
    color:sky-blue;
     
    @media(min-width:993px) and (max-width:1024px){
      font-size:40px;
      color:sky-blue;
    }
`

const Bigtext1 = styled.div`
position:absolute;
bottom:55%;
left:53%;

@media(min-width:993px) and (max-width:1024px){
  position:absolute;
  bottom:65%;
  left:53%;

}

`
const Bigtext2 = styled.p`
font-size:40px;
    color:sky-blue;

    @media(min-width:993px) and (max-width:1024px){

      font-size:40px;
      color:sky-blue;
    }
`

const Bigtext3 = styled.div`
position:absolute;
bottom:41%;
left:53%;

@media(min-width:993px) and (max-width:1024px){

  position:absolute;
bottom:54%;
left:53%;
}
`
const Bigtext4 = styled.p`
color:sky-blue;
font-size:18px;
font-family:Poppins;

@media(min-width:993px) and (max-width:1024px){

  color:sky-blue;
font-size:15px;
font-family:Poppins;
}

`
const Bigtext5 = styled.div`
position:absolute;
bottom:47%;
left:53%;

@media(min-width:993px) and (max-width:1024px){
  position:absolute;
  bottom:57%;
  left:53%;
}
`
const Bigtext6 = styled.p`
color:sky-blue;
font-size:18px;
font-family:Poppins;

@media(min-width:993px) and (max-width:1024px){
  color:sky-blue;
  font-size:15px;
  font-family:Poppins;
}
`
const Bigtext7 = styled.div`
position:absolute;
bottom:44%;
left:53%;

@media(min-width:993px) and (max-width:1024px){



  position:absolute;
bottom:52%;
left:53%;
}
`
const Bigtext8 = styled.p`
color:sky-blue;
font-size:18px;
font-family:Poppins;
@media(min-width:993px) and (max-width:1024px){
  color:sky-blue;
  font-size:15px;
  font-family:Poppins;
}

`

const Bigbuttons = styled.div`
position:absolute;
bottom:32%;
left:53%;

@media(min-width:993px) and (max-width:1024px){
  position:absolute;
  bottom:43%;
  left:53%;

}
`
const Bigbutton1s = styled.button`
    background-color:#00BEE3;;
    color:white;
    border-radius:20px;
    border:none;
    
    @media(min-width:993px) and (max-width:1024px){
      background-color:#00BEE3;;
      color:white;
      border-radius:20px;
    }
`
const Styledivmain = styled.div`
   margin-top:10vh;
`
const Res = () => {
  return (
   <>
   <Styledivmain>
       <Stylediv>

      <Styleimg src={girl} />
      </Stylediv>
      <Textdiv>
     
      <Para>
      ABOUT US
      </Para>
      </Textdiv>
      <Bigtext>
      <Text>
      Welcome to  Katon
      </Text>
      </Bigtext>
      <Bigtext1>
      <Bigtext2>
      Learning
      </Bigtext2>
      </Bigtext1>
      <Bigtext3>
      <Bigtext4>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  
      </Bigtext4>
      </Bigtext3>
      <Bigtext5>
      <Bigtext6>
      sed diam nonumy eirmon tempor invidunt ut labore et
      </Bigtext6>
      </Bigtext5>
      <Bigtext7>
      <Bigtext8>
      dolore magna aliquyam erat, sed diam voluptua.
      </Bigtext8>
      </Bigtext7>
      <Bigbuttons>
      <Bigbutton1s>
      Read more
      </Bigbutton1s>
      </Bigbuttons>
      </Styledivmain>
   </>
  )
}

export default Res