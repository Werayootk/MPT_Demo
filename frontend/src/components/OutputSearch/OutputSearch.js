import React from 'react';
import './OutputSearch.scss';
import { Spin } from "antd";
import gql from 'graphql-tag'; 
import { useQuery } from "@apollo/react-hooks";
import Card from '../Card/Card';
import ErrorImg from '../../assests/error-icon.jpg';
import WarnImg from '../../assests/warn-icon.jpg';

const GET_2D_DATA = gql`
  query dataBy2D($id_2d: String!) {
    dataBy2D(id_2d: $id_2d) {
        id_2d
        model_name
        line_no
        process_no
        lot_no
        job_reject
        create_date
    }
  }
`;

export default function OutputSearch(props) {
    const val_2D = props.val;
    const val_2D_Str = val_2D.toString();
    const { loading, error, data } = useQuery(GET_2D_DATA, {
        variables: {id_2d : val_2D_Str}
    });

  if (loading) return <p><Spin size="large" /></p>;
  if (error) return <p className="outputsearch_error"><img src={ErrorImg} alt="Error" width="50px" height="50px" /> Error :( </p>;
  if (data.dataBy2D.length === 0) return <p className="outputsearch_notfound"><img src={WarnImg} alt="Warning" width="50px" height="50px"/> Not found data.</p>;

  return data.dataBy2D.map((item) => (
    <Card
    item={{
      id_2d: item.id_2d,
      model_name: item.model_name,
      line_no: item.line_no,
      process_no: item.process_no,
      lot_no: item.lot_no,
      job_reject: item.job_reject,
      create_date: item.create_date,
    }}
    />
  ));
}
