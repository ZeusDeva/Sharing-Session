import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { signIn } from "next-auth/client"
import { useState } from "react";

const propTypes = {}
const defaultProps = {}

const Login = ({}) =>{
    const [errorAuth, setErrorAuth ] = useState(false)
    const [error, setError] = useState(false)

    const reloadPage = async () =>{
        if(!error){
            window.location.reload(false)
        }
    }

    const submit = async (values)=>{
        const { username, password} = values
        try {
            const response = await signIn("credentials", {
                username,
                password,
                redirect: false
            })

            if(response?.error == null){
                setErrorAuth(false)
                reloadPage();
            }

            if(!response.ok){
                setErrorAuth(true)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Form name="login" onFinish={submit}>
                {errorAuth ? <p style={{color:"red"}}>Login gagal</p> : ""}
                <div>
                    <h1>Login</h1>
                </div>
                <Form.Item
                name='username'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Username!',
                  },
                ]}>
                    <Input prefix={<UserOutlined/>} placeholder='Username'/>

                </Form.Item>              
                <Form.Item
                name='password'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}>
                    <Input.Password type="password" prefix={<LockOutlined/>} placeholder='Password'/>

                </Form.Item>
                <Button type="primary" block htmlType='submit'>
                    Login
                </Button>
            </Form>
            
        </div>
    )
}

Login.propTypes = propTypes;

Login.defaultProps = defaultProps

export default Login