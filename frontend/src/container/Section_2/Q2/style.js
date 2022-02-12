import Styled from 'styled-components';

export const TableStyleWrapHeaderBlack = Styled.div`
    .ant-table-thead > tr > th {
        text-align: center !important;
        font-weight: bold;
        background-color: #E7E7FA !important;
        color: #2A2A85;
        padding: 8px !important;
        border: 1px solid #D2D2EE;
    }

    .ant-table-tbody > tr > td {
        padding: 5px 10px;
    }

    .ant-table-column-sorters {
        padding: 6px !important;
    }

    .error {
        // background-color: #f5222d;
        // color: #FFF !important;
    }

    .warning {
        // background-color: #FA8B0C;
        // background-color: #FFF77D;

        .text {
            color: #FFF !important;
        }
    }

    li {
        a {
            text-decoration: none;
        }
    }
    
    .ant-table-cell {
        a {
            color: #000 !important;
            text-decoration: underline;

            &:hover {
                text-decoration: none;
            }
        }
    }

    .text-confirm-po {
        font-size: 15px;
        padding-bottom: 5px;

        .label {
            font-weight: bold;
        }

        .number {
            color: #FF0606;
            font-weight: bold;
            padding: 0px 5px;
        }
    }

    .box-confirm-po {
        padding: 10px 0px 10px 10px;
    }

    .box-btn {
        padding-top: 10px;
    }
`;
