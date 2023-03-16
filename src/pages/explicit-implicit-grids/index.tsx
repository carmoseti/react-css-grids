import React, {FunctionComponent} from 'react';

import styles from "./index.module.css";
import {Link} from "react-router-dom";

interface OwnProps {
}

type Props = OwnProps;

const ExplicitImplicitGridsPage: FunctionComponent<Props> = (props) => {

    return (
        <React.Fragment>
            <ul>
                <li>
                    <Link to={`/`}>Back</Link>
                </li>
            </ul>
            <h1>Explicit Implicit Grids</h1>
            <div className={styles.grid}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
            </div>
        </React.Fragment>
    );
};

export default ExplicitImplicitGridsPage;
