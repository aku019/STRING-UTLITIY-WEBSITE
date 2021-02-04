const tosha256 = document.querySelector('#sha256-input');
const sha256Button = document.querySelector('#sha256-button');
const outputsha256 = document.querySelector('#sha256-output');
sha256Button.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    outputsha256.value = CryptoJS.SHA256(tosha256.value);
});
