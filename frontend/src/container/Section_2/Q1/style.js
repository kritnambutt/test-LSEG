import Styled from 'styled-components';

export const ContainerWrapper = Styled.div`
    .box {
        position: relative;

        .box-left {
            position: absolute;
            left: 0px;
            top: 0px;
            width: 200px;
            height: 100px;
            background-color: red;
        }

        .box-right {
            position: absolute;
            right: 0px;
            top: 0px;
            width: 300px;
            height: 100px;
            background-color: green;
        }
    }
`;