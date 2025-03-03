import styled from "styled-components";

const Card=({image,price,text,type})=>{
    return(
        <Cards >
  <Left>
<CardImage src={image} alt={"image"} />
</Left>
<Right>
<p><b>price</b>:{price}</p>
<p><b>des:</b>{text}</p>
<p><b>type:</b>{type}</p>
</Right>
</Cards>
    )
}
export default Card;

const Cards=styled.div`
height:160px;
width:290px;
background-color:gray;
display:flex;
padding:20px 10px;
justify-content:space-between;
`

const CardImage=styled.img`
border-radius:50%;
height:100px;
width:100px;
object-fit:cover;
`

const Left=styled.div`
display:flex;
align-items:left;
border:1px solid black;
`

const Right=styled.div`
font-size:15px;
padding:10px;
`