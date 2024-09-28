const dragArea = document.querySelector('.container'),
dragText = dragArea.querySelector('h3'),
button = dragArea.querySelector('button'),
input = dragArea.querySelector('input');

let myFile;

button.onclick = () => {
    input.click()
}
input.addEventListener('change', function () {
    myFile = this.files[0];
    dragArea.classList.add('active');

    showMe()
})

dragArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dragArea.classList.add('active');
    dragText.textContent = 'Release to Upload File';
})

dragArea.addEventListener('dragleave', () => {
    dragArea.classList.remove('active');
    dragText.textContent = 'Drag & Drop';
})

dragArea.addEventListener('drop', (event) => {
    event.preventDefault();
    myFile = event.dataTransfer.files[0]

    showMe()
})

function showMe(){
    let filetype = myFile.type;
    let vaildex = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'];
    if (vaildex.includes(filetype)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let imgUrl = fileReader.result;
            let img = `<img src="${imgUrl}" alt="">`

            dragArea.innerHTML = img
        }
        fileReader.readAsDataURL(myFile);
    }else{
        alert('This file is not vaild')
        dragArea.classList.remove('active');
        dragText.textContent = 'Drag & Drop';
    }
}