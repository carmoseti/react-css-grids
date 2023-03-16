import React, {FunctionComponent} from 'react';
import {Link} from "react-router-dom";

import styles from "./index.module.css";

interface OwnProps {
}

type Props = OwnProps;

const FormLayoutPage: FunctionComponent<Props> = (props) => {

    return (
        <React.Fragment>
            <ul>
                <li>
                    <Link to={'/'}>Back</Link>
                </li>
            </ul>
            <h1>Form Layout with Auto-Placement</h1>
            <form className={styles.myForm}>
                <label htmlFor="customer_name">Name </label>
                <input type="text" name="customer_name" id="customer_name" required/>

                <label htmlFor="phone_number">Phone </label>
                <input type="tel" name="phone_number" id="phone_number"/>

                <label htmlFor="email_address">Email </label>
                <input type="email" name="email_address" id="email_address"/>

                <fieldset>
                    <legend>Which taxi do you require?</legend>
                    <label> <input type="radio" name="taxi" id="taxi_car" required value="car"/> Car </label>
                    <label> <input type="radio" name="taxi" id="taxi_van" required value="van"/> Van </label>
                    <label> <input type="radio" name="taxi" id="taxi_tuk" required value="tuktuk"/> Tuk Tuk
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Extras</legend>
                    <label> <input type="checkbox" name="extras" id="extras_baby" value="baby"/> Baby Seat
                    </label>
                    <label> <input type="checkbox" name="extras" id="extras_wheel"
                                   value="wheelchair"/> Wheelchair Access </label>
                    <label> <input type="checkbox" name="extras" id="extras_tip" value="tip"/> Stock Tip
                    </label>
                </fieldset>

                <label htmlFor="pickup_time">Pickup Date/Time</label>
                <input type="datetime-local" name="pickup_time" id="pickup_time" required/>

                <label htmlFor="pickup_place">Pickup Place</label>
                <select name="pickup_place" id="pickup_place">
                    <option value="" selected={true}>Select One</option>
                    <option value="office">Taxi Office</option>
                    <option value="town_hall">Town Hall</option>
                    <option value="telepathy">We'll Guess!</option>
                </select>

                <label htmlFor="dropoff_place">Dropoff Place</label>
                <input type="text" name="dropoff_place" id="dropoff_place" required list="destinations"/>

                <datalist id="destinations">
                    <option value="Airport"/>
                    <option value="Beach"/>
                    <option value="Fred Flinstone's House"/>
                </datalist>

                <label htmlFor="comments">
                    Special Instructions
                </label>
                <textarea name="comments" id="comments" maxLength={100}/>

                <button>Submit Booking</button>

            </form>
        </React.Fragment>
    );
};

export default FormLayoutPage;
