

$('#subscribe').on('click',function(){
    console.log('Here');
    if (this.checked){
        console.log('selected');
        $('#emailField').css('display', 'block');
    }else{
        console.log('not selected');
        $('#emailField').css('display', 'none');
    }
});






// subscribe.onchange = function(){
//     console.log("In here");
//     let email = document.getElementById("emailField");
//     if (this.checked){
//         console.log("Selected");
//         email.style.display = "block"; 
//     } else {
//         console.log("Not selected");
//         email.style.display = "none";
//     }
    
// }

