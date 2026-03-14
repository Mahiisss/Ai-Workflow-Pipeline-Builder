// submit.js

import { useStore } from './store';
import { shallow } from 'zustand/shallow';

export const SubmitButton = () => {
  const { nodes, edges } = useStore(
    (state) => ({
      nodes: state.nodes,
      edges: state.edges,
    }),
    shallow
  );

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        'http://localhost:8000/pipelines/parse',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nodes, edges }),
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = await response.json();

      const message = `
Pipeline Analysis:
• Number of Nodes: ${result.num_nodes}
• Number of Edges: ${result.num_edges}
• Is Directed Acyclic Graph: ${result.is_dag ? 'Yes ✓' : 'No ✗'}
      `;

      alert(message.trim());
    } catch (error) {
      alert(
        `Failed to submit pipeline.\n\n${error.message}\n\nMake sure the backend is running on localhost:8000`
      );
    }
  };

  return (
    <div className="submit-container">
      <button
        className="submit-button"
        onClick={handleSubmit}
      >
        Submit Pipeline
      </button>
    </div>
  );
};