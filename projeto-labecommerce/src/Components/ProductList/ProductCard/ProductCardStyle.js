import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
border: 5px solid transparent;
width: 31%;
justify-content: space-between;
background-color: #fcfbfe;
border-radius: 15px;
padding: 6px;
`

export const ImageProduct = styled.img`
height: 75%;
width: 100%;
background: linear-gradient(white, white) padding-box,
              linear-gradient(to right, darkblue, darkorchid) border-box;
  border-radius: 20px;
  border: 4px solid transparent;
background-color: #fcfbfe;
opacity: 100%;

`

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
gap:8px;
width: 100%;
padding: 8px;
background-color: #fcfbfe;
background: linear-gradient(white, white) padding-box,
              linear-gradient(to right, darkblue, darkorchid) border-box;
  border-radius: 20px;
  border: 4px solid transparent;

`

export const NomeBotao = styled.div`
display: flex;
justify-content: space-evenly;
align-items: baseline;
`

export const AdicionarButton = styled.button`
/* margin: auto; */
background: linear-gradient(to right, darkblue, darkorchid ) padding-box,
              linear-gradient(white, white) border-box;
 color: white;
  border-radius: 20px;
  border: 2px transparent solid;
  width: 30%;
  height: 100%;
  margin: auto;
  cursor: pointer;
  opacity: 100%;
  
`