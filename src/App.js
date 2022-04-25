import { ApiService } from './services/ApiService.js'
import { Article } from './models/Article.js';
import { useEffect } from 'react';
import ArticleTile from './components/ArticleTile.js';
import NavBar from './components/NavBar.js';

const api = new ApiService();

const articles = [
  new Article('Naslov novosti', 'Opis novosti', 'https://www.google.com', 'https://www.bing.com/th?id=ORMS.c517b7e82a78c8451c0f5f42297edd21&pid=Wdp', '24.04.2022.'),
  new Article('Naslov novosti', 'Opis novosti', 'https://www.google.com', 'https://www.bing.com/th?id=ORMS.c517b7e82a78c8451c0f5f42297edd21&pid=Wdp', '24.04.2022.'),
  new Article('Naslov novosti', 'Opis novosti', 'https://www.google.com', 'https://www.bing.com/th?id=ORMS.c517b7e82a78c8451c0f5f42297edd21&pid=Wdp', '24.04.2022.'),
]

function App() {

  // useEffect(
  //   () => api.getNews(),
  //   [],
  // )

  return (
    <div className="container">
      <NavBar />
      {articles.map((item) => <ArticleTile article={item}/>)}
    </div>
  );
}

export default App;
