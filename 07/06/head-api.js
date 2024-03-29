import Head from 'next/head';

const Home = (props) => {
    return (
        <Head>
            <title>${props.title}</title>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={props.description} />
        </Head>
    )
}

export default Home;