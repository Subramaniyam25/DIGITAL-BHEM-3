function resets(){
    document.getElementById('tc').innerHTML = "Rs. 0";
    document.getElementById('aa').innerHTML = "Rs. 0";
    document.getElementById('rb').innerHTML = "Rs. 0";
}

function hotel(){

    var delu = 0;
    var suit = 0;
    var airc = 0;
    var loc = 0;
    
    
    let td = document.getElementById('td').value;
    let tp = document.getElementById('tp').value;
    
    let delux = document.getElementById('delux');
    if(delux.checked == true){
        var delu = 1; 
    }
    
    let suite = document.getElementById('suite');
    if(suite.checked == true){
        var suit = 1; 
    }
    
    let ac = document.getElementById('ac');
    if(ac.checked == true){
        var airc = 1;
        }
    let locker = document.getElementById('locker');
    if(locker.checked == true){
        var loc = 1; 
    }
    
    let advamt = document.getElementById('advamt').value;
    
    console.log(advamt);
    console.log(td);
    console.log(tp);
    
    var total_cost = 0;
    
    if((delu == 1 && suit == 0)&&(airc == 1 && loc == 0)){
        total_cost = (500*tp)*td;
    }
    else if((delu == 1 && suit == 0)&&(airc == 0 && loc == 1)){
        total_cost = (300*tp)*td;
    }
    else if((delu == 0 && suit == 1)&&(airc == 1 && loc == 0)){
        total_cost = (400*tp)*td;
    }
    else if((delu == 0 && suit == 1)&&(airc == 0 && loc == 1)){
        total_cost = (250*tp)*td;
    }
    else{
        console.log("please choose right");
    }
    
    document.getElementById('tc').innerHTML = "Rs."+ total_cost;
    document.getElementById('aa').innerHTML = "Rs."+advamt;
    document.getElementById('rb').innerHTML = "Rs."+(total_cost-advamt);
}

stoprefresh.addEventListener("click", function(event){
    event.preventDefault();
})