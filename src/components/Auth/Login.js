import { useState } from 'react';
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiService';
import { toast } from 'react-toastify';
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    const handleRegister = async () => {
        navigate('/register')
    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleLogin = async () => {
        //validate
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('Invalid email')
            return;
        }
        if (!password) {
            toast.error('Invalid password')
            return;
        }
        //submit apis
        let data = await postLogin(email, password);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/')
        }

        if (data && +data.EC !== 0) {
            toast.error(data.EM);
        }
    }


    return (
        <div className="login-container">
            <div className='header'>
                <span>Don't have an account yet ?</span>
                <button className='btn-sign up' onClick={() => handleRegister()}>Sign up</button>
            </div>

            <div className='title col-4 mx-auto'>
                Đăng Nhập
            </div>

            <div className='welcome col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type={"email"}
                        className="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

            </div>

            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Mật Khẩu</label>
                    <input
                        type={"password"}
                        className="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <span className='forgot-password'>Bạn quên mật khẩu ?</span>
                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleLogin()}
                    >Đăng Nhập Quizz Huflit</button>
                </div>
                <div className='text-center'>
                    <span className="back" onClick={() => { navigate('/') }}> &#60;&#60; Đi Đến Trang Chủ</span>
                </div>
            </div>

        </div>
    )
}

export default Login;