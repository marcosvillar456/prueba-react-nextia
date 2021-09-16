import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBenevit } from "../../Redux/Actions";
import Card from "../../components/Card/Card";
import styles from "./Home.module.css";
export default function Home() {
  const dispatch = useDispatch();
  const Benevits = useSelector((state) => state.Benevits);

  useEffect(() => {
    dispatch(getBenevit());
    // eslint-disable-next-line
  }, []);

  return Benevits[0] ? (
    <Fragment>
      <h1>Home</h1>
      <div className={styles.cards}>
        {Benevits.map((data, index) => (
          <Card objeto={data} key={index} />
        ))}
      </div>
    </Fragment>
  ) : (
    <h1>Loading...</h1>
  );
}
