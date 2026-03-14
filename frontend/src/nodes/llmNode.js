// LLMNode.js

import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  const handles = [
    {
      name: 'system',
      type: 'target',
      position: Position.Left,
      style: { top: '33%' }
    },
    {
      name: 'prompt',
      type: 'target',
      position: Position.Left,
      style: { top: '66%' }
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
      nodeType="LLM"
      handles={handles}
      className="llm-node"
      style={{
        backgroundColor: '#ede7f6',
        minHeight: 120
      }}
    >
      <div className="node-description">
        <span>Large Language Model</span>
      </div>
    </BaseNode>
  );
};