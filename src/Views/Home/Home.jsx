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

  const Token = localStorage.getItem("TokenAuthorization");
  const Wallets = useSelector((state) => state.Wallets);
  const Locked = useSelector((state) => state.Locked);
  const Unlocked = useSelector((state) => state.Unlocked);

  useEffect(() => {
    if (Token === null) {
      history.push("/");
    } else {
      dispatch(getWallets());
      dispatch(Listas());
    }

    // eslint-disable-next-line
  }, []);

  return Locked[0] ? (
    <Fragment>
      <div className={styles.cards}>
        <div>
          {Wallets.map((wallet) => (
            <Fragment>
              <h1>{wallet.name}</h1>
              <div className={styles.container_elemnts}>
                {Locked.filter(
                  (object) => object.wallet.name === wallet.name
                ).map((valor) => (
                  <CardLocked objeto={valor} />
                ))}
                {Unlocked.filter(
                  (object) => object.wallet.name === wallet.name
                ).map((valor) => (
                  <CardUnlocked objeto={valor} />
                ))}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </Fragment>
  ) : (
    <Loading />
  );
}
