const btn = document.querySelector('#btn1');
const Btn = document.querySelector('#btn2');
const ul = document.querySelector('#ul');

btn.addEventListener('click', () => {
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((response) => response.json())
    .then((data) => {
        createImg(data.message);
    })
    .catch((error) => (ul.innerText = 'no image'))

});


function createImg(url){
const li = document.createElement('li');
const img = document.createElement('img');
img.src = url;
li.appendChild(img);
ul.appendChild(li);

}
Btn.addEventListener('click', () => {
    ul.innerHTML = '';
})