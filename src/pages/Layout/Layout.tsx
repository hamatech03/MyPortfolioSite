import { Outlet, } from "react-router-dom";


import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Layout.module.css";


export default function Layout() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>

        <Footer />
        </div>
    )
}
