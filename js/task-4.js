// Написала рішення з деструктуризацією 
const form = document.querySelector(".login-form");

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.target.elements;
  const obj = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  if (!obj.email || !obj.password) {
    return alert("All form fields must be filled in");
  }
    console.log(obj);
    event.target.reset();
}








// Написала ще звичаний варіант вирішення
// const form = document.querySelector(".login-form");

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const email = form.elements.email.value.trim();
//   const password = form.elements.password.value.trim();
//   const obj = {};
//   if (email === '' || password === '') {
//     alert("All form fields must be filled in");
//     return;
//   }
//   else {
//     obj.email = email;
//     obj.password = password;
//     console.log(obj);
//     form.reset();
//   }
// }