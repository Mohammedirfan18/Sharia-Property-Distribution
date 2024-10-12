const submitBtn = document.querySelector('.submitbtn')
const form = document.querySelector('form')

/*Input radio buttons*/
const propertyButtonsInput = document.querySelectorAll('input[name="property"]')
const spouseButtonsInput = document.querySelectorAll('input[name="spouse"]')
const fatherButtonsInput = document.querySelectorAll('input[name="father"]')
const motherButtonsInput = document.querySelectorAll('input[name="mother"]')

/*Input fields*/
const propertyValueInput = document.getElementById('value') 
const sonsInput = document.getElementById('sons') 
const daughtersInput = document.getElementById('daughters') 
const burialInput = document.getElementById('burial') 
const loanInput = document.getElementById('loan') 
const brothersInput = document.getElementById('brothers') 
const sistersInput = document.getElementById('sisters') 


// object to store all the values and send it to the backend
const completeInfo = {

}

function getBtnValue(Buttons)
{
    // console.log(Buttons)
    Buttons.forEach((button)=>{
        // console.log(button)
        button.addEventListener('change',(e)=>{
            switch(Buttons)
            {
                case propertyButtonsInput : 
                    completeInfo.propertyOwner=e.target.value;
                    break;
                
                case spouseButtonsInput : 
                    completeInfo.spouseAlive=e.target.value;
                    break;
                case fatherButtonsInput : 
                    completeInfo.fatherAlive=e.target.value;
                    break;
                case motherButtonsInput : 
                    completeInfo.motherAlive=e.target.value;  
                    break;   
            }
        })
    })
}
getBtnValue(propertyButtonsInput);
getBtnValue(spouseButtonsInput);
getBtnValue(fatherButtonsInput);
getBtnValue(motherButtonsInput);

submitBtn.addEventListener('submit',
    (e)=>{
        e.preventDefault();
        if(propertyValueInput.value && sonsInput.value && daughtersInput.value && burialInput.value && loanInput.value && brothersInput.value && sistersInput.value && completeInfo.propertyOwner && completeInfo.spouseAlive && completeInfo.fatherAlive && completeInfo.motherAlive)
        {
            completeInfo.propertyValue=propertyValueInput.value;
            completeInfo.numberOfSons=sonsInput.value;
            completeInfo.numberOfDaughters=daughtersInput.value;
            completeInfo.burialAmount=burialInput.value;
            completeInfo.loanAmount=loanInput.value;
            completeInfo.numberOfBrothers=brothersInput.value;
            completeInfo.numberOfSisters=sistersInput.value;   
            console.log(completeInfo)
        }else{
            alert("please fill all the fields")
        }

        // form.reset();
    }
)