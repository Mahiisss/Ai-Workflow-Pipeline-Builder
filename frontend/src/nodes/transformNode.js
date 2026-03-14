// TransformNode.js

import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const TransformNode = ({ id, data }) => {
  const fields = [
    {
      name: 'transformType',
      type: 'select',
      label: 'Transform',
      defaultValue: 'uppercase',
      options: [
        { value: 'uppercase', label: 'Uppercase' },
        { value: 'lowercase', label: 'Lowercase' },
        { value: 'trim', label: 'Trim Whitespace' },
        { value: 'reverse', label: 'Reverse String' },
        { value: 'custom', label: 'Custom Function' }
      ]
    },
    {
      name: 'customFunction',
      type: 'textarea',
      label: 'Custom Function (JavaScript)',
      defaultValue: 'return input.toUpperCase();',
      placeholder: 'Enter JS logic, e.g., return input.trim();',
      rows: 3
    }
  ];

  const handles = [
    {
      name: 'input',
      type: 'target',
      position: Position.Left
    },
    {
      name: 'output',
      type: 'source',
      position: Position.Right
    }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      nodeType="Transform"
      fields={fields}
      handles={handles}
      className="transform-node"
      style={{
        backgroundColor: '#fce4ec',
        minHeight: 130
      }}
    />
  );
};