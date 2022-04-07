import React from "react";
import { Input, Col, Row } from "antd";
export default function InputField({ columns, entryData, setEntryData }) {
  const inputChangeHandler = (e, filedType) => {
    const isChangeAddress = filedType.includes("address");
    const isChangeCompany = filedType.includes("company");

    if (isChangeAddress || isChangeCompany) {
      setEntryData((prevState) => {
        const fields = filedType.split(".");
        const mainField = fields[0]; // "address" || "company"
        const subField = fields[1];

        return {
          ...prevState,
          [mainField]: { ...prevState[mainField], [subField]: e.target.value },
        };
      });
    } else {
      const enteredData = { [filedType]: e.target.value };
      setEntryData((prevState) => {
        return { ...prevState, ...enteredData };
      });
    }
  };

  return columns.map((column) => {
    const fieldName = column.title.toLowerCase();

    const currentColumnData = entryData[fieldName];

    if (fieldName === "address") {
      return (
        <Input.Group
          size="middle"
          key={column.key}
          style={{ padding: "0.65rem" }}
        >
          <Row gutter={15}>
            {Object.keys(currentColumnData).map((currentSubField) => {
              if (currentSubField === "geo") {
                return;
              }
              return (
                <Col span={6} key={currentSubField}>
                  <Input
                    value={entryData.address[currentSubField]}
                    defaultValue={currentSubField}
                    placeholder={currentSubField}
                    onChange={(e) => {
                      inputChangeHandler(e, `address.${currentSubField}`);
                    }}
                  />
                </Col>
              );
            })}
          </Row>
        </Input.Group>
      );
    }

    if (fieldName === "company") {
      return (
        <div style={{ padding: "0.65rem" }} key={column.key}>
          <Input
            value={entryData.company.name}
            placeholder={column.title}
            defaultValue={currentColumnData.name}
            onChange={(e) => {
              inputChangeHandler(e, "company.name");
            }}
          ></Input>
        </div>
      );
    }

    return (
      <div style={{ padding: "0.65rem" }} key={column.key}>
        <Input
          value={entryData[fieldName]}
          placeholder={column.title}
          defaultValue={currentColumnData}
          onChange={(e) => {
            inputChangeHandler(e, fieldName);
          }}
        ></Input>
      </div>
    );
  });
}
