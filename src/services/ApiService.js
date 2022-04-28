class ApiService {
    #baseUrl = 'https://bing-news-search1.p.rapidapi.com';
    #apiKey = 'de113f6fc7msh7dc6f0cae65b9adp13d199jsnba33151fdee1'

    #options = {
	method: 'GET',  
	headers: {
        'Accept-Language': 'en-US',
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
		'X-RapidAPI-Key': this.#apiKey,
	    }
    };

    async getNews(category) {
        if(category) {
            const res = await fetch(`${this.#baseUrl}/news?category=${category}&cc=gb&count=12&safeSearch=Off&textFormat=Raw`, this.#options)
            return await res.json()
        }

        return [];
    }
}

export { ApiService }