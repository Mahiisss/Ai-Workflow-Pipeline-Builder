// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="toolbar">
            <div className="toolbar-title">Pipeline Node Palette</div>
            <div className="node-palette">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='math' label='Math' />
                <DraggableNode type='condition' label='Condition' />
                <DraggableNode type='database' label='Database' />
                <DraggableNode type='api' label='API' />
                <DraggableNode type='transform' label='Transform' />
            </div>
        </div>
    );
};
