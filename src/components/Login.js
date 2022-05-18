import {useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import {UserContext} from '../context/UserContext';
import Bucket from "../images/bucket.png";

const Login = () => {
    const {loginUser, wait, loggedInCheck} = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);
    const [errMsg, setErrMsg] = useState(false);
    const [formData, setFormData] = useState({
        email:'',
        password:''
    });

    const onChangeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const submitForm = async (e) => {
        e.preventDefault();

        if(!Object.values(formData).every(val => val.trim() !== '')){
            setErrMsg('Please Fill in all Required Fields!');
            return;
        }

        const data = await loginUser(formData);
        if(data.success){
            e.target.reset();
            setRedirect('Redirecting...');
            await loggedInCheck();
            return;
        }
        setErrMsg(data.message);
    }

    return (
        <div className="myform">
            <img className="bucket" alt="bucket" src={Bucket} />
            <h3>Login!</h3>
            <form onSubmit={submitForm}>
                <input className='mb-3' type="email" name="email" onChange={onChangeInput} placeholder="Your email" id="email" value={formData.email} required />
                <input className='mb-3' type="password" name="password" onChange={onChangeInput} placeholder="New password" id="password" value={formData.password} required />
                {errMsg && <div className="err-msg">{errMsg}</div>}
                {redirect ? redirect : <button type="submit" disabled={wait}>Login</button>}

                <div className="bottom-link info">Dont have an account yet?</div>
                <div className="bottom-link"><Link to="/signup">Sign Up</Link></div>
            </form>
        </div>
    )
}

export default Login;