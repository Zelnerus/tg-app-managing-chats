import styles from './DialogCell.module.scss';

export const DialogCell = ({ children, before }) => {
    return(
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
    );
}