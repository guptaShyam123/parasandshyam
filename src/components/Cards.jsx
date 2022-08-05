import React from 'react'
import styled from 'styled-components'
import reds from '../assets/red.png'
import girl from '../assets/32.png'
import boy from '../assets/35.png'


const Miandiv  = styled.div`
    position: absolute;  

    @media(min-width:993px) and (max-width:1024px){

        position: absolute;  
    }
    @media(min-width:1025px) and (max-width:1280px){
      position: absolute;  
    }

    @media(min-width:1281px) and (max-width:1370px){
      position: absolute;  
    }

    @media(min-width:1371px) and (max-width:1440px){
      position: absolute;  
    }

    @media(min-width:1441px) and (max-width:1540px){
      position: absolute;  
    }
    @media(min-width:1541px) and (max-width:1640px){
      position: absolute;  
    }
   
`
const Image = styled.img`
        height:30%;
        width:40%;

        @media(min-width:993px) and (max-width:1024px){
            height:30%;
            width:40%;
        }
        @media(min-width:1025px) and (max-width:1280px){
          height:30%;
          width:40%;
        }
        @media(min-width:1281px) and (max-width:1370px){
          height:30%;
          width:40%;
        }

`
const Bifdiv = styled.div`

  margin-top:10vh;
  margin-left:20vh;

  @media(min-width:993px) and (max-width:1024px){
    margin-top:10vh;
    margin-left:20vh;
  }
  @media(min-width:1025px) and (max-width:1280px){
    margin-top:10vh;
    margin-left:20vh;
  }
  @media(min-width:1281px) and (max-width:1370px){
    margin-top:10vh;
    margin-left:20vh;
  }
`

const Secimg    = styled.div`
  position: absolute;
  top:11%;
  left:10%;
  @media(min-width:993px) and (max-width:1024px){
    position: absolute;
    top:11%;
    left:12%;
  }
  @media(min-width:1025px) and (max-width:1280px){
    position: absolute;
    top:11%;
    left:13%;
  }

  @media(min-width:1281px) and (max-width:1370px){
    position: absolute;
    top:11%;
    left:13%;
  }

`
const Girlimg = styled.img`
       height:33%;
       width:40%   ;
       background-position:cover;

       @media(min-width:993px) and (max-width:1024px){
        height:33%;
        width:40%   ;
        background-position:cover;
 
       }
       @media(min-width:1025px) and (max-width:1280px){
        height:33%;
        width:40%   ;
        background-position:cover;
      }
`

const Thirdiv = styled.div`
   position: absolute;
   left:22%;
   top:25%;
   @media(min-width:993px) and (max-width:1024px){
    position: absolute;
    left:30%;
    top:27%;
   }
   @media(min-width:1025px) and (max-width:1280px){
    position: absolute;
    left:30%;
    top:27%;
  }

`
const Boyimg = styled.img`
      height:45%;
      width:45%;
      background-position:cover;

      @media(min-width:993px) and (max-width:1024px){
        height:45%;
        width:45%;
        background-position:cover;
      }
      @media(min-width:1025px) and (max-width:1280px){
        height:45%;
        width:45%;
        background-position:cover;
      }
`
const Biggestdiv = styled.div`
   display:flex;
   @media(min-width:993px) and (max-width:1024px){
    display:flex;
}
@media(min-width:1025px) and (max-width:1280px){
  display:flex;
}

`
const Cards = () => {
  return (
    <>
    <center>
    <Biggestdiv>
    <Bifdiv>
     <Miandiv>
         <Image src={reds} />

     </Miandiv>
     <Secimg>
    <Girlimg src={girl} />
     </Secimg>
     <Thirdiv>
     <Boyimg src={boy} />
     </Thirdiv>

     </Bifdiv>

    
     </Biggestdiv>
     </center>
    </>

  )
}

export default Cards