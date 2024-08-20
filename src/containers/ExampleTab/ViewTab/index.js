import Table from "src/components/Table";
import styles from "../../../styles/Home.module.css";
import { Col, Form, Row, Button, Modal } from "antd";
import { useState } from "react";

export default function ViewTab() {
    const columns = [
		{
			title: "Column 1",
			dataIndex: "column_1",
			key: 1,
		},
		{
			title: "Column 2",
			dataIndex: "column_2",
			key: 2,
		},
		{
			title: "Column 3",
			dataIndex: "column_3",
			key: 3,
		},
		{
			title: "Column 4",
			dataIndex: "column_4",
			key: 4,
		},
		{
			title: "Column 5",
			dataIndex: "column_5",
			key: 5,
		},
		{
			title: "Column 6",
			dataIndex: "column_6",
			key: 6,
		},
	];

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleOk = () => {
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return(
        <div className={styles.container}>
            <div className={styles.main}>
                <p className={styles.description}>
                    View Example
                </p>

                <div className={styles.grid}>
                    <Row>
                        <Col md={30} xs={30} style={{marginRight: '20px'}}>
                            <Form.Item
                                label="Table"
                                name="table_example_1"
                            >
                                <Table
                                    scroll={{ x: 600 }}
                                    columns={columns}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={30} xs={30} style={{ marginRight: '20px' }}>
                            <Form.Item
                            label="Modal Example"
                            name="modal_example_1"
                            >
                            <Button
                                type="success"
                                onClick={showModal}
                                // loading={loadingSubmit || loading}
                                // disabled={submitButton}
                            >
                                Show Modal
                            </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </div>
            </div>

            <Modal title="Modal Example" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Modal Content</p>
            </Modal>   
        </div> 
    )  
}