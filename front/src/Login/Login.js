import React, { useState } from 'react';
import './styled.css';
import imagem from '../img/fundo.jpg';

import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Login = () => {
    const [email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }
    return (
       
        <div className="login">
           
            
            <div className="login-right">
              
                <h1>Login</h1>

                <div className="login-InputEmail">
                    <MdEmail />
                    <input
                        type="text"
                        placeholder="Digite seu E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="login-InputPassword">
                    <MdLock />
                    <input
                        placeholder="Digite sua senha"
                        type={show ? "text" : "Password"}
                        value={Password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div className="login-eye">
                        {show ? (
                            <HiEye 
                            size={20}
                            onClick={handleClick}
                            />
                        ) : (
                            <HiEyeOff 
                            size={20}
                            onClick={handleClick}
                            />


                        )}

                    </div>
                </div>
                <button type="submit">
                    Entrar
                </button>
                <h4>Não tem conta?</h4>

                <button type="submit">
                    Cadastre aqui!
                </button>
            </div>
        </div>
       
    )
}

export default Login;