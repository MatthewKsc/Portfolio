function reavelFunction(ele){
    const reavel = document.getElementById(ele);
    if(reavel.style.display === 'none'){
        reavel.style.display = 'block';
    }
}

function hideFunction(ele){
    const hide = document.getElementById(ele)
    hide.style.display = "none";
}

function navigateTo(element){
    window.open(element);
}

const navSlide = () =>{
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');

    console.log(menu)
    menu.addEventListener("click", () => {
        nav.classList.toggle('nav-active');
        menu.classList.toggle('toggle');
    });
}

//simple send email concept of method
const sendEmail = () =>{
    const sendButton = document.querySelector('.btn');

    sendButton.addEventListener("click", ()=>{

        const company = document.getElementById('company').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        //concat whole message
        const sendMessange = concatMessage(company, email, message);

        //check if form is filled
        if(company === "" || email === "" || message === "" || !emailCheck(email)){
            alert("Contact form must be filled out");
        }else{
            //simple alert
            alert("Email Sended");
            //clear input fileds after sended
            document.getElementById('company').value='';
            document.getElementById('email').value='';
            document.getElementById('message').value='';
        }

        //to check data in consol
        console.log(sendMessange);
    });
}

function concatMessage(company, email, message ){
    return "Comapny: " +company + "\nEmail: "+email+"\nMessage: "+message;
}

function emailCheck(emailToCheck){

    //const expression = /\S+@\S+/ <--- simpler
    
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i

    return expression.test(String(emailToCheck).toLowerCase())
}

navSlide();
sendEmail();
