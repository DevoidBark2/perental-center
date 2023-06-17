import React from "react";
import styles from "./User.module.css";
import {Link} from "react-router-dom";

function User({user}) {

    return (
        <Link className={styles.user_block} to={`/users/${user.id}`}>
            <p>
                {user.last_name} {user.first_name} {user.sur_name}
            </p>
            <span>Подробнее...</span>
        </Link>
    )
}

export default User;