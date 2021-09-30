import React from 'react';
import '../assets/css/bgAnimation.css';


const BgAnimation = props => {
    return (
        <div className="area">
            <ul className="circles">
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
            </ul>
        </div>
    );
};

export default React.memo(BgAnimation);