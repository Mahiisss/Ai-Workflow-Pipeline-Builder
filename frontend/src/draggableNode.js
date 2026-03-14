// DraggableNode.js

export const DraggableNode = ({ type, label }) => {

  const handleDragStart = (event) => {
    const payload = { nodeType: type };

    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(payload)
    );

    event.dataTransfer.effectAllowed = 'move';
    event.currentTarget.style.cursor = 'grabbing';
  };

  const handleDragEnd = (event) => {
    event.currentTarget.style.cursor = 'grab';
  };

  return (
    <div
      className={`node-item ${type}`}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <span>{label}</span>
    </div>
  );
};