import React, {FunctionComponent} from 'react';
import {Link} from "react-router-dom";

import styles from "./index.module.css";

interface OwnProps {
}

type Props = OwnProps;

const GridAlignmentPage: FunctionComponent<Props> = (props) => {

    return (
        <React.Fragment>
            <ul>
                <li>
                    <Link to={'/'}>Back</Link>
                </li>
            </ul>
            <h1>Grid Alignment</h1>
            <div className={styles.grid}>
                <div className={styles.red}>1</div>
                <div className={styles.green}>2</div>
                <div className={styles.blue}>3</div>
            </div>
        </React.Fragment>
    );
};

export default GridAlignmentPage;
