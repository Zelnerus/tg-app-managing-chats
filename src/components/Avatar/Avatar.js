import styles from './Avatar.module.scss';

export const Avatar = ({ style, children}) => {
    return(
        <div className={styles.Avatar} style={style}>
            {children}
        </div>
    );
}