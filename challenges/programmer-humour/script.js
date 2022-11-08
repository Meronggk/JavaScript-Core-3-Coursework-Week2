const image = document.querySelector('#img');

fetch(`https://xkcd.now.sh/?comic=latest`)
.then((response) => response.json())
.then((data) => {
        createImg(data.img);
        })
    .catch((error) => (image.innerText = 'no image'))

    function createImg(url){
        const newImg = document.createElement('img');
        newImg.src = url;
        image.appendChild(newImg);
    }