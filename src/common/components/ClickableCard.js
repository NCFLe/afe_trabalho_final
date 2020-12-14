import React from 'react';
import { Link } from "react-router-dom"

export const ClickableCard = ( {title, url} ) => {
    return (
        <Link to={ url } className="dim fl w-third h4 ma2 bg-near-black br3 dt no-underline">
                <span className="f2 fw6 white-60 dtc v-mid">{ title }</span>
        </Link>
    );
}