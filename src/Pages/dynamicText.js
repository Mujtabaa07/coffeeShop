import React, { useEffect } from "react";

const DynamicText = ({ text }) => {
  useEffect(() => {
    const textElement = document.getElementById("text");
    if (textElement) {
      textElement.textContent = text;
    }
  }, [text]);

  return (
    <div
      style={{
        fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
        fontWeight: 800,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        display: 'inline-block',
        borderRight: 'none', // ✅ No cursor border
        animation: 'typing 3s steps(30, end)',
      }}
    >
      <span id="text" />
      {/* Removed the blinking cursor */}
      <style>
        {`
          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }
        `}
      </style>
    </div>
  );
};

export default DynamicText;
