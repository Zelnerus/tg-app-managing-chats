import styles from './IconButton.module.scss';
import {noop} from "lodash";

export const IconButton = ({ children, onClick = noop }) => {
    return(
        <div className={styles.IconButton} onClick={onClick}>
            {children}
        </div>
    );
}