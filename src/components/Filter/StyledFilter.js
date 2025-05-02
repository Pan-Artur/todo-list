import styled from "styled-components";

export const StyledFilter = styled.div`
  margin: 20px 0;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #495057;
  }

  input {
    width: 95%;
    padding: 10px 10px;
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
`;