import { useFetch } from "../hooks/useFetch";

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
      <ul>
        {news.articles.map((article, index) => (
          <div key={index}>
            <h1>{article.title}</h1>
            <img className="newsImg" src={article.urlToImage} alt="" />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Home;
