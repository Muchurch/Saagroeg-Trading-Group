const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const eye = document.querySelector('.eye');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnLogin.addEventListener('click', () => { 
    wrapper.classList.add('active-popup'); 
});

iconClose.addEventListener('click', () => { 
    wrapper.classList.remove('active-popup'); 
});

disappear.addEventListener('click', () => { 
    wrapper.classList.remove('active-popup'); 
});


var state= false;
function toggle(){
    if(state){
	document.getElementById("password").setAttribute("type","password");
	document.getElementById("eye").style.color='#7a797e';
    document.getElementById("password2").setAttribute("type","password");
	document.getElementById("eye2").style.color='#7a797e';
	state = false;
     }
     else{
	document.getElementById("password").setAttribute("type","text");
	document.getElementById("eye").style.color='#d23e3e';
    document.getElementById("password2").setAttribute("type","text");
	document.getElementById("eye2").style.color='#d23e3e';
	state = true;
     }
}

