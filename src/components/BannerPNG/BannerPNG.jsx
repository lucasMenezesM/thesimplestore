import "./BannerPNG.css";

export default function BannerPNG({
  title,
  description,
  imgUrl,
  reverse = false,
}) {
  if (reverse)
    return (
      <div className="banner-products">
        <img src={imgUrl} alt="about banner" />
        <div className="text-banner-products">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    );

  return (
    <div className="banner-products">
      <div className="text-banner-products">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <img src={imgUrl} alt="about banner" />
    </div>
  );
}
