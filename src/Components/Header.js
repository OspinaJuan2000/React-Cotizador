import React, { Fragment } from 'react';

// function Header(props) {
//     const { titulo } = props;

//     return (
//         <Fragment>
//             <h1>{titulo}</h1>
//         </Fragment>
//     );
// }

const Header = (props) => {
    const { titulo } = props;

    return (
        <Fragment>
            <h1>{titulo}</h1>
        </Fragment>
    );
}


export default Header;