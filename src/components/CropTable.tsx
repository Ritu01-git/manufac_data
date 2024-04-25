import React from 'react';
import { Table } from '@mantine/core';
import { getCropMaxMinData } from '../utils/DataProcessing';
import './style.css'


interface Props {
  data: any[];
}

export const CropTable: React.FC<Props> = ({ data }) => {
  const maxMinData = getCropMaxMinData(data);

  return (
    <div>
      <h2>Maximum and Minimum Crop Production by Year</h2>
      <Table className="custom-table" striped>
        <thead>
          <tr>
            <th>Year</th>
            <th>Crop with Maximum Production</th>
            <th>Crop with Minimum Production</th>
          </tr>
        </thead>
        <tbody>
          {maxMinData.map((item: any, index: number) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{item.maxCrop}</td>
              <td>{item.minCrop}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
