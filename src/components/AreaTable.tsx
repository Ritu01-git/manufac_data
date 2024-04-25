import React from 'react';
import { Table } from '@mantine/core';
import { getCropAverageData } from '../utils/DataProcessing';
import './style.css'

interface Props {
  data: any[];
}

export const AreaTable: React.FC<Props> = ({ data }) => {
  const avgData = getCropAverageData(data);

  return (
    <div>
      <h2>Average Yield and Cultivation Area by Crop</h2>
      <Table className="custom-table" striped>
        <thead>
          <tr>
            <th>Crop</th>
            <th>Average Yield (Kg/Ha)</th>
            <th>Average Cultivation Area (Ha)</th>
          </tr>
        </thead>
        <tbody>
          {avgData.map((item: any, index: number) => (
            <tr key={index}>
              <td>{item.crop}</td>
              <td>{item.avgYield.toFixed(3)}</td>
              <td>{item.avgArea.toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
