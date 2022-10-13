import styled from "styled-components";

export const DetailsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  img {
    width: 40%;
  }
   @media all and (max-width:500px) {
    img {
      width: 100%;
      margin-right:4rem;
    }
  }
`;

export const ProductInfo = styled.div`
  width: 40%;
  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  @media all and (max-width:500px) {
     font-size: 1rem;
     font-weight: bold;
  }

`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;
  @media all and (max-width:500px) {
     font-weight: bold;
  }


  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
  }
  p {
    width: 1rem;
    text-align: center;
  }
  span {
    color: var(--secondary);
  }

  svg {
    color: #494949;
  }
`;

export const Buy = styled.button`
  width: 100%;
  background: var(--primary);
  color: white;
  font-weight: 500;
`;
