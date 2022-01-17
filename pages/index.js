import Head from "next/head";//nextjs에서 이런 작은 설정들을 가져올수 있는게 장점이다.
import Seo from '../components/Seo';


export default function Home(){

return (
    <>
    <div>
    <Seo title="Home"/>
        <h1>Hello</h1>
    </div>
    </>
);
}
//2.1부터 다시보기