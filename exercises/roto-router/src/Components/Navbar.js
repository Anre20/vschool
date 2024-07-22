import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <h1>Roto Router</h1>
            <Link to = "/"><button>Home</button></Link>
            <Link to = "/About"><button>About</button></Link>
            <Link to = "/Services"><button>Services</button></Link>



        </nav>
    )
};
