import React, { useState, useMemo } from 'react';
import { Row, Col, Select, InputNumber } from 'antd';
import { ContainerWrapper } from './style';
import { isPrime, isFibonacci } from '../../../utils';

const { Option } = Select;

const OPTION_SELECT = {
    IS_PRIME: {
        value: 'isPrime',
        name: 'isPrime',
    },
    IS_FIBANACCI: {
        value: 'IsFibanacci',
        name: 'IsFibanacci'
    }
}

const ContainerQ1 = () => {
    const [value_num, setNumber] = useState(null);
    const [value_sel, setSelect] = useState(OPTION_SELECT.IS_PRIME.value);

    const onChangeNumber = (value) => {
        let valueUpdate = value;
        let isInt = Number.isInteger(value);

        // round it to the nearest integer
        if (!isInt) {
            let roundNumber = Math.round(value);
            valueUpdate = roundNumber;
        }

        setNumber(valueUpdate)
    }

    const onChangeSelect = (value) => {
        setSelect(value)
    }

    const resultCal = useMemo(() => {
        let result_return = false;

        if (value_num && value_sel) {
            if (value_sel === OPTION_SELECT.IS_PRIME.value) {
                let checkPrimeNum = isPrime(value_num);
                console.log("checkPrimeNum: " + checkPrimeNum)
                result_return = checkPrimeNum;
            }
     
            if (value_sel === OPTION_SELECT.IS_FIBANACCI.value) {
                let checkFibNum = isFibonacci(value_num);
                console.log("checkFibNum: " + checkFibNum)
                result_return = checkFibNum;
            }
        }

        console.log("resultCal: " + result_return)
        return result_return;
	}, [value_num, value_sel]);

    return (
        <ContainerWrapper>
            <h2>Question 1</h2>
            <div className='box'>
                <Row gutter={25}>
                    <Col flex="200px">
                        <InputNumber 
                            placeholder="Input number"
                            value={value_num}
                            onChange={onChangeNumber}
                        />
                    </Col>
                    <Col flex="auto">
                        <Select onChange={onChangeSelect} value={value_sel}>
                            {Object.values(OPTION_SELECT).map((elem, key) => {
                                return (
                                    <Option key={key} value={elem.value}>{elem.name}</Option>
                                )
                            })}
                        </Select>
                    </Col>
                    <Col flex="300px">
                        {resultCal.toString()}
                    </Col>
                </Row>
                {/* <div className='box-left'></div>
                <div className='box-right'></div> */}
            </div>
        </ContainerWrapper>
    )
}

export default ContainerQ1;