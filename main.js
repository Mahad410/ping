const btn = document.getElementById('btn');
const err = document.getElementById('err');
const input = document.getElementById('email');
console.log(btn);
console.log(err);
email.addEventListener('focus', () => {
    err.style.display = 'none';
    input.style.border = '1.5px solid var(--Blue)';
})

email.addEventListener('focusout', () => {
    if (email.value <= 0 || email.value == null || email.value == undefined || (email.value.indexOf('.com') == -1)) {
        err.style.display = 'flex';
        input.style.border = '1.5px solid var(--LightRed)';

    } else {
        errMsg.style.display = 'none';
    }
    console.log(email.value);
})
btn.addEventListener('click', () => {
    if (email.value == null || email.value == undefined || email.value == '' || (email.value.indexOf('@') == -1)) {
        err.style.display = 'flex';
        input.style.border = '1.5px solid var(--LightRed)';
    } else {
        return true;
    }
})