import React from "react";
import "./Card.scss";
import "antd/dist/antd.css";
import { Collapse } from "antd";
import moment from "moment";

const { Panel } = Collapse;

export default function Card(props) {
  const {
    id_2d,
    model_name,
    line_no,
    process_no,
    lot_no,
    job_reject,
    create_date,
  } = props.item;

  return (
    <Collapse className="card">
      <Panel className="card_header" header={process_no.replace("_", " ")}>
        <table className="card_table">
          <tr>
            <th>2D:</th>
            <td>{id_2d}</td>
          </tr>
          <tr>
            <th>Model name:</th>
            <td>{model_name.replace("_", " ")}</td>
          </tr>
          <tr>
            <th>Line:</th>
            <td>{line_no.replace("_", " ")}</td>
          </tr>
          <tr>
            <th>Lot no.:</th>
            <td>{lot_no.replace("_", " ")}</td>
          </tr>
          <tr>
            <th>Reject:</th>
            <td>
              {job_reject.map((item, index) => (
                <span> {item} </span>
              ))}
            </td>
          </tr>
          <tr>
            <th>Created Date:</th>
            <td>
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "long",
                day: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
              }).format(new Date(create_date))}
            </td>
          </tr>
        </table>
      </Panel>
    </Collapse>
  );
}
