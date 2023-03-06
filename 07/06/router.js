import { useRouter } from 'next/router';

const Home = () => {

    const router = useRouter();

    const clickMe = (e) => {
        e.preventDefault();
        router.push('about')
    }

    return (
        <button onClick={clickMe} >
            Click Here!
        </button>)
}

export default Home;