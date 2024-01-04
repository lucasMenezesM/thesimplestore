export default function Button({
  textColor = "white",
  bgColor = "black",
  width = "",
  children,
  className = "",
  onClick = "",
}) {
  const btnStyle = {
    width,
    padding: "3px 5px",
    color: textColor,
    backgroundColor: bgColor,
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "600",
    border: "none",
    // margin: "5px 0",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    transition: "all 0.4s",
    justifyContent: "center",

    //   &:hover {
    //     transform: scale(1.05);
    //   }
  };

  return (
    <button onClick={onClick} className={className} style={btnStyle}>
      {children}
    </button>
  );
}
