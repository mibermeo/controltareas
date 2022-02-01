const urlCrud = 'http://localhost:3001';

const getListUser = async () => {
    const response = await fetch(`${urlCrud}/user`);    
    const data = await response.json();
    console.log(data)
    return  data;
}



const createUser = async (user) => {
    
    const resp = await fetch(`${urlCrud}/user`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}





export {
    getListUser,
    createUser,
    
    
}   