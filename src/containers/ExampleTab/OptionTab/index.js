import styles from "../../../styles/Home.module.less";
import { Row, Col, Form, Button, Checkbox as CheckControlled, Radio, Select } from "antd";
import style from './style.module.less';
import Checkbox from "src/components/Checkbox";
import { useState } from "react";

export default function OptionTab() {
    const [normalCheckbox, setNormalCheckbox] = useState("")
    const [disableCheckbox, setDisableCheckbox] = useState("")
    const [checked, setChecked] = useState(true);
    const [disabled, setDisabled] = useState(false);

    const normalValueCheckbox = (e) => {
        setNormalCheckbox(e)
    }


    const disableValueCheckbox = (e) => {
        setDisableCheckbox(e)
    }


    const toggleChecked = () => {
        setChecked(prevChecked => !prevChecked);
    };


    const toggleDisabled = () => {
        setDisabled(prevDisabled => !prevDisabled);
    };

    return(
        <div className={styles.container}>
            <div className={styles.main}>
                <p className={styles.description}>
                    Option Example
                </p>

                <div className={styles.grid}>
                    <Row>
                        <Col md={30} xs={30} style={{marginRight: '20px'}}>
                            <Form.Item
                                label="Radio Button 1"
                                name="radio_example_1"
                            >
                                <Radio.Group>
                                    <Radio
                                            value={'YA'}
                                    >
                                            <span>
                                                Ya
                                            </span>
                                    </Radio>
                                    <Radio
                                            value={'TIDAK'}
                                        >
                                            <span>
                                                Tidak
                                            </span>
                                    </Radio>
                                </Radio.Group>			
                        </Form.Item>
                        </Col>
                        <Col md={30} xs={30} style={{marginRight: '20px'}}>
                            <Form.Item
                                label="Radio Button 2"
                                name="radio_example_2"
                            >
                                <Radio.Group>
                                    <Radio
                                            value={'YA'}
                                    >
                                            <span>
                                                Ya
                                            </span>
                                    </Radio>
                                    <Radio
                                            value={'TIDAK'}
                                        >
                                            <span>
                                                Tidak
                                            </span>
                                    </Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col md={30} xs={30} style={{marginRight: '20px'}}>
                            <Form.Item
                                label="Radio Button 3"
                                name="radio_example_3"
                            >
                            <Radio.Group disabled defaultValue={'YA'}>
                                <Radio
                                        value={'YA'}
                                >
                                        <span>
                                            Ya
                                        </span>
                                </Radio>
                                <Radio
                                        value={'TIDAK'}
                                    >
                                        <span>
                                            Tidak
                                        </span>
                                </Radio>
                            </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col md={30} xs={30} style={{marginRight: '20px'}}>
                            <Form.Item
                                label="Radio Button 4"
                                name="radio_example_4"
                            >
                            <Radio.Group disabled defaultValue={'TIDAK'}>
                                <Radio
                                        value={'YA'}
                                >
                                        <span>
                                            Yes
                                        </span>
                                </Radio>
                                <Radio
                                        value={'TIDAK'}
                                    >
                                        <span>
                                            No
                                        </span>
                                </Radio>
                            </Radio.Group>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={30} xs={30} style={{marginRight: '20px'}}>
                            <Form.Item
                                label="Drop Down 1"
                                name="drop_down_example_2"
                            >
                                <Select placeholder="dropdown menu 1"/>
                            </Form.Item>
                        </Col>
                        <Col md={30} xs={30} style={{marginRight: '20px'}}>
                            <Form.Item
                                label="Drop Down 2"
                                name="drop_down_example_3"
                            >
                                <Select disabled placeholder="dropdown menu 2"/>
                            </Form.Item>
                        </Col>
                        <Col md={30} xs={30} style={{marginRight: '20px'}}>
                            <Form.Item
                                label="Drop Down 3"
                                name="drop_down_example_4"
                            >
                                <Select disabled placeholder="dropdown menu 3"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={30} xs={30}>
                            <h1 style={{ fontSize: "16px", marginBottom: "10px", fontWeight: "bold" }}>Normal Checkbox</h1>
                            <Checkbox onChange={normalValueCheckbox} />
                            <p className={style.selected}>You selected: {normalCheckbox}</p>
                        </Col>


                        <hr />


                        <Col md={30} xs={30} style={{ marginTop: "15px"}}>
                            <h1 style={{ fontSize: "16px", marginBottom: "10px", fontWeight: "bold" }}>Disable Checkbox</h1>
                            <Checkbox onChange={disableValueCheckbox} isDisable={true} />
                            <p className={style.selected}>You selected: {disableCheckbox}</p>
                        </Col>


                        <hr />


                        <Col md={30} xs={30} style={{ marginTop: "15px"}}>
                            <h1 style={{ fontSize: "16px", marginBottom: "10px", fontWeight: "bold" }}>Controlled Checkbox</h1>
                            <CheckControlled value="controlled" checked={checked} disabled={disabled} className={styles.checkBox}>Control this checkbox with button below</CheckControlled>


                            <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
                                <Col style={{ marginRight: "10px" }}>
                                <Button type="primary" onClick={toggleChecked}>
                                    {!checked ? 'Check' : 'Uncheck'}
                                </Button>
                                </Col>
                                <Col>
                                <Button type="primary" onClick={toggleDisabled}>
                                    {!disabled ? 'Disable' : 'Enable'}
                                </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>   
        </div> 
    )  
}