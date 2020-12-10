import React from 'react';
import { Link } from "react-router-dom"

export const LinkCard = ( {imageSource, title, url} ) => {
    return (
        <Link to={ url } className="near-black dim fl w-third h4 ma2 bg-near-black br3 dt">
                <span className="f2 fw6 white-60 dtc v-mid">{ title }</span>
        </Link>
    );

    // return (
    //     <Link to={ url } className="near-black dim fl w-25 h5 ma2 bg-near-black br3">
    //         <div className="bg-near-black br3">
    //             <img src={imageSource} className="db w-100 br3 br--top" alt={ title } />
    //             <span className="f2 fw6 white-60">{ title }</span>
    //         </div>
    //     </Link>
    // );
}