import React, { useState } from "react";
import { Modal, Button } from "antd";
import InputField from "./InputField";
export default function AddNewModal({
  isModalVisible,
  columns,
  handleCancel,
  handleAdd,
}) {
  const [entryData, setEntryData] = useState({
    address: { street: "", suite: "", city: "", zipcode: "" },
    company: { name: "" },
    email: "",
    id: "",
    name: "",
    phone: "",
    username: "",
    website: "",
  });
  const addUserHandler = () => {
    handleAdd(entryData);
  };
  console.log(entryData);
  return (
    <Modal
      title="Add User Form"
      visible={isModalVisible}
      onOk={addUserHandler}
      onCancel={handleCancel}
    >
      <InputField
        columns={columns}
        entryData={entryData}
        setEntryData={setEntryData}
      />
    </Modal>
  );
}
