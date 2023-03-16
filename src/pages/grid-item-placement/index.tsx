import React, { FunctionComponent } from 'react';
import {Link} from "react-router-dom";

import styles from "./index.module.css";

interface OwnProps {}

type Props = OwnProps;

const GridItemPlacementPage: FunctionComponent<Props> = (props) => {

    return (
        <React.Fragment>
            <ul>
                <li>
                    <Link to={'/'}>Back</Link>
                </li>
            </ul>
            <h1>Grid Item Placement</h1>
            <div className={styles.grid}>
                <div className={styles.item1}>Item 1</div>
                <div className={styles.item2}>Item 2</div>
                <div className={styles.item3}>Item 3</div>
            </div>
        </React.Fragment>
    );
};

export default GridItemPlacementPage;
