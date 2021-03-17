console.log(`Warsztat - (jQuery) Pobierz dane po kliknieciu przycisku jquery`);

$(document).ready(function(){
    
    $('#get-data').click(function(){

        // wariant 1
        // $.get('https://akademia108.pl/api/ajax/get-post.php')
        // .done(function(data){

        //     let pId = $('<p></p>').text(`Post ID: ${data.id}`);
        //     let pUserId = $('<p></p>').text(`Post ID: ${data.userId}`);
        //     let pTitle = $('<p></p>').text(`Post ID: ${data.title}`);
        //     let pBody = $('<p></p>').text(`Post ID: ${data.body}`);
        //     let hr = $('<hr />');

        //    let jqbody =$('body');

        //    jqbody.append(pId);
        //    jqbody.append(pUserId);
        //    jqbody.append(pTitle);
        //    jqbody.append(pBody);
        //    jqbody.append(hr );


        //     // console.log(pId);
        // })
        // .fail(function(error) {
        //     console.log(error);
        // });

        //wariant 2
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
        .done(function(data){

            let pId = $('<p></p>').text(`Post ID: ${data.id}`);
            let pUserId = $('<p></p>').text(`Post ID: ${data.userId}`);
            let pTitle = $('<p></p>').text(`Post ID: ${data.title}`);
            let pBody = $('<p></p>').text(`Post ID: ${data.body}`);
            let hr = $('<hr />');

           let jqbody =$('body');

           jqbody.append(pId);
           jqbody.append(pUserId);
           jqbody.append(pTitle);
           jqbody.append(pBody);
           jqbody.append(hr );


            // console.log(pId);
        })
        .fail(function(error) {
            console.log(error);
        });




    });
    
});