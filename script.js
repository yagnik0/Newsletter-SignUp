"use strict";

const newsCard = document.querySelector('.grid-content-news');
const successCard = document.querySelector('.success-content');
const submitBtn = document.querySelector('.btn-primary');
const dismissBtn = document.querySelector('.btn-secondary');
const error = document.querySelector('.error-message')
const emailId = document.getElementById('main-id');
const idShown = document.getElementById('id-success');
const inputField = document.querySelector('.input-field')


submitBtn.addEventListener('click', () => {

    const userEmail = emailId.value;
    if(!userEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        emailId.style.border = "3px solid red";
        error.classList.remove('hidden');
    } else {
        idShown.textContent = userEmail;
        newsCard.classList.add('hidden');
        successCard.classList.remove('hidden');
    }
    
})

dismissBtn.addEventListener('click', () => {
    newsCard.classList.remove('hidden');
    successCard.classList.add('hidden');
    emailId.value = "";
    emailId.style.border = "";
    error.classList.add('hidden');
})


inputField.addEventListener('focus', () => {
    error.classList.add('hidden')
     emailId.style.border = "2px solid grey"
})







