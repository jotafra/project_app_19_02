import axios from "axios";

const api = axios.create({
    baseURL:"http://10.89.240.74:5000/api/v1/",
    headers:{
        "accept":"application/json"
    }
});

const sheets = {
    postLogin:(user) => api.post("login",user),
    postCadastro:(user) => api.post("User/",user)
}
export default sheets;