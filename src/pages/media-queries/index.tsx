import React, {FunctionComponent} from 'react';
import {Link} from "react-router-dom";

import styles from "./index.module.css"

interface OwnProps {
}

type Props = OwnProps;

const MediaQueriesPage: FunctionComponent<Props> = (props) => {

    return (
        <React.Fragment>
            <ul>
                <li>
                    <Link to={'/'}>Back</Link>
                </li>
            </ul>
            <h1>Media Queries</h1>
            <div className={styles.body}>
                <header className={styles.pageHeader}>Header</header>
                <article className={styles.mainArticle}>Article</article>
                <nav className={styles.mainNav}>Nav</nav>
                <div className={styles.siteAds}>Ads</div>
                <footer className={styles.pageFooter}>Footer</footer>
            </div>
        </React.Fragment>
    );
};

export default MediaQueriesPage;
