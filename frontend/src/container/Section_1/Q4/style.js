import Styled from 'styled-components';

export const ContainerWrapper = Styled.div`
  #answerBox {
    display: flex;
    align-content: center;
    justify-content: center;
    border: 3px dotted black;
    max-width: 300px;
    padding: .2em;
    margin-bottom: 20px;
  }
  
  #colorPicker {
    display: grid;
    max-width: 60%;
  }
  
  #colorPicker button {
    display: inline-block;
    max-width: 150px;
    cursor: pointer;
  }
`;