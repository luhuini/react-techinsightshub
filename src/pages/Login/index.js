import { Button, Card, Form, Input } from "antd";
import "./index.scss";
import evil from "@/assets/evil.jpg";
const Login = () => {
  return (
    <div>
      <Card>
        <img src={evil} alt="logo" />
        <Form>
          <Form.Item>
            <Input size="large" placeholder="plase enter phone number"></Input>
          </Form.Item>
          <Form.Item>
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
