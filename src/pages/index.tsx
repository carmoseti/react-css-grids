import React, {FunctionComponent} from 'react';
import {Link} from "react-router-dom";

interface OwnProps {
}

type Props = OwnProps;

const HomePage: FunctionComponent<Props> = (props) => {

    return (
        <React.Fragment>
            <h1>CSS Grids</h1>
            <ol>
                <li>
                    <Link to={`/basic`}>Basic Grid Example</Link>
                </li>
                <li>
                    <Link to={`/website-layout`}>Website Layout</Link>
                </li>
                <li>
                    <Link to={`/responsive`}>Responsive</Link>
                </li>
                <li>
                    <Link to={`/media-queries`}>Media Queries</Link>
                </li>
                <li>
                    <Link to={`/explicit-implicit-grids`}>Explicit Implicit Grids</Link>
                </li>
                <li>
                    <Link to={`/grid-item-placement`}>Grid Item Placement</Link>
                </li>
                <li>
                    <Link to={`/form-layout-placement`}>Form Layout Placement</Link>
                </li>
                <li>
                    <Link to={`/grid-alignment`}>Grid Alignment</Link>
                </li>
                <li>
                    <Link to={`/layering-grid-items`}>Layering Grid Items</Link>
                </li>
            </ol>
        </React.Fragment>
    );
};

export default HomePage;
