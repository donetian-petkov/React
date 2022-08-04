const baseUrl = 'https://api.themoviedb.org/3/movie';

export const getInTheater = async () => {

    const response = await fetch(`${baseUrl}/now_playing?language=en-US&page=1`, {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjJlYzBmOGIyMTJiYjAwMDExODkxZjBmNGQyNzU0YyIsInN1YiI6IjYyZWIzY2E2MjVjZDg1MDA1ZDAwOWUxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uf6LF6vTHtZeRYWjBbkJFeqV-V-6IxVRjU8zcbjD3nE',
            'Content-Type': 'application/json;charset=utf-8'
        }
    });
    const result = await response.json();

    return result.results;

}

export const getOne = async (_id) => {

    const response = await fetch(`${baseUrl}/${_id}`);
    const result = await response.json();

    return result.user;

}

export const create = async (userData) => {

    const response = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(userData)
    });

    if (response.ok) {
        const result = await response.json();

        return result.user;


    } else {
        throw { message: 'Unable to create user!'}
    }


}
