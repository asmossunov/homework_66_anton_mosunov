const makeDivElement = () => {
    let out_03 = document.querySelector('.task_03_out');
    const div = document.getElementById('container');
    for (let i = 0; i < 5; i++) {
        const divInDiv = document.createElement('div');
        div.append(divInDiv);
        divInDiv.className = 'element';
        divInDiv.innerText = 'Element' + ' ' + (i+1);
    }
    console.log(div);
}
makeDivElement();
