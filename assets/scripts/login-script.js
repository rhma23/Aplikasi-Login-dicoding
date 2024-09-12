/** @mudule Login-Script */
/**
* Membuat variabel loginFormElement untuk tampilan form.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');


/**
* Membuat variabel inputEmailElement untuk tampilan input email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');


/**
* Membuat variabel inputPasswordElement untuk tampilan input password.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');


/**
* Membuat variabel expectedEmail untuk menyimpan informasi email semenatara.
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';


/**
* Membuat variabel expectedPassword untuk menyimpan informasi password semenatara.
* @constant {string}
*/
const expectedPassword = 'superpassword';


/* Comment " Menambahkan aksi klik pada button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /** 
  * Membuat variabel email untuk menyimpan nilai email yang didapatkan saat button ditekan. 
  * @contant {string}
  */
  const email = inputEmailElement.value;

  /** 
  * Membuat variabel password untuk menyimpan nilai password yang didapatkan saat button ditekan. 
  * @contant {string}
  */
  const password = inputPasswordElement.value;


  /* Comment : Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {

    /* Comment : Jika sesuai maka program akan berpindah ke halamam home. */
    goToHome();
    
  } else {
    
    /* Comment : Namun jika tidak sesuai maka akan menmapilkan informasi bahwa inputan salah. */
    showPopUp();

    
  }
});
