"use client";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Link from "next/link";

const items: MenuProps["items"] = [
  {
    label: <Link href="/">Home</Link>,
    key: "home",
    icon: <MailOutlined />,
  },
  {
    label: <Link href="/users">User</Link>,
    key: "users",
    icon: <MailOutlined />,
  },
  {
    label: <Link href="/comments">Comments</Link>,
    key: "comments",
    icon: <SettingOutlined />,
  },
];

const MenuHeader: React.FC = () => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default MenuHeader;
