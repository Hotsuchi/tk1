import axios from 'axios';
import { useEffect,useState } from 'react';

const Home = ({setMainPage})=>{
    const [ userInfo,setUserInfo ] = useState({});
    
    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem('jwtoken'));
        
        axios.get('http://localhost:5000/user',{headers:{Authorization:`Bearer ${token}`}})
        .then((resp)=>{
            setUserInfo({...resp.data})
        })
        .catch((err)=>{
            setMainPage('login');
        })
    },[])
    
    const logout = ()=>{
        localStorage.removeItem('jwtoken');
    }
    
    return(
        <div>
            {userInfo.uid}
            <button onClick={logout} className='border'>Log Out</button>
        </div>
    )
}

export default Home;