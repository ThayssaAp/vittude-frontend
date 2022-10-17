import axios from "axios";

async function Login(email, password) {
    const url = 'http://localhost:3010/login'
    const response = await axios.post(url, {
        email, password
    })

    if(response.data.message){
        return response.data.message
    } else {
        return response.data.error
    }
}

export default Login;