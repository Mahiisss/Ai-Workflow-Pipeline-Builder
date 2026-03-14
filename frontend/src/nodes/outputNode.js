// OutputNode.js

import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const fields = [
    {
      name: 'outputName',
      type: 'text',
      label: 'Name',
      defaultValue: id.replace('customOutput-', 'output_')
    },
    {
      name: 'outputType',
      type: 'select',
      label: 'Type',
      defaultValue: 'Text',
      options: [
        { value: 'Text', label: 'Text' },
        { value: 'File', label: 'File' }
      ]
    }
  ];

  const handles = [
    {
      name: 'value',
      type: 'target',
      position: Position.Left
    }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      nodeType="Output"
      fields={fields}
      handles={handles}
      className="output-node"
      style={{
        backgroundColor: '#fce4ec'
      }}
    />
  );
};