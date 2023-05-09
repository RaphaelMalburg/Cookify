import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { AiFillCheckCircle, AiFillInfoCircle } from 'react-icons/ai'
import { FaTimesCircle } from 'react-icons/fa'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegistrationForm = () => {
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

  const userRef = useRef()
  const errRef = useRef()


  useEffect(() => {
    useRef.current.focus() //- setar o foco quando o componente carrega

  },[])

  useEffect(() => {
    const result = USER_REGEX.test(user) //testa o resultado do regex com o username
    console.log(result)
    console.log(user)
    setValidName(result) //muda  a booleana para o resultado
  },[user])// é ativado toda vez que user for alterado

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));//testa password com regex
    setValidMatch(pwd === matchPwd); //testa a pass com a matchpass
    console.log(validPwd)
    console.log(pwd)
  }, [pwd, matchPwd]) //sempre que houver alteração

  useEffect(() => {
    setErrMsg('');
    }, [user, pwd, matchPwd])


  //---

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters');
    } else if (!/[A-Z]/.test(password)) {
      setErrorMessage('Password must contain at least 1 capital letter');
    } else {
      setErrorMessage('');
      // submit form data to server
    }
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-brown">
        <p ref={errRef} className={errMsg ? "bg-error text-light" : "hidden"} aria-live="assertive">{errMsg}</p>

      <h1 className="text-3xl font-bold text-darkGreen mb-8">Registration Form</h1>
      <form onSubmit={handleSubmit} className="bg-lightGreen p-10 rounded-lg">
        <div className="mb-4">
          <label htmlFor="username" className="block text-light  font-bold mb-2">Username</label>
          <input
          type="text"
          name="username"
          ref={userRef}
          autocomplete='off'
          value={username}
          onChange={(e)=> setUser(e.target.value)}
          required
          aria-invalid={validName ? 'false':'true'}
          aria-describedby='uidnote'
          onFocus={()=> setUserFocus(true)}
          onBlur={()=> setUserFocus(false)}
          className="border-2 border-green20 rounded-lg p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-light font-bold mb-2">Password</label>
          <input type="password" name="password" value={password} onChange={handlePasswordChange} className="border-2 border-green20 rounded-lg p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-light font-bold mb-2">Confirm Password</label>
          <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} className="border-2 border-green20 rounded-lg p-2 w-full" />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-gold text-light font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline hover:opacity-80 hover:text-lightGreen">Sign Up</button>
        </div>
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      </form>
    </section>
  );
};

export default RegistrationForm;
