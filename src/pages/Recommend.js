//import React from 'react';
import './Recommend.css';
//import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

const Recommend = () => {
    const [keywords, setKeywords] = useState('');
    const [loadingG, setLoadingG] = useState(false);
    const [loadingY, setLoadingY] = useState(false);
    const [responseText, setResponseText] = useState('');



    const handleKeywordsChange = (e) => {
        setKeywords(e.target.value);
    };


    //gpt
    const api_key = '';
    const chatGPT = () => {
        setLoadingG(true);

        const messages = [
            { role: 'system', content: 'You are a chef' },
            { role: 'user', content: `${keywords}로 만들 수 있는 요리들을 추천해줘.` },
        ];

        const data = {
            model: 'gpt-3.5-turbo',
            temperature: 0.5,
            n: 1,
            messages: messages,
        };

        axios
            .post('https://api.openai.com/v1/chat/completions', data, {
                headers: {
                    Authorization: `Bearer ${api_key}`,
                    'Content-Type': 'application/json',
                },
            })
            .then((responseG) => {
                setLoadingG(false);
                console.log(responseG.data);
                setResponseText(responseG.data.choices[0].message.content);
                setKeywords('');
            })
            .catch((error) => {
                setLoadingG(false);
                console.error(error);
            });
    };
    //youtube
    const [videos, setVideos] = useState([]);

    const YouTubeSearch = async () => {
        setLoadingY(true);
        try {
            const responseY = await axios.get(
                'https://www.googleapis.com/youtube/v3/search',
                {
                    params: {
                        key: '',
                        q: `${keywords}으로 만드는 자취생 레시피`,
                        type: 'video',
                        part: 'snippet'
                    }
                }
            );
            setVideos(responseY.data.items);
        } catch (error) {
            setLoadingY(false);
            console.error(error);
        }
    };
    // useEffect(() => {
    //     chatGPT();
    //   }, []); // chatGPT 함수는 최초 렌더링 시에 실행됨

    //   useEffect(() => {
    //     YouTubeSearch();
    //   }, []); // youtubeSearch 함수는 최초 렌더링 시에 실행됨

    //YouTubeSearch();

    return (
        <div>



            <div className='GPT_container'>
                <div className='video_background_rec'>
                    <video muted autoPlay loop className='background_video_rec'>
                        <source src="../assets/back_main.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='GPT_title'>
                    {/* <h1 className='title'>How about?</h1> */}
                    <div className='title_logo'>
                        <h1 className='title'>SEARCH</h1>

                    </div>
                    <p className='sub_title'>그래도 고민이신가요? Chat_GPT와 YouTube에게 물어보세요!</p>
                    <div className='input_container'>
                        <input
                            className="input"
                            type="text"
                            id="keywords"
                            name="keywords"
                            value={keywords}
                            onChange={handleKeywordsChange}
                            required
                        />

                        <button className='button_G' onClick={chatGPT}>
                            <img className='openai_image' alt='이미지' src='../assets/openai2.png' />

                        </button>
                        <button className='button_Y' onClick={YouTubeSearch}>
                            <img className='youtube_image' alt='이미지' src='../assets/youtube.png' />

                        </button>

                    </div>
                    <p style={{ color: 'white' }}>빈칸에 재료들을 입력해주세요</p>
                </div>


                {loadingG && (
                    <p className="loading">GPT Loading...</p>
                )}

                {responseText && (
                    <div>
                        <div className="result" >
                            <img className='openai_image_2' alt='이미지' src='../assets/openai2.png' />
                            Chat-GPT Result
                        </div><br />
                        <textarea className="result-textbox" value={responseText} readOnly />
                    </div>
                )}



                <div className='Youtube_container'>
                    {loadingY && (
                        <div className="result" >
                            <img className='youtube_image_2' alt='이미지' src='../assets/youtube.png' />
                            YouTube Result
                        </div>
                    )}
                    {videos.map(video => (
                        <div className='Y_contents' key={video.id.videoId}>
                            <a
                                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={video.snippet.thumbnails.default.url}
                                    alt={video.snippet.title}
                                    style={{ width: '200px', height: 'auto' }}
                                />
                            </a>
                            <div className='Y_description'>
                                <h3>{video.snippet.title}</h3>
                                <p>{video.snippet.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default Recommend;

