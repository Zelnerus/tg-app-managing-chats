import styles from './DialogCell.module.scss';
import {Link, NavLink} from "react-router-dom";

export const DialogCell = ({ children, before }) => {
    return(
        <Link to="/dialog/14324" style={{ textDecoration: 'none' }}>
            <div className={styles.container}>
                <div style={styles.before}>
                    {before}
                </div>
                <div className={styles.child}>
                    {children}
                </div>
                <div style={styles.after}>

                </div>
            </div>
        </Link>
    );
}