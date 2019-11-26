
// $('#ch3form').submit(function(){
//     if ($('input[name="fruit"]:checked') && $('input[name="standings"]:checked')){
//             return true;
//         }
//         alert('Pick a fruit')
//         console.log('false')
//         return false;
// })

$('#ch3form').submit(function(event){
    // var fruit =$('input[name="fruit"]')
    // var standing = $('input[name="standing"]')
    // for (let i =0; i < fruit.length && i<standing.length; i++){
      
        if ($('input[name="fruit"]:checked').val() && $('input[name="standing"]:checked').val()){
            console.log('pass')
            this.submit();
          
            
    } else{
        alert('Pick both')
        console.log('false')
        event.preventDefault();
    }

    // var valid = true;
    // if(! $('input[name=standing]:checked').val()){
    //     valid = false;
    // }
    // if(! $('input[name="fruit"]:checked').val()){
    //     valid = false;
    // }
    // if (!valid){
    //     alert('Pick from both columns!')
    //     console.log('false')
    //     event.preventDefault();
    // }
    


})


// $("form").submit(function( event ) {
//     console.log($('input[name=standing]:checked').val());
//     var valid = true;
//     if (! $('input[name=standing]:checked').val()){
//         valid = false;
//     }
//     if (! $('input[name=fruit]:checked').val()){
//         valid = false
//       }
//     if (!valid){
//         alert("Make a selection from both lists!")
//         event.preventDefault();
//     }
// });





// $('#ch3form').submit(function(){
//     var fruit =$('input[name="fruit"]')
//     var standing = $('input[name="standing"]')
//     for (let i =0; i < fruit.length && i<standing.length; i++){
//         if (fruit[i].checked.val){
//         console.log('true')
//         return true;
//         }
//         else if (standing[i].checked.val){
//         console.log('true')
//         return true;
//         } else {
//         alert('Pick a fruit')
//         console.log('false')
//         return false;
// }}})



// ch3form.onsubmit = function(){
//     var fruit = document.querySelectorAll('input[name="fruit"]')
//     for (let i =0; i <fruit.length; i++){
//         if (fruit[i].checked)
//         return true;
//     }

//     alert("Pick a fruit!")
//     return false;
// }