import styled from "styled-components";

const TopSection=()=>{
  const handleInput=(e)=>{

console.log(e.target.value,"click")
  }
    return(
        <Header>
<Box>
<div>
<Image src="/logo.jpeg" alt="logo" />
  </div>
  <div>
<Input  onChange={handleInput} placeholder="Search for food...." type="text" />
  </div>
  </Box>
 <Lists>
      <Items>All</Items>
      <Items>Breakfast</Items>
      <Items>Lunch</Items>
      <Items>Dinner</Items>
      </Lists>
        </Header>
    )
}
export default TopSection;

const Header=styled.section`
height:100px;
max-width:100%;
background-color:gray;
padding:20px;
`

const Box = styled.div`
display:flex;
justify-content:space-between;
margin:0 auto`;

const Image=styled.img`
height:50px;
width:100px;
`;

const Lists=styled.div`
width:200px;
margin:0 auto;
display:flex;
list-style-type:none;
gap:5px;
`;

const Input=styled.input`
outline:0;
padding:5px;
`

const Items=styled.button`
border:1px solid black;
background-color:#FFA500;
padding:2px;
border-radius:5px;
cursor:pointer;

`