const baseUrl = 'http://localhost:3005/api/users';

export const getAll = async () => {

    const response = await fetch(`${baseUrl}`);
    const result = await response.json();

    return result.users;

}

export const getOne = async (_id) => {

    const response = await fetch(`${baseUrl}/${_id}`);
    const result = await response.json();

    return result.user;

}
