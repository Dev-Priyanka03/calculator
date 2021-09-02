var typeBox = document.getElementById("type-box")
function dis(val){
    typeBox.value +=val;
}
function clr(){
    typeBox.value=''
}
function solve(){
    var x = typeBox.value
    var y = eval(x)
    typeBox.value=y
}
typeBox.addEventListener("keydown",function(e){
    if(e.keyCode===13|| e.keyCode===61){
        solve();
    }
})
