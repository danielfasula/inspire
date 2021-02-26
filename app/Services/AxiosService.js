

export const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
    timeout: 10000
})

export const myApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/fasula/todos',
    timeout: 10000
})
