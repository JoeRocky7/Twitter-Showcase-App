import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const Random = () => {
    const [tweets, setTweets] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();

        const param = e.target.name;

        axios
            .get(`/api/tweets?search=${param}`)
            .then((res) => setTweets(res.data))
            .catch((err) => console.log(err))

        setIsOpen(true);
    };

    const randomNumber = Math.floor(Math.random() * tweets.length);
    const displayRandomTweet = tweets[randomNumber];

    return (
        <div>
            <div class="random-container">
                <button id="random-button" name="NASA" onClick={handleClick}>Get NASA Tweet!
                    <div>
                        <img name="NASA" class="nasa-image" src="https://yt3.ggpht.com/ytc/AAUvwnhTEa6kEyqgSvL3wMaMbUDZtyHvhXehJppDCeOGUCI=s900-c-k-c0x00ffffff-no-rj" />
                    </div>
                </button>
                <button id="random-button" name="Spacex" onClick={handleClick}>Get SpaceX Tweet!
                    <div>
                        <img name="Spacex" class="spacex-image" src="https://i.pinimg.com/originals/9a/21/4b/9a214b68fc4146d02a5b41882e79987c.jpg" />
                    </div>
                </button>
                <button id="random-button" name="elonmusk" onClick={handleClick}>Get Elon Musk Tweet!
                    <div>
                        <img name="elonmusk" class="musk-image" src="https://ih1.redbubble.net/image.1226836687.3477/st,small,507x507-pad,600x600,f8f8f8.jpg" />
                    </div>
                </button>
                <button id="random-button" class="random-buttons-2" name="whitegavriel" onClick={handleClick}>Get Windows 96 Tweet!
                    <div>
                        <img name="whitegavriel" class="windows96-image" src="https://f4.bcbits.com/img/a0122641443_10.jpg" />
                    </div>
                </button>
                <button id="random-button" class="random-buttons-2" name="DanMasonVapor" onClick={handleClick}>Get Dan Mason Tweet!
                    <div>
                        <img name="DanMasonVapor" class="mason-image" src="https://f4.bcbits.com/img/a1494578543_5.jpg" />
                    </div>
                </button>
            </div>
            <div class="card-container">
                {isOpen ?
                    <div className="modals">
                        <div class="close-button-container">
                            <button id="modal-close-button" onClick={() => setIsOpen(false)}>X</button>
                        </div>
                        <div class="modal-header">
                            <div class="image-container">
                                <img src={displayRandomTweet?.user.profile_image_url} />
                                <div>{displayRandomTweet?.user.name}</div>
                                <div id="screen-name">@ {displayRandomTweet?.user.screen_name}</div>

                            </div>

                            <div class="stats-container">
                                <div><i class="fas fa-heart"></i>{displayRandomTweet?.favorite_count}</div>
                                <div><i class="fas fa-retweet"></i>{displayRandomTweet?.retweet_count}</div>
                            </div>
                        </div>
                        <div class="random-modal-section">
                            <p>{displayRandomTweet?.full_text}</p>
                        </div>
                    </div>
                    : null}
            </div>
        </div>
    )
}

export default Random