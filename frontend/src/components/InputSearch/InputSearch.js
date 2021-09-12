import React from "react";
import "antd/dist/antd.css";
import "./InputSearch.css";
import { Input, Space } from "antd";

function OnSearch(value) {
  console.log(value);
}

export default function InputSearch(props) {
  const { Search } = Input;

  return (
    <Space direction="vertical" className="InputSearch">
      <Search
        placeholder="input search 2D"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={OnSearch}
      />
    </Space>
  );
}
