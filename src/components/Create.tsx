import React, { useState, memo } from "react";
import { Modal, Input, Form, Row, Col, message } from "antd";
import { handleCreate } from "@/actions/user";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: (v: boolean) => void;
}

const Create = (props: Props) => {
  const { isModalOpen, setIsModalOpen } = props;
  const [form] = Form.useForm();
  const handleOk = async (values: any) => {
    const res = await handleCreate(values);
    if (res?.id) {
      handleCancel();
      message.success("Create succeed!");
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Add User"
        open={isModalOpen}
        onOk={() => form.submit()}
        onCancel={handleCancel}
      >
        <Form name="basic" layout="vertical" form={form} onFinish={handleOk}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default memo(Create);
