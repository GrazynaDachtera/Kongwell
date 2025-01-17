"use client";

import React from "react";
import { Button, Form, Input } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Contact.scss";

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
};

export default function Contact() {
  return (
    <section className="ContactPage">
      <Navbar />
      <section className="FormSection">
        <div className="ContactTitle">
          <h2>Contact Us</h2>
          <p>
            Do you want to get in touch? Give us a call or write us an email:
          </p>
          <div className="ContactForm">
            <Form
              layout="vertical"
              name="contact-form"
              onFinish={onFinish}
              validateMessages={validateMessages}
              className="ant-form-custom"
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

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Send
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
