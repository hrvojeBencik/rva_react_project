import { ApiService } from './services/ApiService.js'
import { useEffect, useState } from 'react';
import ArticleTile from './components/ArticleTile.js';
import NavBar from './components/NavBar.js';
import Loading from './components/Loading.js';

const api = new ApiService();

function App() {
  const [articles, setArticles] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const newsCategory = 'Sports';

  useEffect(
    () => setNewsCategory(newsCategory),
    [],
  )
  
  const setNewsCategory = (category) => {
    const fetchData = async () => {
      const data = await api.getNews(category)
      if(data.length !== 0) {
       setArticles(data.value) 
      } else {
      setErrorMessage('There is a problem with the server')
      }
    };

    fetchData()
  }

  return (
    <div className="container">
      <NavBar onClick={setNewsCategory}/>
      {errorMessage !== '' ? <p>{errorMessage}</p>  : !articles ? <Loading /> : articles.map((item, index) => <ArticleTile key={index} article={item}/>)}
    </div>
  );
}

export default App;
