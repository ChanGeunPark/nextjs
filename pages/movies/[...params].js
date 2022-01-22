import { useRouter } from 'next/router';
import Seo from '../../components/Seo';


export default function Detail({params}){
    const router = useRouter();
    const [title, id] = params || [];//serversitdeprops에 props를 가져왔다.
    console.log(router);
    return <div>
        <Seo title={title}/>
        <h4>{title}</h4>
    </div>;
}

export function getServerSideProps({params:{params}}){
    return {
        props:{
            params,
        },
    }
}