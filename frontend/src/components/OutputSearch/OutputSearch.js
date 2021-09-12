import React from 'react';
import './OutputSearch.css';
import { Spin } from "antd";
import { useQuery, gql } from "@apollo/client";
import Card from '../Card/Card';

export default function OutputSearch(props) {
    const { loading, error, data } = useQuery(gql`
    {
      dataBy2D(id_2d: props.val) {
        id_2d
        model_name
        line_no
        process_no
        lot_no
        job_reject
        create_date
      }
    }
  `);

  if (loading) return <Spin size="large" />;
  if (error) return <p>Error :(</p>; 

  return data.dataBy2D.map((data) => (
    <Card
    data={{
      id_2d: data.id_2d,
      model_name: data.model_name,
      line_no: data.line_no,
      process_no: data.process_no,
      lot_no: data.lot_no,
      job_reject: data.job_reject,
      create_date: data.create_date,
    }}
    />
  ));
}
