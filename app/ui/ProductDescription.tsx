import React, { useState, useEffect } from "react";

interface DescriptionTooltipProps {
  description: string;
  mousePosition: { x: number; y: number };
  isVisible: boolean;
}

const ProductDescription: React.FC<DescriptionTooltipProps> = ({
  description,
  mousePosition,
  isVisible,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isVisible) {
      setPosition({ x: mousePosition.x + 10 , y: mousePosition.y + 5 });
    }
  }, [isVisible, mousePosition]); 

  if (!isVisible) return null; 

  return (
    <div
      className="fixed text-gray-800 text-[10px] z-50 max-w-64 py-1 px-2"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        pointerEvents: "none",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        transition: "opacity 0.2s ease-in-out",
      }}
    >
      {description}
    </div>
  );
};

export default ProductDescription;
