import { useState } from 'react';
import './Register.scss';
import { useNavigate } from 'react-router-dom';
import { postRegister } from '../../services/apiService';
import { toast } from 'react-toastify';
const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [setIsShowPassword] = useState(false); //isShowPassword có sử dụng thì thêm vào trong ngoặc[]
    const navigate = useNavigate();
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }
    const handleLogin = async () => {
        navigate('/login')
    }
    const handleRegister = async () => {
        //validate
        //const isValidEmail = validateEmail(email)
        //if (!isValidEmail) {
        //   toast.error('Invalid email')
        // return;
        //}

        //if (!password) {
        //  toast.error('Invalid password')
        //return;
        //}
        //submit apis
        let data = await postRegister(email, password, name);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/register')
        }

        if (data && +data.EC !== 0) {
            toast.error(data.EM);
        }
    }
    return (
        <div className="register-container">
            <div className="register-header">
                Already have an account?
                <button onClick={() => navigate('/login')}>Log in</button>
            </div>
            <div className="register-title col-4 mx-auto">
                Đăng Ký
            </div>
            <div className="register-welcome col-4 mx-auto">
                hello
            </div>
            <div className="register-content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email *</label>
                    <input
                        type={"email"}
                        className="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group pass-group">
                    <label>Password *</label>
                    <input
                        type={"password"}//isShowPassword ? "text" : (trong ngoặc{} trước password)
                        className="form-control"
                        value={email}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {/* {isShowPassword ?
                        <span className="icons-eye">
                            onClick={() => setIsShowPassword(false)}
                        </span>
                        :
                        <span className="icons-eye">
                            onClick={() => setIsShowPassword(true)}
                        </span>
                    } */}
                </div>
                <div className="form-group">
                    <label>Tên</label>
                    <input
                        type={"name"}
                        className="form-control"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleRegister()}
                    >Đăng Ký Quizz Huflit</button>
                </div>
                <div className='text-center'>
                    <span onClick={() => { navigate('/') }} className="register-back"> &#60;&#60; Đi Đến Trang Chủ</span>
                </div>
            </div>
        </div>
    )
}
export default Register;