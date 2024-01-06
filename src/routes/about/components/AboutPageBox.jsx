import "./AboutPageBox.css";
export default function AboutPageBox({ title, description, imgUrl }) {
  return (
    <div className="about-page__box">
      <img src={imgUrl} alt="about us" />

      <div className="about-page__box-text">
        <h3>{title}</h3>

        <p>{description}</p>
      </div>
    </div>
  );
}
