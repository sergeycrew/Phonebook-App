import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Name = styled.p`
  font-size: 25px;
  margin: 0px 30px;
  font-family: 'Julius Sans One', sans-serif;
  font-weight: 400;
  color: #205295;
`;
export const Button = styled.button`
  text-decoration: none;
  font-size: 25px;
  font-family: 'Julius Sans One', sans-serif;
  font-weight: 400;
  color: #2196f3;
  align-items: center;
  border-radius: 12px;
  box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 1rem 1.2rem;
  text-align: center;
  transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
  white-space: nowrap;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    box-shadow: #205295 0 0 0 1.5px, transparent 0 0 0 0;
  }
`;

//border-bottom: 1.5px solid #2196f3;
