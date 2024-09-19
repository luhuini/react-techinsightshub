import { Button, Card, Form, Input } from "antd";
import "./index.scss";
import logo from "@/assets/logo.png";
const Login = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <div className="login">
      <Card className="login-container">
        <img src={logo} alt="logo" className="login-logo" />
        {/* 设置在 Form 组件上的 validateTrigger 会为所有的表单项设置一个全局的校验触发时机 */}
        {/* 设置在 Form.Item 上的 validateTrigger 只对该具体表单项生效 */}
        <Form validateTrigger="onBlur" onFinish={onFinish}>
          <Form.Item
            name="number"
            // 多条校验逻辑，先校验第一条，通过以后依次往下
            rules={[
              { required: true, message: "please enter phone number" },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: "please enter correct phone number",
              },
            ]}
          >
            <Input size="large" placeholder="plase enter phone number"></Input>
          </Form.Item>
          <Form.Item
            name="code"
            rules={[{ required: true, message: "please enter code" }]}
          >
            <Input size="large" placeholder="plase enter auth code"></Input>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
