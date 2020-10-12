function index(){

    const Http =new XMLHttpRequest();
    const url="https://passwd-api.herokuapp.com/password";
    Http.open("GET",url);
    Http.send();

    Http.onreadystatechange=(e)=>{
        var uxie=JSON.parse(Http.responseText)
        document.getElementById("isekai").innerHTML=uxie.passwd;
    }




}