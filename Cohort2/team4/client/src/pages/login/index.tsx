import { useState } from "react";



const Login = () => {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const inputFields = ['Email', 'Password']

    const handleInputChange = (e: any, field: String) => {
        const value = e.target.value;
        if (field === 'Email') {
          setEmail(value);
        } else if (field === 'Password') {
          setPassword(value);
        }
      };

      //Tests Input
      const handleSubmit = (e: any) => {
        e.preventDefault()
        
        const form = {
            email: email,
            password: password
        }
        console.log(form)
      }

    return(
        <main className='h-screen w-screen'>
            <div className="min-h-3/6 flex justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg bo w-2/6 mt-24">
                    <h2 className="text-2xl font-bold mb-6">Login</h2>
                    <form onSubmit={(e) => {handleSubmit(e)}}>
                        {inputFields.map((field)=>{
                            return(
                            <div className="mb-4" key={field}>
                                <label htmlFor={field} className="block text-gray-700 text-sm font-bold mb-2">{field}</label>
                                <input onChange={(e) => {handleInputChange(e, field)}} type={field} id={field} name={field} className="w-full border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500" required />
                            </div>
                            )
                        })}
                    <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-3/6 hover:bg-blue-400 ">Log in</button>
                    </form>
                </div>
                </div>
        </main>
    )
};

export default Login

function preventDefault() {
    throw new Error("Function not implemented.");
}
