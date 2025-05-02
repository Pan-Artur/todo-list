import styled from "styled-components";

export const StyledTodoEditor = styled.form`
  display: flex;
  gap: 10px;
  margin: 20px 0;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  input {
    flex: 1;
    padding: 10px 15px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
    transition: all 0.2s;

    &:focus {
      outline: none;
      border-color: #4dabf7;
      box-shadow: 0 0 0 3px rgba(77, 171, 247, 0.3);
    }
  }

  button {
    padding: 10px 20px;
    background-color: #228be6;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: #1c7ed6;
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;