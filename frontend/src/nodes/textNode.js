// TextNode.js

import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [height, setHeight] = useState(100);

  const textareaRef = useRef(null);

  // Extract valid JS variable names inside {{ }}
  const extractVariables = (text) => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
      matches.push(match[1]);
    }

    return Array.from(new Set(matches));
  };

  // Update variables when text changes
  useEffect(() => {
    setVariables(extractVariables(currText));
  }, [currText]);

  // Auto-resize height
  useEffect(() => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;
    textarea.style.height = 'auto';

    const newHeight = Math.max(100, textarea.scrollHeight + 20);
    setHeight(newHeight);
  }, [currText]);

  const renderVariableHandles = () => {
    return variables.map((variable, index) => {
      const topPosition = 20 + index * 20;

      return (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{ top: `${topPosition}%` }}
          title={`Variable: ${variable}`}
        />
      );
    });
  };

  return (
    <div
      style={{
        width: 250,
        minHeight: height,
        border: '2px solid #e9ecef',
        borderRadius: 12,
        background: '#ffffff',
        padding: 12,
        position: 'relative',
        boxShadow: '0 4px 10px rgba(0,0,0,0.08)'
      }}
    >
      {renderVariableHandles()}

      <div style={{ marginBottom: 8 }}>
        <strong>Text</strong>
      </div>

      <textarea
        ref={textareaRef}
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        placeholder="Enter text with {{variables}}"
        style={{
          width: '100%',
          border: '1px solid #ddd',
          borderRadius: 6,
          padding: 6,
          fontSize: 13,
          resize: 'none',
          fontFamily: 'monospace'
        }}
      />

      {variables.length > 0 && (
        <div
          style={{
            fontSize: 11,
            color: '#666',
            marginTop: 6,
            borderTop: '1px solid #eee',
            paddingTop: 4
          }}
        >
          Variables: {variables.join(', ')}
        </div>
      )}

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{ top: '50%' }}
      />
    </div>
  );
};