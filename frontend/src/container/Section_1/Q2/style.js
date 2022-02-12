import Styled from 'styled-components';

const SPACE_TOP = 10;
const SPACE_LEFT = 5;

export const ContainerWrapper = Styled.div`
  .parent {
    position: relative;
    /* try changing the width! */
    width: 200px;
    height: 100px;
    border: 2px solid black;
  }

  .star {
    position: absolute;
    /* Only allow to add content inside this block */
    left: calc((200px / 2) - ${SPACE_LEFT + 'px'});
    top: calc((100px / 2) - ${SPACE_TOP + 'px'});
    /* */
  }

  .box-left {
    position: absolute;
    background-color: red;
    width: 100px;
    height: 50px;
  }
`;