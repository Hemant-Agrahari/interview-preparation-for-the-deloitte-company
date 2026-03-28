function outter(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    inner();
}
outter();