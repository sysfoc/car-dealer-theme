import React, { useState, useEffect } from "react";

interface DescriptionTooltipProps {
  description: string;
  mousePosition: { x: number; y: number };
}

const ProductDescription: React.FC<DescriptionTooltipProps> = ({
  description,
  mousePosition,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const descriptionWidth = 200; // Adjust this width if needed
    const descriptionHeight = 40; // Adjust this height if needed

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let adjustedX = mousePosition.x + 12;
    let adjustedY = mousePosition.y + 12;

    // Adjust X position if the description is going off the right side
    if (mousePosition.x + descriptionWidth + 12 > screenWidth) {
      adjustedX = mousePosition.x - descriptionWidth - 12;
    }

    // Adjust Y position if the description is going off the bottom side
    if (mousePosition.y + descriptionHeight + 12 > screenHeight) {
      adjustedY = mousePosition.y - descriptionHeight - 12;
    }

    setPosition({ x: adjustedX, y: adjustedY });
  }, [mousePosition]);

  return (
    <div
      className="fixed text-gray-900 text-xs z-50 max-w-64 py-1 px-2"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        pointerEvents: "none",
        backgroundColor: "rgba(255, 255, 255, 0.5)", 
        transition: "opacity 0.2s ease-in-out",
      }}
    >
      {description}
    </div>
  );
};

export default ProductDescription;
