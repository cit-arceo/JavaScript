function getMyIpHttp(){
    var request = new XMLHttpRequest()
    //Open a new connection, using the GET request on the URL endpoint 

    request.open('GET', 'https://api.ipify.org?format=json', true)
    
    //en caso de exito, regresa en resp el resultado
    request.onload = function (resp){
        console.log(resp);
        console.log(resp.target.response);
    }
    //Send request
    request.send();
}

function getMyIpFetch(){
    //create request object
    var request = new Request('https://randomuser.me/api/?result=3',{
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json'})
    });
    //Now use it 
    fetch(request).then(function(response){
        response.json().then(function(respjson){
            console.log(respjson.results);
        });
    })
    .catch(err => {
        console.log(err);
    });
}

function getMyIp(){
    $.getJSON("https://api.ipify.org?format=json",
    function(json){
        console.log(json);
        $('#resultado').text(JSON.stringify(json));
    }
    );
}

function getMyData(randomNumber){
    $.getJSON("https://randomuser.me/api/?result=3"+ randomNumber ,
    function(json){
        console.log(json).results;
        $('#resultado').text(JSON.stringify(json.results));
    }
    );
}