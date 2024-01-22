import "./CategoryItems.css";

export default function CategoryItems({
  title,
  children,
  description,
  subtitle,
}) {
  return (
    <section className="category">
      <div className="category-title">
        <div className="title-label">{title}</div>
        <h3 className="category-label">{subtitle}</h3>
        {/* <h4>{subtitle}</h4> */}
        <p>{description}</p>
      </div>
      {children}
    </section>
  );
}
