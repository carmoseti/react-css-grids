import React, {FunctionComponent} from 'react';
import {Link} from "react-router-dom";

import styles from "./index.module.css";

interface OwnProps {
}

type Props = OwnProps;

const ResponsivePage: FunctionComponent<Props> = (props) => {

    return (
        <React.Fragment>
            <ul>
                <li>
                    <Link to={'/'}>Back</Link>
                </li>
            </ul>
            <h1>Responsive Grid</h1>
            <div className={`${styles.grid} ${styles[`grid-autofill`]}`}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
            <div className={`${styles.grid} ${styles[`grid-autofit`]}`}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        </React.Fragment>
    );
};

export default ResponsivePage;
