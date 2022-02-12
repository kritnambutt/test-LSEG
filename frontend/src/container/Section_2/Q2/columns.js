import React from 'react';
import { Tag } from 'antd';
import { getRandomInt } from '../../../utils/index';

export const COLUMNS = [
    {
        title: 'Index',
        dataIndex: 'index',
        key: 'index',
        className: 'text-center',
        render: (category, record, index) => {
            return (
                <div>
                    {index}
                </div>
            )
        }
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        className: 'text-center',
        render: (category, record) => {
            let ran_num = getRandomInt(2);
            let color = ran_num === 0 ? 'geekblue' : 'green'

            return (
                <div>
                    <Tag color={color}>
                        {record.toUpperCase()}
                    </Tag>
                </div>
            )
        }
    },
];