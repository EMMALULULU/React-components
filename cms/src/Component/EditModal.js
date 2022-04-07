import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Modal } from "antd";
import InputField from "./InputField";

export default function EditModal({
  isModalVisible,
  handleCancel,
  handleOk,
  columns,
  selectEntry,
}) {
  const [entryData, setEntryData] = useState({ ...selectEntry });

  const saveEditHandler = () => {
    handleOk(entryData, entryData.id);
  };

  return ReactDOM.createPortal(
    <Modal
      title="Basic Modal"
      visible={isModalVisible}
      onOk={saveEditHandler}
      onCancel={handleCancel}
    >
      <InputField
        columns={columns}
        entryData={entryData}
        // inputChangeHandler={inputChangeHandler}
        setEntryData={setEntryData}
        useFor={"edit"}
      />
    </Modal>,
    document.getElementById("modal-root")
  );
}
