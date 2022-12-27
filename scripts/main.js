document.querySelector('#submit').disabled=true;
document.querySelector('#submit').preventDefault;
let front = document.getElementsByClassName('front')[0];
let back = document.getElementsByClassName('back')[0];
let spanoutput = document.getElementById('rating-result');
let selectedValue;

function validateForm(select) {
    
    if (select === '#submit'){
        // document.querySelector('.card').style.transform("rotateY(180deg)");
        try{
            // console.log(selectedValue)
            // console.log(front);
            // console.log(back);
            
            spanoutput.innerHTML =`You selected ${document.querySelector(selectedValue).value} out of 5 `;
            front.style.transform= 'rotateY(180deg)';
            back.style.transform= 'rotateY(0deg)';
        }
        catch(ex){
            console.log(ex);
        }
        // document.getElementsByClassName('back').style.transform("rotateY(180deg)")

    }
    else{
        document.querySelector(`${select}`).addEventListener('click', selected(`${select}`));
        document.querySelector('#submit').disabled=false;
    }

    // console.log(selectedValue)
    return false
};

function selected(number){
    selectedValue=number;
 }