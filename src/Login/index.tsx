import { Button, Form, Input } from 'antd'

export default function Login() {
  return (
    <Form layout="vertical" style={{ maxWidth: 400, margin: '0 auto' }}>
      <Form.Item label="Username" name="username">
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input.Password />
      </Form.Item>
      <Button type="primary" htmlType="submit" block>
        Login
      </Button>

    </Form>
  )
}
