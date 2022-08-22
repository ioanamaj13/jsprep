import { Link } from "react-router-dom";
import styles from "./sidebar.module.scss";

export const SideBar = () => {
    return (
        <aside className={styles.sideMenu}>
            <h1> <Link to="/">Home</Link></h1>
            <ul className={styles.menuItem}>
                <li><Link to="/fizzbuzz">FizzBuzz</Link></li>
                <li><Link to="/palindrome">Palindrome</Link></li>
                <li><Link to="/brackets">Brackets</Link></li>
                <li> <span className={styles.section}> Pokemon: </span>
                    <ul>
                        <li><Link to="/pokefetch">Fetch</Link></li>
                        <li><Link to="/pokeaxios">Axios</Link></li>
                        <li><Link to="/pokehttp">HTTP</Link></li>
                    </ul>
                </li>
            </ul>
        </aside>

    )
}