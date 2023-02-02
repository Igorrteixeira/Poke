import styled from "styled-components";

export const Container = styled.section`
  background: #d7d4d4;
  width: 100%;
  height: 100vh;
`;
export const ContForm = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  form {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
export const ContSelect = styled.div`
  display: flex;
  gap: 8px;
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
