import {DialogCell} from "../../components/DialogCell";

import styles from './Dialogs.module.scss';
import {Avatar} from "../../components/Avatar";

export const Dialogs = () => {
    const dialogs = ['a', 'b'];
    return (
        <div className={styles.list}>
            {dialogs.map((e) => (
                <DialogCell
                    before={
                        <Avatar style={{backgroundColor: '#7590E3'}}>O</Avatar>
                    }
                >
                    test test
                </DialogCell>
            ))}
        </div>
    );
}