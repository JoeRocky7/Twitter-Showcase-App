import React from 'react'

const TweetCard = ({ tweet }) => {
    const retweetedText = tweet.retweeted_status?.full_text;
    const imageTweet = tweet.retweeted_status?.extended_entities?.media[0].media_url;
    
    return (
        <div class="modals-container">
            <div class="modals">
                    <div class="modal-header">
                        <div class="image-container">
                            <img src={tweet.user.profile_image_url} />
                            <div>{tweet.user.name}</div>
                            <div id="screen-name">@ {tweet.user.screen_name}</div>
                        </div>

                        <div class="stats-container">
                            <div><i class="fas fa-heart"></i>{tweet.favorite_count}</div>
                            <div><i class="fas fa-retweet"></i>{tweet.retweet_count}</div>
                        </div>
                    </div>

                    <section>
                        {retweetedText ? 
                        <p>{retweetedText}</p>
                            : <p>{tweet.full_text}</p>}
                        
                        <div class="card-image">
                            <img id="card-image" src={imageTweet} />
                        </div>
                    </section>
                </div>
            </div>
    )
}

export default TweetCard;