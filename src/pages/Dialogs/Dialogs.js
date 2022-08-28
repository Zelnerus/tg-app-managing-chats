import React from 'react';
import {DialogCell} from "../../components/DialogCell";

import styles from './Dialogs.module.scss';
import {Avatar} from "../../components/Avatar";

export const Dialogs = () => {
    const dialogs = ['A', 'B'];
    return (
        <div className={styles.dialogs}>
            <div className={styles.list}>
                {dialogs.map((e, i) => (
                    <React.Fragment
                        key={i}
                    >
                        <DialogCell
                            before={
                                <Avatar style={{backgroundColor: '#7590E3'}}>{e}</Avatar>
                            }
                        >
                            test test
                        </DialogCell>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}