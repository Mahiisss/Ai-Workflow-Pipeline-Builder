// MathNode.js

import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const MathNode = ({ id, data }) => {
  const fields = [
    {
      name: 'operation',
      type: 'select',
      label: 'Operation',
      defaultValue: 'add',
      options: [
        { value: 'add', label: 'Add (+)' },
        { value: 'subtract', label: 'Subtract (-)' },
        { value: 'multiply', label: 'Multiply (*)' },
        { value: 'divide', label: 'Divide (/)' }
      ]
    },
    {
      name: 'constant',
      type: 'text',
      label: 'Constant',
      defaultValue: '0',
      placeholder: 'Enter a number'
    }
  ];

  const handles = [
    {
      name: 'input1',
      type: 'target',
      position: Position.Left,
      style: { top: '25%' }
    },
    {
      name: 'input2',
      type: 'target',
      position: Position.Left,
      style: { top: '75%' }
    },
    {
      name: 'result',
      type: 'source',
      position: Position.Right
    }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      nodeType="Math"
      fields={fields}
      handles={handles}
      className="math-node"
      style={{
        backgroundColor: '#e3f2fd',
        minHeight: 130
      }}
    />
  );
};