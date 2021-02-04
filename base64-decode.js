const string64 = document.querySelector('#string-64-decoded');
const decode64 = document.querySelector('#decode-64');
const output64 = document.querySelector('#output-decoded-string');
decode64.addEventListener('click', () => {
    output64.value = atob(string64.value);
});
