import Link from 'next/link';
import { useRouter } from 'next/router';
//import styles from "./NavBar.module.css";//css 모듈로 사용할 경우

export default function NavBar(){
    const router = useRouter();//nextjs에서 자동으로 지원해준다. router에 대한 정보를 가져올 수 있다. path, route ... 등등
    console.log(router);
    return <nav>
        {/* className={styles.nav}
            클래스 이름은 자바스크립트 오브젝트에서 프로퍼티 형시으로 적는다. 
            클래스 네임을 암호화해줘서 절때 class가 겹치지 않게 해준다.
        */}
        <Link href="/">
            {/* nextjs에서 react-router-dom과 비슷한 라이브러리를 제공해준다. */}
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
            {/*
            className={`${styles.link} 
            ${router.pathname === "/" ? styles.active : ""}`}
             color 패스가 / 가 맞다면 red 아니면 blue  /  클래스 두개를 사용하고 싶을때 ``백틱으로  감싸 2개의 프로퍼티를 만들어줘야 한다. */}
        </Link>

        <Link href="/about">
            <a className={router.pathname === "/about" ? "active" : ""}>About</a>

            {/* 
            className={[
                styles.link, 
                router.pathname === "/about" ? styles.active : "",
                ].join(" ")}
            join은 한 배열을 다른 한 문자열로 바꾸는 방법이다. */}
        </Link>
        {/* <style jsx global></style>   = global로 지정하면 모든 컴포넌트에 적용된다 */}
        <style jsx>{`
            h1{
                color:red;
            }
            a {
                text-decoration:none;
            }
            .active{
                color:tomato;
            }
        `}</style>
        {/* 
        <style jsx>{``}</style> = style.jxs 쓰는 방법 
        style.jsx는 독립되어 다른 파일과 공유하지 않는다.
        
        */}

    </nav>
}


