import NavBar from './NavBar';

export default function Layout({ childrun }){
    //childrun이란, react.js가 제공하는 prop, 하나의 component를 또 다른 component안에 넣을 때 쓸 수 있다.

    return ( 
    <>
        <NavBar/>
        <div>{ childrun }</div>
    </>
    );
}