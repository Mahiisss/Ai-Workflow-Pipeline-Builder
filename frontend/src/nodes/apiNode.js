// ApiNode.jsx

import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const ApiNode = ({ id, data }) => {
  const fields = [
    {
      name: 'url',
      type: 'text',
      label: 'API URL:',
      defaultValue: 'https://api.example.com/endpoint',
      placeholder: 'Enter API endpoint URL'
    },
    {
      name: 'method',
      type: 'select',
      label: 'Method:',
      defaultValue: 'GET',
      options: [
        { value: 'GET', label: 'GET' },
        { value: 'POST', label: 'POST' },
        { value: 'PUT', label: 'PUT' },
        { value: 'DELETE', label: 'DELETE' }
      ]
    },
    {
      name: 'headers',
      type: 'text',
      label: 'Headers (JSON):',
      defaultValue: '{"Content-Type": "application/json"}',
      placeholder: 'Enter headers as JSON'
    }
  ];

  const handles = [
    {
      name: 'request_body',
      type: 'target',
      position: Position.Left,
      style: { top: '30%' }
    },
    {
      name: 'auth',
      type: 'target',
      position: Position.Left,
      style: { top: '70%' }
    },
    {
      name: 'response',
      type: 'source',
      position: Position.Right
    }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      nodeType="API"
      fields={fields}
      handles={handles}
      className="api-node"
      style={{
        backgroundColor: '#e8f5e8',
        width: 280,
        minHeight: 140
      }}
    />
  );
};