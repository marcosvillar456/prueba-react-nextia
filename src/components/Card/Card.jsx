export default function Card({ objeto }) {
  return (
    <div
      style={{
        border: "1px solid",
        margin: "2rem",
        width: "300px",
        height: "300px",
      }}
    >
      <div style={{ backgroundColor: objeto.primary_color }}>
        <h1>{objeto.name}</h1>
      </div>
      <div>
        <h4>{objeto.benevit_count}</h4>
      </div>
    </div>
  );
}
