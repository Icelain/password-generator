function index(){
    document.getElementById("icon-loader").style.display="inline";
    const Http =new XMLHttpRequest();
    const url="https://passwd-api.herokuapp.com/password";
    Http.open("GET",url);
    Http.send();

    Http.onreadystatechange=(e)=>{
        var uxie=JSON.parse(Http.responseText)
        document.getElementById("icon-loader").style.display="none";
        document.getElementById("isekai").innerHTML=uxie.passwd;
    }




}
