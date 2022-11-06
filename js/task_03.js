function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const makeDivElement = () => {
    let out_03 = document.querySelector('.task_03_out');
    const div = document.getElementById('container');
    for (let i = 0; i < 5; i++) {
        const divInDiv = document.createElement('div');
        div.append(divInDiv);
        divInDiv.className = 'element';
        divInDiv.innerHTML = 'Element' + ' ' + `<strong style='color: ${getRandomColor()};'>${i+1}</strong>`;
    }
    console.log(div);
}
makeDivElement();
