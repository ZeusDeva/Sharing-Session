import styles from "../../../styles/Home.module.css";
import { Col, DatePicker, Form, Row } from "antd";

export default function DateTab() {
    const {RangePicker} = DatePicker

    return(
        <div className={styles.container}>
            <div className={styles.main}>
                <p className={styles.description}>
                    Date Picker Example
                </p>

                <div className={styles.grid}>
                    <Row>
                        <Col md={30} xs={30} style={{marginRight: '20px'}}>
                            <Form.Item
                                label="Date Picker 1"
                                name="date_example_1"
                            >
                                <DatePicker
                                    //   disabled={!closeApp}
                                    placeholder="Sample Date Picker"
                                    //   disabledDate={disabledStartDate}
                                    //   onChange={onStartChange}
                                    //   value={startValue}
                                    showToday={false}
                                    format={'DD-MMM-YYYY'}
                                />					
                            </Form.Item>
                        </Col>
                        <Col md={30} xs={30} style={{marginRight: '20px'}}>
                            <Form.Item
                                label="Date Picker 2"
                                name="date_example_2"
                            >
                                <DatePicker
                                //   disabled={!closeApp}
                                placeholder="Sample Date Picker"
                                //   disabledDate={disabledStartDate}
                                //   onChange={onStartChange}
                                //   value={startValue}
                                showToday={false}
                                format={'DD-MM-YYYY'}
                                />	
                            </Form.Item>
                        </Col>
                        <Col md={30} xs={30} style={{marginRight: '20px'}}>
                            <Form.Item
                                label="Date Picker 3"
                                name="date_example_3"
                            >
                                <DatePicker
                                // disabled
                                placeholder="Sample Date Picker"
                                //   disabledDate={disabledStartDate}
                                //   onChange={onStartChange}
                                //   value={startValue}
                                showToday={false}
                                />	
                            </Form.Item>
                        </Col>
                        <Col md={30} xs={30} style={{marginRight: '20px'}}>
                            <Form.Item
                                label="Date Picker 4"
                                name="date_example_4"
                            >
                                <DatePicker
                                disabled
                                placeholder="Sample Date Picker"
                                //   disabledDate={disabledStartDate}
                                //   onChange={onStartChange}
                                //   value={startValue}
                                showToday={false}
                                />	
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={30} xs={30} style={{marginRight: '20px'}}>
                            <Form.Item
                                label="Date Range Picker"
                                name="date_range_picker_example_1"
                            >
                                <RangePicker/>	
                            </Form.Item>
                        </Col>
                    </Row>
                </div>
            </div>   
        </div> 
    )  
}