let nameItems = document.querySelectorAll('.name_item');
let image = document.querySelector('.image');

nameItems.forEach(nameItem => {

    nameItem.addEventListener('mousemove', function mouseNameItem(e) {
        image.style.left = e.clientX + 10 +'px';
        image.style.top = e.clientY - 70 + 'px';
        image.style.display = 'block';
        let nameImage = "img/" + nameItem.textContent + ".jpg";
        image.src = nameImage;
    });

    
    nameItem.addEventListener('mouseleave', () => {
        image.style.display = 'none';
    });

    nameItem.addEventListener('click', (e) => {
        
    })

});





