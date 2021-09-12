import React from "react";
import "antd/dist/antd.css";
import { Collapse } from "antd";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

export default function CollapseDetail() {
  return (
    <Collapse defaultActiveKey={["1"]} onChange={callback} className="collapse">
      <Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
}
