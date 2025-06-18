import { useState } from "react";
import languagesWithFlags from "../data/data";


const MovieCard = ({ curItem }) => {

    // const img = curItem.poster_path
    //     ? `https://image.tmdb.org/t/p/w342/${curItem.poster_path}`
    //     : NoImageFallback;

    const vote = (parseInt(curItem.vote_average / 2))

    let starsHtml = '';
    for (let i = 0; i < vote; i++) {
        starsHtml += '⭐';
    }
    for (let i = 0; i < (5 - vote); i++) {
        starsHtml += '☆';
    }

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    return (
        <>
            <div className="card-body"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>

                {isHovered
                    ? <>
                        <h5 className="card-title my-2 mb-4">{curItem.title}</h5>
                        <p className="card-text">Overview: {curItem.overview}</p>
                        <p className="card-text">Lingua:
                            {languagesWithFlags.map((curFlag) => (
                                curFlag.lang == curItem.original_language ?
                                    <>
                                        <img
                                            className='ms-3'
                                            src={`../public/flags/icons8-${curFlag.flag}-emoji-48.png" alt=""`} />
                                    </>
                                    :
                                    <>
                                        {curItem.original_language}
                                    </>
                            ))}
                        </p>
                        <p className="card-text">Voto: {starsHtml}</p>
                    </>
                    :
                    <>
                        <img src={`https://image.tmdb.org/t/p/w342/${curItem.poster_path} || '../assets/404'`} className="card-img-top" alt="..." />
                    </>
                }
            </div >
        </>

    )
}

export default MovieCard