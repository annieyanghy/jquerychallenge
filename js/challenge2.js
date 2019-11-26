$('#useBilling').on('click', function(){
    if (this.checked){
        $('#home').value = $('#billing').value
        $('#home').dasabled = true;
    }else{
        console.log('unchecked')
    }
})






useBilling.onchange = function(){
    let billing = document.getElementById('billing');
    let home  = document.getElementById('home');
    
    if (this.checked){
        home.value = billing.value;
        home.disabled = true;
    }else{
       console.log("unchcked")
    }
    
}