
/*
Thank you for this oportunity!

Att,
Thiago N.
*/


import initDropdownMenu from './modules/dropdown-menu.js';
import initGlider from './modules/mainGlider.js';
import initWindowSize from './modules/windowSize.js';
initDropdownMenu();
initGlider();


// with vanilla
window.addEventListener('load', function () {
  initWindowSize();
  const btnMobile = document.getElementById('btn-mobile');
  const btnVideoOne = document.getElementById('btn-video-one');
  const btnVideoTwo = document.getElementById('btn-video-two');
  const btnCloseModal = document.getElementById('btn-close');
  const modal = document.getElementById('modal');
  const videoSrc = document.querySelector("#modal iframe")
  const src = videoSrc.getAttribute("src");

  function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
      event.currentTarget.setAttribute('aria-label', 'Close Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Open Menu');
    }
  }
  function openModal() {
    modal.classList.add('active');
    videoSrc.setAttribute('src', `${src}?autoplay=1`)
  }

  function closeModal() {
    modal.classList.remove('active');
    videoSrc.setAttribute("src", '');
  }

  btnMobile.addEventListener('click', toggleMenu);
  btnMobile.addEventListener('touchstart', toggleMenu);
  btnVideoOne.addEventListener('click', openModal);
  btnVideoTwo.addEventListener('click', openModal);
  btnCloseModal.addEventListener('click', closeModal)

});

// with jQuery
$(document).ready(function () {

  $("#website").css({ 'display': 'none' })

  let phoneMask = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
  },
    options = {
      onKeyPress: function (val, e, field, options) {
        field.mask(phoneMask.apply({}, arguments), options);
      }
    };

  $('#phone').mask(phoneMask, options);

  $.validator.addMethod(
    "regex",
    function (value, element, regexp) {
      let re = new RegExp(regexp);
      return this.optional(element) || re.test(value);
    },
    "Por favor, o password deve possuir de 6 a 10 caracteres, conter uma letra maiúscula e uma letra minúscula."
  );

  $("#form").validate({
    errorPlacement: function (error, element) {
      error.insertBefore(element);
    },
    errorElement: 'span',
    errorClass: 'span_error',
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true
      },
      ocupation: {
        required: true
      },
      website: {
        url: true,
        required: '#site:checked'
      },
      no_website: {
        website: {
          required: false,
        }

      },
      password: {
        required: true,
        minlength: 6,
        maxlength: 10,
      },
      password_confirm: {
        equalTo: "#password",
      },

    },
    messages: {
      name: {
        required: "Por favor, informe seu nome.",
        minlength: "O nome deve ter pelo menos 3 caracteres."
      },
      email: {
        required: "Por favor, informe um email.",
        email: "Por favor, informe um e-mail válido."
      },
      ocupation: {
        required: "Por favor, informe um cargo."
      },
      phone: {
        required: "Por favor, informe um telefone fixo ou celuar com o DDD."
      },
      password: {
        minlength: "Mínimo 6 caracteres, conter uma letra maiúscula e uma letra minúscula.",
        maxlength: "Máximo 10 caracteres, conter uma letra maiúscula e uma letra minúscula.",
        required: "Por favor, informe uma senha."
      },
      password_confirm: {
        equalTo: "A senha deve ser igual ao que foi digitado no campo acima.",
        required: "Por favor, confirme a senha senha."
      },
      website: {
        url: "Por favor, insira uma URL válida.",
        required: "Por favor, insira o endereço do seu site."
      }
    }
  });

  $('form').submit(function (e) {
    let form = this;
    e.preventDefault();
    $('#form').html("<h3 class='feedback'>Obrigado!, entraremos em contato</h3>");

    setTimeout(function () {
      form.submit();
    }, 5000); // in milliseconds

    $("<p>Delay...</p>").appendTo("body");
  });

  $("#password").rules("add", { regex: "((?=.*\d)(?=.*[A-Z]).{6,10})" });


  $("#site").click(function () {
    if ($(this).val.length > 0) {
      $("#website").css({ 'display': 'block' })
    }
  })
  $("#no_website").click(function () {
    if ($(this).val.length > 0) {
      $("#website").css({ 'display': 'none' })
    }
  })


  $(".show-hide-pass").click(function () {
    $(this).toggleClass("active");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

});
