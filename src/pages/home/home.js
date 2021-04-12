import React from 'react';
import { Form, Input, Button, Alert, Row, Col  } from 'antd';
import axios from 'axios';
import { connect } from "react-redux";
import {setIngredients, setAnalyzedResults} from '../../redux/actions/index';


class Home extends React.Component{
    state = {
        formattedIngrs: [],
        ingredientsText: '',
        loading: false,
        error: {},
        parsedIngredients: []
    }

    onFinish = (e) => {
        this.formatLines(e.ingredients)
        this.submitRequest()
    }

    extractValues = (array) => {
        array.forEach((ingr, index) => {
            const convertedIngr = ingr.text.split(" ")
            this.state.parsedIngredients.push({
                key: Math.random(),
                quantity: parseInt(convertedIngr[0]),
                unit: convertedIngr[1],
                food: convertedIngr[2],
                weight: ingr.data.totalWeight.toFixed(1),
                calories: ingr.data.calories.toFixed(1)
            })
        })
    }

    submitRequest = async () => {
        let requestArr = []
        this.setState({loading: true});
        const appId = process.env.REACT_APP_APP_ID;
        const appKey = process.env.REACT_APP_APP_KEY;

        const config = {
            headers:{
                'Content-Type': 'application/json',
            }
        }

        const ingredients = {
            ingr: this.state.formattedIngrs
        }
        

        this.state.formattedIngrs.forEach(ingr=>{

            requestArr.push(axios.get(`/nutrition-data?app_id=${appId}&app_key=${appKey}&ingr=${ingr}`)
            .then((res)=>{
                let ingrRequestedValues = []
                ingrRequestedValues.push({text: ingr, data: res.data})
                this.extractValues(ingrRequestedValues)
                this.props.setIngredients(this.state.parsedIngredients)
            })
            .catch(err=> console.log({...err}))
            )
        })
        requestArr.push(axios.post(`/nutrition-details?app_id=${appId}&app_key=${appKey}`, ingredients, config))
        axios.all(requestArr)
        .then(axios.spread((...res)=>{
            this.props.setAnalyzedResults(res[2].data)
            this.props.history.push('/summary')
        }))
        .catch(error => this.setState({error: error?.response?.data?.error}))
    }
    

    formatLines = (ingr) => {
      let formattedIngrs = ingr.split(/[\n]/);
      this.setState({formattedIngrs})
    }

    onChange = (e)=>{
        this.setState({ingredientsText: e.target.value})
    }

    render(){
    console.log(this.state.error)

        const { TextArea } = Input;
        const layout = {
            labelCol: {
              span: 8,
            },
            wrapperCol: {
              span: 16,
            }
          };
          const tailLayout = {
            wrapperCol: { offset: 8, span: 16 }
          };

        return(
            <div className="form-container">
                <Row justify="center" align="center" >
                    <Col xs={24} sm={24} md={20} lg={16}>
                            <h1>Anaylze Nutrition</h1>
                            <div>
                                <p>Enter an ingredient list, Use the following pattern "1 cup rice, 10 oz chickpeas", etc.</p>
                                <strong>Enter each ingredient on a new line.</strong>
                            </div>
                            <div className="form">
                                <Form
                                {...layout}
                                onFinish={this.onFinish}
                                >
                                    <Form.Item name="ingredients" style={{justifyContent:'center'}}>
                                        <TextArea
                                        placeholder="For example:
                                        1 cup rice
                                        10 oz chickpeas"
                                        autoSize={{ minRows: 8}}
                                        onChange={this.onChange}
                                        />
                                    </Form.Item>
                                    {this.state.error === "low_quality" ? 
                                        <Alert
                                        message="Error"
                                        description="Low quality ingredients words, please use the follow pattern: '1 cup rice'"
                                        type="error"
                                        showIcon
                                        closable
                                        />
                                    :
                                    null}

                                    <Form.Item {...tailLayout}>
                                        <Button type="primary" htmlType="submit" disabled={!this.state.ingredientsText}>
                                            Anaylze
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default connect(null, {setIngredients, setAnalyzedResults})(Home);