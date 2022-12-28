function validateForm(event) {
    let selected;
    const data = new FormData(form);
    for (const entry of data) {
        selected = entry[1];
    }
    if (selected !== undefined) {
        spanoutput.innerHTML = `You selected ${selected} out of 5 `;
        front.className = 'flipfront';
        back.className = 'semi-hidden';
        delay(300).then(() => back.className = 'flipback')
        delay(1000).then(() => front.className = 'make-invisible')
        console.log(selected);
    }
    else{
        console.log('attempted to submit without choosing score');
    }
    event.preventDefault();
}

function delay(time){
    return new Promise (resolve => setTimeout(resolve, time))
}

let front = document.getElementById('front-card')
let back = document.getElementById('back-card')
let spanoutput = document.getElementById('rating-result');
const form = document.getElementById('rating');
form.addEventListener("submit", validateForm)