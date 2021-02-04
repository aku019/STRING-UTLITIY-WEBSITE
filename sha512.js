const tosha512 = document.querySelector('#sha512-input');
const sha512Button = document.querySelector('#sha512-button');
//  const decode64=document.querySelector('#decode-64');
const outputsha512 = document.querySelector('#sha512-output');
sha512Button.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    outputsha512.value = CryptoJS.SHA512(tosha512.value);
});
