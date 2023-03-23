import { Toolbar } from "@/components/toolbar"
import axios from "axios"
import styles from '../styles/Feed.module.css'

export const getStaticProps = async () =>{
    const data = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=f315e29f194149ba899ecaf3df5be3bb')

    return{
        props:{
            news: data.data
        }
    };
};


export const feed = ({news}) =>{
    return(
        <>
        <Toolbar ></Toolbar>
        {
            news.articles.map((ne)=>{
                return(
                    <div className={styles.main}>
                    <div className={styles.post}>
                        <a href={ne.url} target="_blank">{ne.source.name}</a>
                        <p>{ne.content}</p>
                        <img src={ne.urlToImage} />
                    </div>
                    </div>
                )
            })
        }
        </>

    )
}

export default feed