import styles from './Dialog.module.scss';

import { Icon28ArrowLeftOutline } from '@vkontakte/icons';
import {useNavigate} from 'react-router-dom';
import {IconButton} from "../../components/IconButton";

export const Dialog = () => {
    const nav = useNavigate();

    return(
        <div className={styles.dialog}>
            <div className={styles.header}>
                <IconButton onClick={() => nav(-1)}>
                    <Icon28ArrowLeftOutline />
                </IconButton>
                Dashboard
            </div>
        </div>
    );
}