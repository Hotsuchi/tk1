import { IoArrowBackCircleOutline } from "react-icons/io5";

const Signup = ({setMainPage})=>{
    return(
        <div className='bg-slate-800 text-white w-screen min-h-[100vh]'>
            
            <div className='flex justify-between items-center px-4 py-2'>
                <h2 className='text-2xl font-bold'>Register Form</h2>
                <IoArrowBackCircleOutline onClick={()=>setMainPage('login')}fontSize={30}/>
            </div>
            
            <div className='w-screen min-h-[70vh] flex justify-center items-center p-4'>
                <form className='w-[100%] flex flex-col gap-4 md:w-[70%]'>
                    <div>
                        <div>Email :</div>
                        <input type='email' name='uemail' placeholder='email' required className='outline-none bg-white text-black rounded px-4 py-2 w-[100%]'/>
                    </div>
                    <div>
                        <div>Full Name :</div>
                        <input type='text' name='ufullname' placeholder='full name' required className='outline-none bg-white text-black rounded px-4 py-2 w-[100%]'/>
                    </div>
                    <div>
                        <div>
                            Profile Image :<input type='file' name='uemail' className='shadow border rounded w-[100%] px-4 py-2'/>
                        </div>
                    </div>
                    <div>
                        <div>Gender :</div>
                        <div className='flex justify-center items-center gap-4'>
                            <div className='flex justify-center items-center gap-1'>
                                <input type='radio' name='gender' id='male' value='male'/>
                                <label for='male' className='font-bold'>Male</label>
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <input type='radio' name='gender' id='female' value='female'/>
                                <label for='female' className='font-bold'>Female</label>
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <input type='radio' name='gender' id='other' value='other'/>
                                <label for='other' className='font-bold'>Other</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>User Name :</div>
                        <input type='text' name='uname' placeholder='user name' required className='outline-none bg-white text-black rounded px-4 py-2 w-[100%]'/>
                    </div>
                    <div>
                        <div>Password :</div>
                        <input type='password' name='upass' placeholder='password' required className='outline-none bg-white text-black rounded px-4 py-2 w-[100%]'/>
                    </div>
                    <div className='flex items-center gap-1 mt-6'>
                        <input value='yes' type='checkbox' name='uterm' required/>I agree accept all <span className='font-bold text-blue-700'>Term & Condition</span>
                    </div>
                    <div>
                        <button type='submit' className='bg-cyan-700 text-white font-bold w-[100%] py-2 rounded'>Register</button>
                    </div>
                </form>
            </div>
            <div className='text-center py-8'>
                Have already an account ? <span onClick={()=>setMainPage('login')} className='font-bold text-blue-700 border-b'>Log In</span>
            </div>
        </div>
    )
}

export default Signup;