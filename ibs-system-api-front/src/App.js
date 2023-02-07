import logo from './logo.svg';
import './App.css';
import LoginForm from './component/LoginForm';
function App() {
  return (
    <div>
      <div className='flex max-w-2xl mx-auto shadow border-b'></div>
      <div className='px-8 py-8'></div>
      <div className='font-thin text-2xl tracking-wider'>
        <h2> Sign In</h2>
      </div>
      <div className='items-center justify-center h-14 w-full'>
        <label className='block text-gray-600 text-sm'>first name</label>
        <input 
        type='text' 
        name="firstName" 
        className='h-10 w-96 border mt-2 px-2 py-2'></input>
      </div>
      <div className='items-center justify-center h-14 w-full py-10'>
        <label className='block text-gray-600 text-sm'>last name</label>
        <input type='text' name="lastName" 
        className='h-10 w-96 border mt-2 px-2 py-2'></input>
      </div>
      <div className='items-center justify-center h-14 w-full py-10'>
        <label className='block text-gray-600 text-sm px-8'>Email</label>
        <input type='email' name="emailId" 
        className='h-10 w-96 border mt-2 px-2 py-2'></input>
      </div>
      <div className='items-center justify-center h-14 w-full py-10 my-4 space-x-4 pt-4'>
        <button 
        className='rounded text-white font-semibold bg-green-400 py-2 px-4 hover:bg-green-700'>Save</button>
        <button 
        className='rounded text-white font-semibold bg-red-400 py-2 px-4 hover:bg-red-700'>Clear</button>
      </div>
      
    </div>
  );
}

export default App;
