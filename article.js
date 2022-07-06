
const share = document.getElementById('share')


share.addEventListener('click', () =>{
    console.log('share clicked');
})

const social  = document.querySelector('.open-share');

const shareBt = document.getElementById('share');


const removeShareBtn= document.getElementById('remove-share')

shareBt.addEventListener('click', () => {
    if(social.classList.contains('clicked')){
        console.log('Yes');
        social.classList.remove('clicked')
    }
    else{
        console.log('No')
        social.classList.add('clicked')
    }
    
     
})

removeShareBtn.addEventListener('click', ()=>{
    social.classList.remove('clicked')
}) 

