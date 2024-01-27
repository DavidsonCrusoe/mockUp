console.log('Hello World!');

function navigateNew(){
  
  window.location.href="/main/New/New.html"
}

function navigateHome(){
  
  window.location.href="/main/main.html"
}

function navigateLogin(){
  
  window.location.href="/main/login/login.html"
}

document.getElementById('buttonBack')
.addEventListener('click',function() {
history.back();
})

function buyAlert(){
  
  alert('you are not logged in yet. Please log in or register account.'),
  window.location.href="/main/login/login.html"
}

  function pleaseRegister(){
    alert('This Account is not found. Please check the spelling or Register!')
  }
  
  function Register(){
    alert('Thank you for your registration! We will keep in touch towards your Portfolio development')
    
    this.UserId = new UserId (UserId.length + 1);
    document.getElementById('registerMail') = new eMail;
    document.getElementById('getNewsLetter') = new newsletter;
    document.getElementById('firstPassword') = new password;
    document.getElementById('getFirstName') = new firstName;
    document.getElementById('getLastName') = new lastName;
  }


class User {
  constructor(UserId = 0, firstName, lastName, eMail, password, birthDay, mewsletter) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.eMail = eMail;
  this.password = password;
  this.birthDay = birthDay;
  this.newsletter = newsletter;
}
}
