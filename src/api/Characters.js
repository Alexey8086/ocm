const CHARACTERS_BY_PAGE_URL = 'https://swapi.dev/api/people/?page='

const HEADERS = {
    "Content-Type": "application/json",
}

export const getCharactersByPage = async (page) => {
    const requestUrl = CHARACTERS_BY_PAGE_URL + page
    try {
        let response = await fetch(requestUrl, {
            method: "GET",
            headers: HEADERS,
        })

        response = await response.json()

        return response.results
    } catch (error) {
        throw error
    }
}
