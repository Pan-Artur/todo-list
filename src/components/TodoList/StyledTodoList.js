import styled from "styled-components";

export const StyledTodoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  & > li {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    margin-bottom: 10px;
    background: #fff;
    border-radius: 10px;
    transition: all 0.3s ease;
    border-left: 4px solid #4caf50;

    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    input[type="checkbox"] {
      margin-right: 15px;
      width: 20px;
      height: 20px;
      accent-color: #4caf50;
      cursor: pointer;
    }

    p {
      flex: 1;
      margin: 0;
      color: #333;
    }

    button {
      background-color: rgb(247, 80, 68);
      color: white;
      border: none;
      padding: 6px 12px;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background-color: rgb(236, 56, 56);
      }
    }
  }
`;
