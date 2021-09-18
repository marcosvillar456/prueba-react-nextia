import styles from "./CardLocked.module.css";
export default function CardLocked({ objeto }) {
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: objeto.primary_color }}
    >
      <div className={styles.imgBx}>
        <img src={objeto.vector_full_path} alt={objeto.ally.name} />
      </div>
      <div className={styles.contextBx}>
        <button className={styles.buy}>Lo quiero</button>
      </div>
    </div>
  );
}
