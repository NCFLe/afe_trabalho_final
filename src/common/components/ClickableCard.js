import React from 'react';
import { Link } from "react-router-dom"

export const ClickableCard = ( {imageSource, title, url} ) => {
    return (
        <Link to={ url } className="dim fl w-third h4 ma2 bg-near-black br3 dt no-underline">
                <span className="f2 fw6 white-60 dtc v-mid">{ title }</span>
        </Link>
    );

    // return (
    //     <Link to={ url } className="dim fl w-25 h5 ma2 bg-near-black br3 no-underline">
    //         <div className="bg-near-black br3">
    //             <img src={imageSource} className="db w-100 br3 br--top" alt={ title } />
    //             <span className="f2 fw6 white-60">{ title }</span>
    //         </div>
    //     </Link>
    // );
}