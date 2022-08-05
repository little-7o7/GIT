class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';

    _apiKey = 'apikey=c4e650f7fe3329e13ff2c644ea799d2d';

    _baseOffset = 210;

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async (offset = this._baseOffset) => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter)
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0])
    }

    description = (descr) => {
        if (descr.length === 0 || descr === undefined) {
            return 'Not Found'
        } else if (descr.length > 151) {
            return descr.slice(0, 150) + '...'
        } else {
            return descr
        }
    }

    _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: this.description(char.description),
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
}

export default MarvelService;