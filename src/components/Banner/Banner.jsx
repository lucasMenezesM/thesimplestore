export default function Banner({
  title,
  imgUrl,
  subTitle = "",
  color = "white",
}) {
  const styleBanner = {
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const titleStyle = {
    textShadow: "0 0 10px black",
    color,
    fontSize: "75px",
  };

  const subTitleStyle = {
    textShadow: "0 0 10px black",
    color,
    fontSize: "30px",
    marginTop: "15px",
  };
  return (
    <div style={styleBanner} className="banner">
      <h1 style={titleStyle}> {title}</h1>
      {subTitle && <h2 style={subTitleStyle}>{subTitle}</h2>}
    </div>
  );
}
