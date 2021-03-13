import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <header>
                <div class="container">
                    <div id="branding">
                        <h1 class="highlight">Twitter Showcase</h1>
                    </div>
                    <nav>
                        <ul>
                            <Link to="/">
                                <li>Home</li>
                            </Link>
                            <Link to="/Search">
                                <li>Search</li>
                            </Link>
                            <Link to="/Random">
                                <li>Random</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </header>
        </nav>
    )
}

export default Nav