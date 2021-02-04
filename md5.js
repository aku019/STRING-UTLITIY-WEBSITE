const toMd5 = document.querySelector('#md5-input');
const md5Button = document.querySelector('#md5-button');
const outputMd5 = document.querySelector('#md5-output');
md5Button.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    outputMd5.value = CryptoJS.MD5(toMd5.value);
});
