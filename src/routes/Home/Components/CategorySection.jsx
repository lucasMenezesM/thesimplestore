export default function CategorySection({ title, children }) {
  return (
    <section className="category">
      <h4 className="category-label">{title}</h4>
      {children}
    </section>
  );
}
