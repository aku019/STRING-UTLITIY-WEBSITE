const tosha1 = document.querySelector('#sha1-input');
const sha1Button = document.querySelector('#sha1-button');
//  const decode64=document.querySelector('#decode-64');
const outputsha1 = document.querySelector('#sha1-output');
sha1Button.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    outputsha1.value = CryptoJS.SHA1(tosha1.value);
});
