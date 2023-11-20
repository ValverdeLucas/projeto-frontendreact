import styled from "styled-components";

export const ItemsContainer = styled.div`
display: flex;
flex-direction: column;
gap:8px;
`

export const ItemsCart = styled.div`
display: flex;
flex-direction: row;
gap:8px;
justify-content: flex-start;
width: 100%;
`

export const nomeItems = styled.li`
`
export const RemoverItem = styled.button`
background: linear-gradient(to right, darkblue, darkorchid ) padding-box,
              linear-gradient(white, white) border-box;
              color: white;
  border-radius: 20px;
  border: 3px solid transparent;
  width: 25%;
  height: 12%;
  cursor: pointer;
`
