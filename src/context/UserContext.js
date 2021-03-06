import {createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const UserContext = createContext();

export const Axios = axios.create({
    baseURL: 'http://localhost/php-auth-api/',
});

export const UserContextProvider = ({ children }) => {

    const [theUser, setUser] = useState(null);
    const [theUserList, setUserList] = useState(null);
    const [allUsersList, setAllUsersList] = useState(null);
    const [wait, setWait] = useState(false);

    const registerUser = async ({name,email,password,nationality,age}) => {
        setWait(true);
        try{
            const {data} = await Axios.post('register.php',{
                name,
                email,
                password,
                nationality,
                age
            });
            setWait(false);
            return data;
        }
        catch(err){
            setWait(false);
            return {success:0, message:'Server Error!'};
        }
    }

    const loginUser = async ({email,password}) => {
        setWait(true);
        try{
            const {data} = await Axios.post('login.php',{
                email,
                password 
            });
            if(data.success && data.token){
                localStorage.setItem('loginToken', data.token);
                setWait(false);
                return {success:1};
            }
            setWait(false);
            return {success:0, message:data.message};
        }
        catch(err){
            setWait(false);
            return {success:0, message:'Server Error!'};
        }

    }

    const loggedInCheck = async () => {
        const loginToken = localStorage.getItem('loginToken');
        Axios.defaults.headers.common['Authorization'] = 'Bearer '+loginToken;
        if(loginToken){
            const {data} = await Axios.get('getUser.php');
            if(data.success && data.user){
                setUser(data.user);
                setUserList(data.userlist);
                setAllUsersList(data.userAlllist);
                return;
            }
            setUser(null);
            setUserList(null);
            setAllUsersList(null);
        }
    }

    useEffect(() => {
        async function asyncCall(){
            await loggedInCheck();
        }
        asyncCall();
    },[]);

    const logout = () => {
        localStorage.removeItem('loginToken');
        setUser(null);
        setUserList(null);
    }

    return (
        <UserContext.Provider value={{registerUser,loginUser,wait, user:theUser,userList:theUserList,userAllList:allUsersList,loggedInCheck,logout}}>
            {children}
        </UserContext.Provider>
    );

}

export default UserContextProvider;