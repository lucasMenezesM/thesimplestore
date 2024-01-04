import "./PresentationBox.css";
export default function PresentationBox({ title, description, imgUrl }) {
  return (
    <div className="page-description">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <img src={imgUrl} alt={`${title}'s banner`} />
    </div>
  );
}
