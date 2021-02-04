const string64En = document.querySelector('#string-64-encoded');
const encode64 = document.querySelector('#encode-64');
const output64Encode = document.querySelector('#output-encoded-string');
encode64.addEventListener('click', () => {
    output64Encode.value = btoa(string64En.value);
});
