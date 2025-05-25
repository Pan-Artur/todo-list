import styled from "styled-components";

export const StyledOptimizedSum = styled.div`
  width: 400px;
  margin: 0 auto 30px;
  background-color: #dff8e1;
  border: solid 3px #ff9a76;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    color: #333;
  }

  .sum-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
    font-size: 24px;
  }

  input {
    width: 60px;
    font-size: 20px;
    text-align: center;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .result {
    width: 60px;
    font-size: 20px;
    text-align: center;
    padding: 5px;
    border: 1px solid #ccc;
    background-color: white;
    border-radius: 4px;
  }
`;
