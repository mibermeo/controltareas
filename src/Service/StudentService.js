const urlCrud = 'http://localhost:3001';

const getListStudent = async () => {
    const response = await fetch(`${urlCrud}/student`);    
    const data = await response.json();
    console.log(data)
    return  data;
}
const findByIdStudent = async (studentId) => {
    const response = await fetch(`${urlCrud}/student/${studentId}`);  
    const data = await response.json();     
    return  data;
}

const createStudent = async (student) => {
    
    const resp = await fetch(`${urlCrud}/student`, {
        method: 'POST',
        body: JSON.stringify(student),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}
const updateStudent = async (student) => {
  
    const resp = await fetch(`${urlCrud}/student`, {
        method: 'PUT',
        body: JSON.stringify(student),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}



export {
    getListStudent,
    createStudent,
    updateStudent,
    findByIdStudent
}   