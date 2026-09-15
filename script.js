let nameItems = document.querySelectorAll('.name_item');
let previewImage = document.querySelector('.image');

nameItems.forEach(nameItem => {
    nameItem.addEventListener('mousemove', function mouseNameItem(e) {
        previewImage.style.left = e.clientX + 10 + 'px';
        previewImage.style.top = e.clientY - 70 + 'px';
        previewImage.style.display = 'block';

        let imageName = 'img/' + nameItem.textContent + '.jpg';
        previewImage.src = imageName;
    });

    nameItem.addEventListener('mouseleave', () => {
        previewImage.style.display = 'none';
    });
});
