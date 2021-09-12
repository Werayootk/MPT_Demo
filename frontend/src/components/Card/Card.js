import React from "react";
import "./Card.css";
import "antd/dist/antd.css";
import { Collapse } from "antd";

const { Panel } = Collapse;

export default function Card(props) {
  const { id_2d, model_name, line_no, process_no, lot_no, job_reject, create_date } = props.item;

  return (
    <Collapse className="collapse">
      <Panel header={process_no}>
        <ul>
          <li>{id_2d}</li>
          <li>{model_name}</li>
          <li>{line_no}</li>
          <li>{lot_no}</li>
          <li>{job_reject}</li>
          <li>{create_date}</li>
        </ul>
      </Panel>
    </Collapse>
  );
}
