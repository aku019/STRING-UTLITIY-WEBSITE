const url = document.querySelector('#url');
const decode = document.querySelector('#decode');
const output = document.querySelector('#output-url');

decode.addEventListener('click', () => {
    output.value = decodeURIComponent(url.value);
});
