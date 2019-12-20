import axios from 'axios';



// export const axiosWithAuth =() => {
//     const token = localStorage.getItem('token');

//     return axios.create({
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `${token}`,
//         },
//     });
// };

export const axiosWithAuth =()=>{
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL:'http://localhost:5000/api',
        headers:{
            authorization: token,
            "Content-Type": "application/json"
        }
    })
};