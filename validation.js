

document.querySelector('.textform').addEventListener('submit', (event)=>{
    event.preventDefault()
    console.log(event.target.username.value)
    console.log(event.target.password.value)

    if((event.target.username.value==event.target.username.value)&& (event.target.password.value==event.target.password.value) && event.target.username.value !='' && event.target.password.value !=''  )
    {
        alert('login successful '+ "\u2705")
        
        
    }
    else if( event.target.username.value == '' && event.target.password.value == '')
    {
        alert('Enter username and password'+ "\u274C")
    }
    else if( (event.target.username.value == '') && (event.target.password.value == event.target.password.value) )
    {
        alert('Username Is Empty ' + "\u274C")
    }
    else if ((event.target.username.value == event.target.username.value) && (event.target.password.value == ''))
    {
        alert('Password Is Empty' + "\u274C")
    }

    event.target.username.value = '';
    event.target.password.value = '';
    
 } )