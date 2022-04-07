import React from "react";
import { Table, Space, Button } from "antd";

export default function UsersTable({
  dataSource,
  columns,
  onShowModal,
  onSelect,
  onDelete,
}) {
  const onEdit = (record) => {
    onSelect(record);
    onShowModal("edit");
  };
  const action = {
    title: "Action",
    key: "action" + Math.random(),
    width: 180,
    fixed: "right",

    render: (record) => {
      return (
        <Space size="small">
          <Button
            type="primary"
            onClick={() => {
              onEdit(record);
            }}
          >
            Edit
          </Button>
          <Button
            type="primary"
            onClick={() => {
              onDelete(record);
            }}
          >
            Delete
          </Button>
        </Space>
      );
    },
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "2rem auto",
        border: "1px solid #bbb",
      }}
    >
      <Table
        columns={[...columns, action]}
        dataSource={dataSource}
        scroll={{ x: 1400 }}
        rowKey={(record) => record.id}
      />
    </div>
  );
}
