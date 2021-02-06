import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import NasaModal from './NasaModal'
import SpaceXModal from './SpaceXModal'

const Random = () => {
    const [nasaTweets, setNasaTweets] = useState([]);
    const [spaceXTweets, setSpaceXTweets] = useState([]);
    
    useEffect(() => {
        const param = "NASA";

        axios({
            method: 'get',
            url: `/api/tweets/?search=${param}`
        }).then(data => console.log(data))
    }, []);

    return (
        <div>
            <NasaModal nasaTweets={nasaTweets}/>
            <SpaceXModal spaceXTweets={spaceXTweets}/>
        </div>
    )
}

export default Random