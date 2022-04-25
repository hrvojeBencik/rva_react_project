class ApiService {
    #baseUrl = 'https://bing-news-search1.p.rapidapi.com';
    #apiKey = 'de113f6fc7msh7dc6f0cae65b9adp13d199jsnba33151fdee1'

    #options = {
	method: 'GET',  
	headers: {
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
		'X-RapidAPI-Key': this.#apiKey,
	    }
    };

    getNews() {
        fetch(`${this.#baseUrl}/news?count=12&safeSearch=Off&textFormat=Raw`, this.#options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }
}

export { ApiService }