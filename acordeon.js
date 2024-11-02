const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')
console.log('teste')
acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click',(e) => {
        console.log('tese')
        const acordeon = trigger.parentElement
        const isOpen = acordeon.classList.contains('open')

        if(isOpen){
            console.log('isOpen')
            acordeon.classList.remove('open')
            
        } else {
            acordeon.classList.add('open')
        }
    })
})