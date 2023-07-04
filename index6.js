
let busy =false;

    function baocun(){
        let anniu = document.getElementById('anniu');
        let shuru = document.getElementById('shuru');
    
    if (busy){
        busy =false;
        anniu.value="今日议事";
        shuru.value="";
        shuru.ariaReadOnly=false;
        window.localStorage.removeItem('business')
    }else{
        busy =true;
        anniu.value="重新规划";
        shuru.ariaReadOnly=true;
        window.localStorage.setItem("business",shuru.value)
    }
    }
    let data = window.localStorage.getItem("business");
    if (data){
        document.getElementById('shuru').value = data;
        baocun()
    }