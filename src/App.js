import { ApiService } from './services/ApiService.js'
import { useEffect, useState } from 'react';
import ArticleTile from './components/ArticleTile.js';
import NavBar from './components/NavBar.js';
import Loading from './components/Loading.js';
import ContactForm from './components/ContactForm.js';

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
    setArticles([])
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
      {errorMessage !== '' ? <p>{errorMessage}</p>  : !articles || articles.length === 0 ? <Loading /> : articles.map((item, index) => <ArticleTile key={index} article={item}/>)}
      {articles && articles.length !== 0 && <ContactForm />}
    </div>
  );
}

export default App;
