import styles from './Button.module.scss';

export const Button = ({ children }) => {
    return(
        <div>
            <button className={styles.Button}>
                {children}
            </button>
        </div>
    );
}