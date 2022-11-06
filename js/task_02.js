const getElements = () => {
    const elements = document.getElementsByClassName('element');
    let out_02 = document.querySelector('.task_02_out');
    for (let element = 0; element < elements.length; element++) {
        elements[element].style.color = 'red';
        if(element < elements.length /2) {
            elements[element].style.color = 'red';
            console.log(elements[element].innerText);
        }
        else {
            elements[element].style.color = 'green'
            console.log(elements[element].innerText)
        }
    }
}
getElements();
