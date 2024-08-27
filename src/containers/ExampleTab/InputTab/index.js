import InputCurrency from "src/components/Input/Currency";
import styles from "../../../styles/Home.module.less";
import { Col, Form, Input, Row} from "antd";

export default function InputTab() {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <p className={styles.description}>
                Input Example
                </p>

                <div className={styles.grid}>
                    <Row>
                        <Col md={30} xs={30} style={{marginRight: '20px'}}>
                            <Form.Item
                                label="Input Text 2"
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col md={30} xs={30} style={{marginRight: '20px'}}>
                            <Form.Item
                                label="Input Text 2"
                            >
                                <Input readOnly/>
                            </Form.Item>
                        </Col>
                        <Col md={30} xs={30} style={{marginRight: '20px'}}>
                            <Form.Item
                                label="Input Text 3"
                            >
                                <Input disabled/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={30} xs={30} style={{marginRight: '20px'}}>
                            <Form.Item
                                label="Currency Input 1"
                                name="currency_input_example_1"
                            >
                                <InputCurrency
                                placeholder="Input Currency"                   
                                />
                            </Form.Item>
                        </Col>
                        <Col md={30} xs={30} style={{marginRight: '20px'}}>
                            <Form.Item
                                label="Currency Input 2"
                                name="currency_input_example_2"
                            >
                                <InputCurrency
                                placeholder="Input Currency"                        
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}