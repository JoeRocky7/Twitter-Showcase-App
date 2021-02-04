import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import NasaModal from './NasaModal'
import SpaceXModal from './SpaceXModal'

const Random = () => {
    const [nasaTweets, setNasaTweets] = useState([]);
    const [spaceXTweets, setSpaceXTweets] = useState([]);
    
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3002/api/tweets/NASA'
        }).then(res => {
            setNasaTweets(res.data);
            console.log(res.data);
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <NasaModal nasaTweets={nasaTweets}/>
            <SpaceXModal spaceXTweets={spaceXTweets}/>
        </div>
    )
}
export default Random