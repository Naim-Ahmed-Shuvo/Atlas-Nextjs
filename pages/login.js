import GoogleLogin from "react-google-login"

const Login = () => {

    const handleSuccess = (res) => {
      console.log(res)
    }

    const handleFailure = (err) => {
      console.log(err)
    }

    return (
        <div className=" h-screen w-full bg-slate-200 flex items-center justify-center">
            <div className="bg-gray-100  w-80 h-80 mx-auto flex items-center justify-center">
                <GoogleLogin
                  clientId=""
                  onSuccess={(res)=>handleSuccess(res)}
                  onFailure={(err)=>handleFailure(err)}
                  cookiePolicy={'single_host_origin'}
                />
            </div>
        </div>
    )
}

export default Login
