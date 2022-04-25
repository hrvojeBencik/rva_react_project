const ArticleTile = ({ article }) => {
  return (
    <div className="article-tile">
        <img src={article.image} alt="" />
        <div className="article-data">
            <h3>{article.name}</h3>
            <p>{article.date}</p>
            <h4>{article.description}</h4>
            <a rel="noreferrer" target="_blank" href={article.url}>Find Out More</a>
        </div>
    </div>
  )
}

export default ArticleTile