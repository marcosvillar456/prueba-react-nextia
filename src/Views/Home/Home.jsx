import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { getWallets, Listas } from "../../Redux/Actions";
import CardUnlocked from "../../components/Card/Unlocked/CardUnlocked";
import CardLocked from "../../components/Card/Locked/CardLocked";
import Loading from "../../components/Loading/Loading";
import styles from "./Home.module.css";
export default function Home() {
  const dispatch = useDispatch();
  const history = useHistory();

  const Token = useSelector((state) => state.token);

  const Locked = useSelector((state) => state.Locked);
  const Unlocked = useSelector((state) => state.Unlocked);

  useEffect(() => {
    dispatch(getWallets());

    dispatch(Listas(Token));
    if (!Token) {
      history.push("/");
    }
    // eslint-disable-next-line
  }, []);

  return Locked[0] ? (
    <Fragment>
      <div className={styles.cards}>
        {Locked.map((data, index) => (
          <CardLocked objeto={data} key={index} />
        ))}
        {Unlocked.map((data, index) => (
          <CardUnlocked objeto={data} key={index} />
        ))}
      </div>
    </Fragment>
  ) : (
    <Loading />
  );
}
