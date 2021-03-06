const baseUrl = 'http://localhost:3005/api/users';

export const getAll = async () => {

    const response = await fetch(`${baseUrl}?page=1&limit=100`);
    const result = await response.json();

    return result.users;

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
