import Head from "next/head";//nextjs에서 이런 작은 설정들을 가져올수 있는게 장점이다.
import { useEffect, useState } from 'react';
import axios from 'axios';
import Seo from '../components/Seo';
import Link from 'next/link';
import { useRouter } from 'next/router';

//Server Side Rendering
/*
nextJS가 페이지를 html형태로 export하던지 pre render하는걸 알고있다.
nextJS는 초기상태에 html을 보여준다 그 후에 export나 render을 해줘서 loding을 보여줄 수 있다.
*/

export default function Home({results}) {

    

    const [movies, setMovies] = useState([]);//배열이어야지 movie api를 불러올 수 있다.
    useEffect(() => {
    //     (async () => {
    //         const { results } = await (await fetch(
    //             `/api/movies`//next.config에서 이쪽으로 링크를 걸면 fetch한 주소로 바꿔줘서 fetch url을 가져올 수 있다.
    //         )).json();
            setMovies(results);
    //     })();
    }, []);



    const router = useRouter();
    const onClick = (id, title) => {
        //router.push(`/movies/${id}`); 링크를 감출때
        router.push(/*{
            pathname:`/movies/${id}`,//링크에다 데이터 넘기는법
            query:{
                title,
            }
        },`/movies/${id}`*/
        
        `/movies/${title}/${id}`,
        
        
        
        );// ,다음에 링크를 써주면 그 뒤에 데이터들은 숨겨준다.
    }
    return (
        <>
            <div className='container'>
                <Seo title="Home" />
                {!movies && <h4>Loading...</h4> /*만약 movie가 존재하지 않으면*/}
                {movies?.map(movie => (
                    
                    <div onClick={()=>onClick(movie.id,movie.original_title)} className="movie" key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                        <h4>
                            <Link href={{
                                pathname:`/movies/${movie.id}`,
                                query:{
                                    title:movie.original_title,
                                },
                            }}
                            as={`/movies/${movie.id}`}>
                                <a>
                                {movie.original_title}
                                </a>
                            </Link>
                        </h4>
                    </div>
    
                ))}

        <style jsx>{`
        .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
        }
        .movie{
            cursor:pointer;
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

//Server Side Rendering
/*
nextJS가 페이지를 html형태로 export하던지 pre render하는걸 알고있다.
nextJS는 초기상태에 html을 보여준다 그 후에 export나 render을 해줘서 loding을 보여줄 수 있다.
*/

export async function getServerSideProps(){//이름을 바꾸면 안된다.
//이코드는 client쪽이 아니라 server쪽에서만 작동을 한다. 여기에 api key를 숨길수 있다. 백엔드에서만 사용된다.
    const { results } = await (await fetch(
        `http://localhost:3000/api/movies`//상대경로는 프론트엔드에서만 작동됨. url을 다 적어줘야함
        //next.config에서 이쪽으로 링크를 걸면 fetch한 주소로 바꿔줘서 fetch url을 가져올 수 있다.
    )).json();
    return{
        props:{//key
            results,//내가 원하는 데이터 아무거나 넣을 수 있댜. //이것은 상단 Home function에다 prop으로 넣을수 있다.
        }
    }
    
}
//2.4부터 다시보기