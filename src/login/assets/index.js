/* Listen events */

import { registerUser } from "../use-cases/register-user";

document.getElementById('btn__init-sesion').addEventListener('click', login);
document.getElementById('btn__init-register').addEventListener('click', register);
document.querySelector('#btn-register').addEventListener('click', dataUser);

window.addEventListener('resize', wihtPage);

/* Variables */
const boxInfrontLoginRegister = document.querySelector('.box__infront-login-register');
const loginform = document.querySelector('.login__form');
const registerform = document.querySelector('.register__form');
const boxBehindLogin = document.querySelector('.box__behind-login');
const boxBehindRegister = document.querySelector('.box__behind-register');



/* wihtPage();  */

function wihtPage() {
    
    if (window.innerWidth > 850) {
        boxBehindLogin.style.display = 'block';
        boxBehindRegister.style.display = 'block';
    
    }else {
        boxBehindRegister.style.display = 'block';
        boxBehindRegister.style.opacity = '1';
        boxBehindLogin.style.display = 'none';
        loginform.style.display = 'block';
        registerform.style.display = 'none';
        boxInfrontLoginRegister.style.left = '0px';
    }
}

function login() {

    if ( window.innerWidth > 850 ) {

        registerform.style.display = 'none';
        boxInfrontLoginRegister.style.left = '10px';
        loginform.style.display = 'block';
        boxBehindRegister.style.opacity = '1';
        boxBehindLogin.style.opacity = '0';
        boxInfrontLoginRegister.style.top = '-395px';
        
    }else {

        registerform.style.display = 'none';
        boxInfrontLoginRegister.style.left = '0px';
        loginform.style.display = 'block';
        boxBehindRegister.style.display = 'block';
        boxBehindLogin.style.display = 'none';
        
    }
}


function register() {
    
    if ( window.innerWidth > 850 ) {

        registerform.style.display = 'block';
        loginform.style.display = 'none';
        boxBehindRegister.style.opacity = '0';
        boxInfrontLoginRegister.style.left = '410px';
        boxBehindLogin.style.opacity = '1';
        boxInfrontLoginRegister.style.top = '-440px'          
    
    }else {

        registerform.style.display = 'block';
        boxInfrontLoginRegister.style.left = '0px';
        loginform.style.display = 'none';
        boxBehindRegister.style.display = 'none';
        boxBehindLogin.style.display = 'block';
        boxBehindLogin.style.opacity = '1';        
        
    }
}


function dataUser() {
    
    const infoUserData = Array.from(document.querySelectorAll('.register__form input')).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});
    const data = {
        nombre : infoUserData.name,
        correo: infoUserData.email,
        password: infoUserData.password,
        rol: 'USER_ROLE'
    }

    registerUser(data);
        
        
}



