// Contact.tsx
"use client";

import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Contact.scss";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const onFinish = (values: any) => {
  console.log("Form Values:", values);
  // You can handle form submission here (e.g., send data to an API)
};

export default function Contact() {
  return (
    <section className="ContactPage">
      <Navbar />
      <section className="FormSection">
        <div className="ImageSection">
          <img src="/path-to-your-image.jpg" alt="Contact Us" />
        </div>
        <div className="ContactForm">
          <Form
            {...layout}
            name="contact-form"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "name"]}
              label="Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "lastname"]}
              label="Last name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[{ type: "email", required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item name={["user", "message"]} label="Message">
              <Input.TextArea />
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Send
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
      <Footer />
    </section>
  );
}
