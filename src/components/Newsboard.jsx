import { useEffect } from "react";
import { useState } from "react"
import NewsItem from "./NewsItem";


const Newsboard = ({category}) => {


    const [articles, setArticles] = useState([]);
    // useEffect(()=>{
    //     let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
    //     fetch(url).then(response=>response.json()).then(data=> setArticles(data.articles));

    // } , [])
    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTPS error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => setArticles(data.articles))
          .catch((error) => console.error("API Fetch Error:", error));
      }, [category]);
      

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} descriptoion={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default Newsboard
