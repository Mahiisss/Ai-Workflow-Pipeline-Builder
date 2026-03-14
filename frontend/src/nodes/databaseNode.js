// DatabaseNode.js

import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const DatabaseNode = ({ id, data }) => {
  const fields = [
    {
      name: 'query',
      type: 'textarea',
      label: 'SQL Query',
      defaultValue: 'SELECT * FROM table;',
      placeholder: 'Enter your SQL query',
      rows: 4
    },
    {
      name: 'connection',
      type: 'select',
      label: 'Connection',
      defaultValue: 'postgres',
      options: [
        { value: 'postgres', label: 'PostgreSQL' },
        { value: 'mysql', label: 'MySQL' },
        { value: 'sqlite', label: 'SQLite' },
        { value: 'mongodb', label: 'MongoDB' }
      ]
    }
  ];

  const handles = [
    {
      name: 'query_params',
      type: 'target',
      position: Position.Left,
      style: { top: '30%' }
    },
    {
      name: 'results',
      type: 'source',
      position: Position.Right
    }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      nodeType="Database"
      fields={fields}
      handles={handles}
      className="database-node"
      style={{
        backgroundColor: '#f3e5f5',
        width: 250,
        minHeight: 150
      }}
    />
  );
};