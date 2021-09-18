import styles from "./CardUnlocked.module.css";
export default function CardUnlocked({ objeto }) {
  return (
    <div className={styles.card}>
      <div
        className={styles.container}
        style={{ backgroundColor: objeto.primary_color }}
      >
        <div className={styles.name}>
          <span>{objeto.ally.name}</span>
        </div>
        <div className={styles.container_img}>
          <img src={objeto.ally.mini_logo_full_path} alt={objeto.ally.name} />
        </div>
      </div>

      <div>
        <h4>{objeto.ally.description}</h4>
      </div>
    </div>
  );
}
