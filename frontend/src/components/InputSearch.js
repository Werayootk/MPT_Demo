import React, { Children } from "react";
import "antd/dist/antd.css";
import './InputSearch.css';
import { Input, Space } from "antd";
import CollapseDetail from './CollapseDetail';


export default function InputSearch(props) {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  return (
    <Space direction="vertical" className="InputSearch">
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
          />
          <CollapseDetail />
    </Space>
  );
}
