
import React, { useState, useEffect } from 'react';

const CursorGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (opacity === 0) setOpacity(1);
    };

    const handleMouseLeave = () => setOpacity(0);
    const handleMouseEnter = () => setOpacity(1);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [opacity]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[100] transition-opacity duration-500"
      style={{ opacity }}
    >
      <div
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, rgba(56, 189, 248, 0.03) 45%, transparent 75%)',
          filter: 'blur(40px)',
        }}
      />
    </div>
  );
};

export default CursorGlow;
