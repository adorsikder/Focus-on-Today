const checkBoxList = document.querySelectorAll('.check-box')
const inputFields = document.querySelectorAll('.goal-input')

checkBoxList.forEach((check)=>{
    check.addEventListener('click', (e) =>{
        check.parentElement.classList.toggle('completed')
        const allGoalsadd = [...inputFields].every(function (input){
            return input.value
        })

        if(allGoalsAdded){
            check.parentElement.classList.toggle('completed')
        } else{
            
        }
    })
})
