import {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import {UserContext} from '../context/UserContext';
import Bucket from "../images/bucket.png";

const Register = () => {
    const {registerUser, wait} = useContext(UserContext);
    const [errMsg, setErrMsg] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        age: '',
        nationality: ""
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
            setSuccessMsg(false);
            setErrMsg('Please Fill in all Required Fields!');
            return;
        }

        const data = await registerUser(formData);
        if(data.success){
            e.target.reset();
            setSuccessMsg('You have successfully registered.');
            setErrMsg(false);
        }
        else if(!data.success && data.message){
            setSuccessMsg(false);
            setErrMsg(data.message);
        }
        
    }

    return (
        <div className="myform">
            <img className="bucket" alt="bucket" src={Bucket} />
            <h3 className="mb-4">Create your account!</h3>
            <form onSubmit={submitForm}>
                <input className='mb-3' type="text" name="name" onChange={onChangeInput} placeholder="Your name" id="name" value={formData.name} required />
                <input className='mb-3' type="email" name="email" onChange={onChangeInput} placeholder="Your email" id="email" value={formData.email} required />
                <input className='mb-3' type="password" name="password" onChange={onChangeInput} placeholder="New password" id="password" value={formData.password} required />
                <input className='mb-3' type="nationality" name="nationality" onChange={onChangeInput} placeholder="Choose nationality" id="nationality" value={formData.nationality} required />
                <input className='mb-3' type="age" name="age" onChange={onChangeInput} placeholder="Choose age" id="age" value={formData.age} required />
                
                {successMsg && <div className="success-msg">{successMsg}</div>}
                {errMsg && <div className="err-msg">{errMsg}</div>}
                <button type="submit" disabled={wait}>Create your account!</button>
                <div className="bottom-link"><Link to="/login">↩️</Link></div>
            </form>
        </div>
    )
}

export default Register;
