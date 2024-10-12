const submitBtn = document.querySelector('.submitbtn');
const backBtn = document.querySelector('.backToForm');
const form = document.querySelector('form');
const resultContainer = document.querySelector('.container');

const propertyValue = document.getElementById('propertyValue')
const burialAmount = document.getElementById('burialAmount')
const loanAmount = document.getElementById('loanAmount')
const remainingProperty = document.getElementById('remainingProperty')
const noOfSons = document.getElementById('noOfSons')
const noOfDaughters = document.getElementById('noOfDaughters')
const propertyOwner = document.getElementById('propertyOwner')

// need to fetch from the backend
const sonShare = document.getElementById('sonShare')
const daughterShare = document.getElementById('daughterShare')
const spouseShare = document.getElementById('wifeShare')
const motherShare = document.getElementById('motherShare')
const fatherShare = document.getElementById('fatherShare')
const brotherShare = document.getElementById('brotherShare')
const sisterShare = document.getElementById('sisterShare')

let formData;
const formDataObj = {};
//  propertyOwner : husband
//  propertyValue : 1
//  numberOfSons : 2
//  numberOfDaughters : 3
//  burialAmount : 5
//  loanAmount : 5
//  spouseAlive : yes
//  fatherAlive : yes
//  motherAlive : yes
//  numberOfBrothers : 6
//  numberOfSisters : 7

// Convert FormData to a plain object
function plainObject(){
    formData.forEach((value, key) => {
        formDataObj[key] = value;
    });
}

function calculateResult()
{
    propertyValue.innerText=formDataObj.propertyValue;
    burialAmount.innerText=formDataObj.burialAmount;
    loanAmount.innerText=formDataObj.loanAmount;
    noOfSons.innerText=formDataObj.numberOfSons;
    noOfDaughters.innerText=formDataObj.numberOfDaughters;
    propertyOwner.innerText=formDataObj.propertyOwner;
}

async function receiveResult()
{   
    const response = await fetch("http://127.0.0.1:5000/api/calculate",{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(formDataObj),
    }
    );
    const resData = await response.json();
    console.log(resData);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formData = new FormData(form);
    plainObject();
    calculateResult();
    receiveResult();
    setTimeout(()=>{
        form.style.display="none";
        resultContainer.style.display="block";
    },2000)
});

backBtn.addEventListener('click',()=>{
    resultContainer.style.display="none";
    form.style.display="block";
})




