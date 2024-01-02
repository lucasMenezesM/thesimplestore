import { useState } from "react";

export default function TextLimiter({ children, limit }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const limitedText = children?.split(" ").slice(0, limit).join(" ");

  const btnStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
  };

  return (
    <p>
      {isExpanded ? children : limitedText}{" "}
      <button style={btnStyle} onClick={() => setIsExpanded((curr) => !curr)}>
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </p>
  );
}
