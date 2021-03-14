import React from 'react'

const ContentCards = ({ contentTweet }) => {
    const retweetedText = contentTweet.retweeted_status?.full_text;
    const imageTweet = contentTweet.retweeted_status?.extended_entities?.media[0].media_url

    return (
        <div class="modals-container">
            <div class="modals">
                <div class="modal-header">
                    <div class="image-container">
                        <img src={contentTweet.user.profile_image_url} />
                        <div>{contentTweet.user.name}</div>
                        <div id="screen-name">@ {contentTweet.user.screen_name}</div>
                    </div>
                    <div class="stats-container">
                        <div><i class="fas fa-heart"></i>{contentTweet.favorite_count}</div>
                        <div><i class="fas fa-retweet"></i>{contentTweet.retweet_count}</div>
                    </div>
                </div>

                {retweetedText ?
                    <p>{retweetedText}</p>
                    : <p>{contentTweet.full_text}</p>}
                <div class="card-image">
                    <img id="card-image" src={imageTweet} />
                </div>
            </div>
        </div>
    )
}

export default ContentCards
