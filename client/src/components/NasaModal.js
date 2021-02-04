import React from 'react'
import { useState } from 'react'

const NasaModal = ({ nasaTweets }) => {
    const [isOpen, setIsOpen] = useState(false);
    let randomTweet = [ nasaTweets[Math.floor(Math.random() * nasaTweets.length)] ];
    // console.log(randomTweet);

    return (
        <div>
            <button id="nasa-button" onClick={() => setIsOpen(!isOpen)}>Get NASA Tweet!</button>
            {isOpen ? (
                <div className="modal">
                    {randomTweet.map(tweet => (
                        <p>{tweet.text}</p>
                    ))}
                </div>
            ) : null}
        </div>
    )
}

export default NasaModal
