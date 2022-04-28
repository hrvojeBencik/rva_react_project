const ArticleTile = ({ article }) => {
  const date = article.datePublished.substring(0, 10)
  let imageUrl = ''
  if(!article.image) {
    imageUrl = ''
  } else if (!article.image.thumbnail) {
    imageUrl = ''
  } else {
    imageUrl = article.image.thumbnail.contentUrl
  }

  return (
    <div className="article-tile">
        <div className="image">
            {imageUrl === '' ? <p>No Image Found</p> : <img src={imageUrl} alt="" />}
        </div>
        <div className="article-data">
            <h3>{article.name}</h3>
            <p>{date}</p>
            <h4>{article.description}</h4>
            <a rel="noreferrer" target="_blank" href={article.url}>Find Out More</a>
        </div>
    </div>
  )
}

export default ArticleTile