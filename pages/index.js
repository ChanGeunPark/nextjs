import Head from "next/head";//nextjs에서 이런 작은 설정들을 가져올수 있는게 장점이다.
import { useEffect, useState } from 'react';
import axios from 'axios';
import Seo from '../components/Seo';


const API_KEY = "82221edb0c272ba0da179fce766d8e21";

export default function Home() {
    const [movies, setMovies] = useState([]);//배열이어야지 movie api를 불러올 수 있다.
    useEffect(() => {
        (async () => {
            const { results } = await (await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
            )).json();
            setMovies(results);
        })();

    }, []);
    return (
        <>
            <div className='container'>
                <Seo title="Home" />
                {!movies && <h4>Loading...</h4> /*만약 movie가 존재하지 않으면*/}
                {movies?.map(movie => (
                    <div key={movie.id} className="movie">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    </div>
                ))}

                <style jsx>{`
        .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
        }
        .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
            transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
            font-size: 18px;
            text-align: center;
        }
        `}</style>
            </div>
        </>
    );
}


//2.22222부터 다시보기