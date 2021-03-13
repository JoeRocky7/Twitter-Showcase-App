import React from 'react'

const Home = () => {
    return (
        <div className="home-container">
            <h2>Welcome!</h2>
            <p>This is a simple web application
            that utilizes the Twitter API to retrieve twitter timeline information.
            You can search based on user or content in the search page, or utilize
            the random tweet page to pull a random tweet from the selected choices.
                    </p>
            <p id="second-home-paragraph">Hope you enjoy!</p>
        </div>
    )
}

export default Home