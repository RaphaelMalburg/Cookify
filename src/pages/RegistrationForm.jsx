import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { AiFillCheckCircle, AiFillInfoCircle } from "react-icons/ai";
import { FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegistrationForm = () => {
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const userRef = useRef();
  const errRef = useRef();

  useEffect(() => {
    userRef.current.focus(); //- setar o foco quando o componente carrega
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user); //testa o resultado do regex com o username
    console.log(result);
    console.log(user);
    setValidName(result); //muda  a booleana para o resultado
  }, [user]); // é ativado toda vez que user for alterado

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd)); //testa password com regex
    setValidMatch(pwd === matchPwd); //testa a pass com a matchpass
    console.log(validPwd);
    console.log(pwd);
  }, [pwd, matchPwd]); //sempre que houver alteração

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

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
      setErrorMessage("Passwords do not match");
    } else if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters");
    } else if (!/[A-Z]/.test(password)) {
      setErrorMessage("Password must contain at least 1 capital letter");
    } else {
      setErrorMessage("");
      // submit form data to server
    }
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-brown">
      <p ref={errRef} className={errMsg ? "bg-error text-light" : "hidden"} aria-live="assertive">
        {errMsg}
      </p>

      <h1 className="text-3xl font-bold text-darkGreen mb-8">Registration Form</h1>
      <form onSubmit={handleSubmit} className="bg-darkGreen p-10 rounded-lg max-w-md w-1/2 transition ease-in-out delay-150  hover:-translate-y-1 focus:scale-105 duration-300">
        <div className="mb-4">
          <label htmlFor="username" className="block text-light  font-bold mb-2">
            Username
            <AiFillCheckCircle className={validName ? "text-success" : "hidden"} /> {/*checa se o valid name é true para mostar o check */}
            <FaTimesCircle className={validName || !user ? "hidden" : "text-error"} />
            {/**checa se e valid name é true e user está vazio*/}
          </label>
          <input
            type="text"
            name="username"
            ref={userRef}
            autocomplete="off"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
            className="border-2 border-green20 rounded-lg p-2 w-full"
          />
          <p id="uidnote" className={userFocus && user && !validName ? "bg-dark text-light p-1 text-sm" : "hidden"}>
            {/**se userFocus for true, user existir e validname for false  */}
            <AiFillCheckCircle className="text-error" />
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-light font-bold mb-2">
            Password
            <AiFillCheckCircle className={validPwd ? "text-success" : "hidden"} /> {/*checa se o valid pwd é true para mostar o check */}
            <FaTimesCircle className={validPwd || !pwd ? "hidden" : "text-error"} />
            {/**checa se e valid pwd é true e user está vazio*/}
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
            className="border-2 border-green20 rounded-lg p-2 w-full"
          />
          <p id="pwdnote" className={pwdFocus && !validPwd ? "bg-dark text-light p-1 text-sm" : "hidden"}>
            <FaTimesCircle className={"text-error"} />
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special character.
            <br />
            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span>{" "}
            <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
          </p>
        </div>

        <div className="mb-4">
          <label htmlFor="confirm_pwd" className="block text-light font-bold mb-2">
            Confirm Password
            <AiFillCheckCircle className={validMatch && matchPwd ? "text-success" : "hidden"} />
            <FaTimesCircle className={validMatch || !matchPwd ? "hidden" : "text-error"} />
          </label>
          <input
            type="password"
            id="confirm_pwd"
            onChange={(e) => setMatchPwd(e.target.value)}
            value={matchPwd}
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
            className="border-2 border-green20 rounded-lg p-2 w-full"
          />
          <p id="confirmnote" className={matchFocus && !validMatch ? "bg-dark text-light p-1 text-sm" : "hidden"}>
            <FaTimesCircle className={"text-error"} />
            Must match the first password input field.
          </p>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={!validName || !validPwd || !validMatch ? true : false}
            className="bg-gold text-light font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline hover:opacity-80 hover:text-lightGreen  disabled:opacity-25">
            Sign Up
          </button>
        </div>
        <div>
          <p className="text-light font-bold mb-2">
            Already registered?
            <br />
            <span className="line font-normal underline underline-offset-2">
              {/*put router link here*/}
              <Link href="#">Sign In</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default RegistrationForm;
