import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import { Table, Row, Col, Button } from 'antd';
import TotalNutrition from './total/total';

const { Column} = Table;

const Summary = () => {

  const ingredients = useSelector(state => state.ingredients)
  const [showTotal, SetShowTotal] = useState(false)

  const onShowTotal = () => {
    SetShowTotal(!showTotal)
  }

    return(
        <>
          <Row justify="center" align="center">
            <Col xs={24} sm={24} md={20} lg={16}>
              <Table dataSource={ingredients} pagination={false}>
                  <Column title="Quantity" dataIndex="quantity" key="quantity" />
                  <Column title="Unit" dataIndex="unit" key="unit" />
                  <Column title="Food" dataIndex="food" key="food" />
                  <Column title="Calories" dataIndex="calories" key="calories" />
                  <Column title="Weight" dataIndex="weight" key="weight" />
              </Table>
            </Col>
          </Row>
          <Row justify="end" align="center">
            <Col xs={24} sm={24} md={20} lg={16}>
              <Button type="primary" onClick={onShowTotal}>
                  Show Total
              </Button>
            </Col>
          </Row>
          <Row justify="center" align="center">
            <Col xs={24} sm={24} md={20} lg={16}>
            {showTotal ? 
              <TotalNutrition/>
              :null
            }
            </Col>
          </Row>
        </>
    )
}


export default Summary;