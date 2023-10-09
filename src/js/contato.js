const handleSubmit=event => {
  event.preventDefault()

  const myForm=event.target
  const formData=new FormData(myForm)

  myForm.classList.add('was-validated')
  if (!myForm.checkValidity()) {
    myForm.querySelectorAll(':invalid')[0].focus()
    return
  }

  const recaptcha_box_checked=(grecaptcha.getResponse())? true:false;

  if (!recaptcha_box_checked) {
    document.getElementById('recaptcha_invalid').classList.remove('hidden')
    document.getElementById('recaptcha_invalid').focus()
    return false;
  }


  fetch(myForm.getAttribute('action'), {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: new URLSearchParams(formData).toString(),

  })
    .catch(error => {
      console.log(error)
      result.innerHTML='Something went wrong!'
    })
    .then(() => console.log('Sucesso'))
    .then(() => document.getElementById("emailenviado").classList.add('opacity-0'))
    .then(() => document.getElementById("emailsucesso").classList.remove('opacity-0'))
    .then(() => document.getElementById("emailsucesso").classList.add('opacity-100'))
    .then(() => document.getElementById("emailsucesso").classList.remove('scale-0'))
    .then(() => document.getElementById("emailsucesso").classList.add('scale-100'))
    .then(() => document.getElementById("emailenviado").classList.add('hidden'))
    .then(() => document.getElementById("emailenviado").classList.add('h-0'))
    .then(function () {
      form.reset()
      form.classList.remove('was-validated')
      setTimeout(() => {
        result.style.display='none'
      }, 5000)
    });
}


function contatoForm() {
  document.querySelector('form').addEventListener('submit', handleSubmit)

}


// Run once when page loads
if (document.readyState==='complete') {
  contatoForm();
} else {
  document.addEventListener('DOMContentLoaded', () => contatoForm());
}

// Run after every additional navigation by swup
// swup.hooks.on('page:view', () => contatoForm());


// const form=document.getElementById('form')
// const result=document.getElementById('result')

// form.addEventListener('submit', e => {
//   e.preventDefault()

//   form.classList.add('was-validated')
//   if (!form.checkValidity()) {
//     form.querySelectorAll(':invalid')[0].focus()
//     return
//   }
//   const formData=new FormData(form)

//   result.innerHTML='Sending...'

//   fetch(form.getAttribute('action'), {
//     method: 'POST',
//     headers: {
//       Accept: 'application/x-www-form-urlencoded;charset=UTF-8',
//       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
//     },
//     body: new URLSearchParams(formData).toString(),
//     // body: json,
//   })
//     .catch(error => {
//       console.log(error)
//       result.innerHTML='Something went wrong!'
//     })
//     .then(() => console.log('Sucesso'))
//     // .then(function () {
//     //   form.reset()
//     //   form.classList.remove('was-validated')
//     //   setTimeout(() => {
//     //     result.style.display = 'none'
//     //   }, 5000)
//     // })
//     .then(() =>
//       document.getElementById('emailenviado').classList.add('opacity-0'),
//     )
//     .then(() =>
//       document.getElementById('emailsucesso').classList.remove('opacity-0'),
//     )
//     .then(() =>
//       document.getElementById('emailsucesso').classList.add('opacity-100'),
//     )
//     .then(() =>
//       document.getElementById('emailsucesso').classList.remove('scale-0'),
//     )
//     .then(() =>
//       document.getElementById('emailsucesso').classList.add('scale-100'),
//     )
//     .then(() =>
//       document.getElementById('emailenviado').classList.add('hidden'),
//     )
//     .then(() => document.getElementById('emailenviado').classList.add('h-0'))
// })
