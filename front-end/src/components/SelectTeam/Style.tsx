import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px;
  @media (min-width: 300px) and (max-width: 350px) {
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
`;

export const SelectTeam = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  label {
    color: blue;
    border-bottom: 1px solid;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: blue;
  border: none;
  color: white;
  padding: 8px;
  border-radius: 5px;
`;
