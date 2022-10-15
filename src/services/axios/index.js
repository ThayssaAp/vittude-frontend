import axios from "axios";

async function Login(email, password) {
    const url = 'http://localhost:3010/login'

    const response = await axios.post(url, {
        email, password
    })

    if(response.data.message){
        window.alert(response.data.message)
    } else {
        window.alert(response.data.error)
    }
    return response.data
}

export default Login;