
const form = document.getElementById("form");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");


function error(input, message) {
    input.className = "form-control is-invalid"
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = "invalid-feedback"
}

function success(input) {
    input.className = "form-control is-valid"
}

// validateEmail değiştirildi. checkEmail yazıldı yerine
// function validateEmail(email) {
//     const r = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     return re.test(String(email).toLowerCase());
// };
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    if (re.test(input.value)) {
        success(input);
    } else {
        error(input, "Hatalı bir mail adresi")
    }
};


function checkRequired(inputs) {

    inputs.forEach(function (input) {

        if (input.value === "") {
            error(input, `${input.id} is required.`);
        } else {
            success(input);
        }

    });
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} en az ${min} karakter olmalıdır.`)
    } else if (input.value.length > max) {
        error(input, ` ${input.id} en fazla ${max} karakter olmalıdır.`)
    } else {
        success(input);
    }
}

function checkPasswords(input1, input2) {
    if (input1.value !== input2.value) {
        error(input2, "Parolalar eşleşmiyor")
    }
}

function checkPhone(input) {
    var exp = /^\d{10}$/;
    if (!exp.test(input.value)) {
        error(input, "Telefon 10 Karakterli olmalıdır.")
    } else {
        success(input);
    }
}


form.addEventListener("submit", function (e) {
    e.preventDefault();

    checkRequired([userName, email, password, repassword, phone]);
    checkEmail(email);
    checkLength(userName, 7, 15);
    checkLength(password, 7, 12);
    checkPasswords(password, repassword);
    checkPhone(phone);

});


/////////////////////////////////////////////////////////////////////7



// function checkRequired(input) {
//     if (input.value === "") {
//         error(input, "Gerekli Alan");
//     } else {
//         success(input);
//     }
// }

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     checkRequired(userName);
//     checkRequired(email);
//     checkRequired(password);
//     checkRequired(repassword);
// });


//////////////////////////////////////////////////////////////////////


// form.addEventListener("submit", function (e) {

//     e.preventDefault();

//     if (userName.value === "") {
//         error(userName, "UserName Gerekli");
//     } else {
//         success(userName);
//     }

//     if (email.value === "") {
//         error(email, "Email Gerekli");
//     } else if (!validateEmail(email.value)) {
//         error(email, "Düzgün bir Email adresi giriniz")
//     } else {
//         success(email);
//     }

//     if (password.value === "") {
//         error(password, "Password Gerekli");
//     } else {
//         success(password);
//     }

//     if (repassword.value === "") {
//         error(repassword, "Repassword Gerekli");
//     } else {
//         success(repassword);
//     }

// });




