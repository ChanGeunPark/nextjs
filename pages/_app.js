//nextjs는 하단파일을 렌더하기전에 상단에 있는 _app.js를 먼저 확인하고 그 다음 index.js의 컴포넌트을 렌더링 한다.
import Layout from '../components/Layout';
import "../styles/globals.css";
//css는 다른곳에선 모듈로밖에 못불러오지만 _app컴포는트가 있는곳이라면 모든 global styles를 임포트할 수 있다.


export default function App({Component, pageProps}){
    return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
    );
};
//nextjs는 첫번째 인자에 보여줄 페이지의 함수를 가져온다.
