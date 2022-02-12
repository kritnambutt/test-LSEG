import React, { useState, useEffect, useMemo } from 'react';
import { Row, Col, Select, Input, Table } from 'antd';
import FeatherIcon from 'feather-icons-react';
import {
	ToTopOutlined,
    SearchOutlined,
} from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import { Cards } from '../../../components/cards/frame/cards-frame';
import Services from '../../../services';
import { COLUMNS } from './columns';
import { TableStyleWrapHeaderBlack } from './style'

const { Option } = Select;

const ContainerQ1 = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1199px)' });
    const [fetch_cat, setCategory] = useState([]);
    const [filter_cat, setFilterCategory] = useState([]);
    const [keyword, setKeywordSearch] = useState(null);

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await Services.getCategory();
            setCategory(response.data.categories);
            setFilterCategory(response.data.categories);
        }

        fetchData();
    }, []);

    // ----------------------- filter ----------------------------
    const onChangeKeywordSearch = e => {
        let value = e.target.value;
        setKeywordSearch(value);
        onFilterCatKeywordSearch(value);
    }

    const onFilterCatKeywordSearch = (value) => {
        var filter_array;

        if (value) {
            filter_array = fetch_cat.filter((elem) => {
                return (elem.toUpperCase()).includes(value.toUpperCase())
            }).sort((a, b) => {
                return a - b
            });
        } else {
            filter_array = fetch_cat;
        }

        setFilterCategory(filter_array)
    }

    return (
        <div>
            <h2>Question 2</h2>
            <div className='box'>
                <div className='ph-20'>
                    <span>Category: </span>
                    <span className='pl-10'>{filter_cat.length}</span>
                </div>
                <Row gutter={25} className="pt-20 ph-20">
                    <Col xxl={24} lg={24} md={24} xs={24}>
                        <Row gutter={25}>
                            <Col xs={isMobile ? 24 : 12}>
                                <Input.Group compact>
                                    <Input.Search
                                        placeholder="ค้นหา..."
                                        prefix={<SearchOutlined style={{ color: 'gray' }} />}
                                        style={{ 
                                            width: isMobile ? '100%' : '300px' 
                                        }}
                                        value={keyword}
                                        onChange={onChangeKeywordSearch}
                                        // onSearch={onSearch}
                                        enterButton={<FeatherIcon icon="search" size={14} className="icon-search" />}
                                        loading={!fetch_cat ? true : false}
                                    />
                                </Input.Group>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Cards headless>
                    <TableStyleWrapHeaderBlack className="table-responsive">
                        <Table
                            loading={!fetch_cat ? true : false}
                            bordered
                            dataSource={filter_cat ? filter_cat : []}
                            columns={COLUMNS}
                            scroll={{ x: window.innerWidth - 400 }} 
                            // pagination={false}
                        />
                    </TableStyleWrapHeaderBlack>
                </Cards>
            </div>
        </div>
    )
}

export default ContainerQ1;