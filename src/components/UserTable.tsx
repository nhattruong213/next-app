"use client";
import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { tree } from "next/dist/build/templates/app-page";
import Create from "./Create";

interface DataType {
  id: string | number;
  title: string;
  body: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    key: "email",
    dataIndex: "email",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Update</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

type PropType = {
  users: DataType[];
  meta: {
    current: number;
    pageSize: number;
    total: number;
  };
};

const UserTable = (prop: PropType) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { users, meta } = prop;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onChange = (pagination: any) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pagination.current);
    router.replace(`${pathname}?${params.toString()}`);
    setIsLoading(true)
  };

  useEffect(() => {
    if(users.length) {
      setIsLoading(false);
    }
  }, [users])

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'end', width: "100%", marginBottom: "10px"}}>
        <Button type="primary" onClick={() => setIsModalOpen(true)}>   
          Add
        </Button>
      </div>
      <Table
        loading={isLoading}
        columns={columns}
        rowKey={"id"}
        dataSource={users}
        pagination={{
          ...meta,
          showTotal: (total, range) => {
            return (
              <div>
                {" "}
                {range[0]}-{range[1]} trên {total} rows
              </div>
            );
          },
        }}
        onChange={onChange}
      />
      <Create isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default UserTable;
