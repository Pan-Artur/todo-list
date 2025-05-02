import styled from "styled-components";

export const StyledInfo = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
  margin: 0;
  
  li {
    background: #f0f8ff; 
    padding: 12px 20px;
    margin-bottom: 10px;
    border-radius: 8px;
    color: #333; 
    font-weight: 500;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    
    & {
      background: #e6f7ff; 
      border-left: 3px solid #1890ff;
    }
    
    p {
      margin: 0;
      font-size: 16px;
    }
  }
`;