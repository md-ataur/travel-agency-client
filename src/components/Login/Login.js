import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogin = () => {
        setIsLoading(true);
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <div className="w-full lg:w-11/12 xl:w-10/12 m-auto py-3 px-4">
            <div className="max-w-lg m-auto">
                <h3 className="text-3xl text-center font-medium text-gray-700 my-6">PLEASE LOGIN</h3>
                <div className="text-center"><button onClick={handleGoogleLogin} className="py-3 px-5 rounded text-white bg-yellow-500 hover:bg-red-600">Login with Google</button></div>
            </div>
        </div>
    );
};

export default Login;