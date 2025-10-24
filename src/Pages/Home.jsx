import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Home() {
  const {
    data: news,
    isPending,
    error,
  } = useFetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=314795ca3baa452eba768e76912b4584"
  );
  if (isPending) return <p>Loading...</p>;
  return (
    <div>
      <h1>News</h1>
      <div className="newsContainer">
        {news.articles.map((article, index) => (
          <div key={index} className="newsItem">
            <img className="newsImg" src={article.urlToImage} alt="" />
            <h1>{article.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
