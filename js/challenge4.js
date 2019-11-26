$('#ch4form').on('submit', function(){
    if ($('#fullname').val().length ===0){
       $('#nameerrormsg').show()
       console.log('name error')
       return false;
    }

})

$('#ch4form').on('submit', function(){
if ($('#streetaddr').val().length ===0){
    $('#addrerrormsg').show()
    console.log('addr error')
    return false;
 }})

