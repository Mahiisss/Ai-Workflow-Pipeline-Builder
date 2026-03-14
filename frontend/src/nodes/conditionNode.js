// ConditionNode.js

import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const ConditionNode = ({ id, data }) => {
  const fields = [
    {
      name: 'condition',
      type: 'select',
      label: 'Condition',
      defaultValue: 'equals',
      options: [
        { value: 'equals', label: 'Equals (==)' },
        { value: 'not_equals', label: 'Not Equals (!=)' },
        { value: 'greater', label: 'Greater Than (>)' },
        { value: 'less', label: 'Less Than (<)' },
        { value: 'contains', label: 'Contains' }
      ]
    },
    {
      name: 'compareValue',
      type: 'text',
      label: 'Compare Value',
      defaultValue: '',
      placeholder: 'Value to compare against'
    }
  ];

  const handles = [
    {
      name: 'input',
      type: 'target',
      position: Position.Left
    },
    {
      name: 'true',
      type: 'source',
      position: Position.Right,
      style: { top: '30%' }
    },
    {
      name: 'false',
      type: 'source',
      position: Position.Right,
      style: { top: '70%' }
    }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      nodeType="Condition"
      fields={fields}
      handles={handles}
      className="condition-node"
      style={{
        backgroundColor: '#fff3e0',
        minHeight: 120
      }}
    />
  );
};