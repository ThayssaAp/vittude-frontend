import axios from "axios";

async function Login(email, password) {
    const url = 'https://vittude-api-mock.onrender.com/login'
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