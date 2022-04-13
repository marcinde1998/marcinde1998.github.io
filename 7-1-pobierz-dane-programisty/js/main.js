$(document).ready(function(){
    
    $('#pobierz-dane').click(function(){
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data) {
            
            $( "<div/>", {
                "id": "dane-programisty",
                text: ('Imię: ' + data.imie + ', Nazwisko: ' + data.nazwisko + ', Zawód: ' + data.zawod + ', Firma: ' + data.firma)
            }).insertAfter( "button" );
        });
    });
});







// $(document).ready(function(){
    
//     $('#pobierz-dane').click(function(){
//         let httpReqDaneProgramisty = new XMLHttpRequest();

//         httpReqDaneProgramisty.open('GET', 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php');
//         httpReqDaneProgramisty.send();
//         httpReqDaneProgramisty.onreadystatechange = () => {
//             if(httpReqDaneProgramisty.readyState === 4 && httpReqDaneProgramisty.status === 200){
            
//                 let danePro = httpReqDaneProgramisty.responseText;
//                 let daneProJSON =  JSON.parse(danePro);
//                 console.log(daneProJSON);

//                 let daneProgramisty = document.createElement('div');
//                 let txtProgramista = document.createTextNode('Imię: ' + daneProJSON.imie + ', Nazwisko: ' + daneProJSON.nazwisko + ', Zawód: ' + daneProJSON.zawod + ', Firma: ' +daneProJSON.firma);
//                 let idProgramisty = document.createAttribute('id');
//                 idProgramisty.value = 'dane-programisty';
        
//                 daneProgramisty.appendChild(txtProgramista);
//                 daneProgramisty.setAttributeNode(idProgramisty);
//                 $(daneProgramisty).insertAfter($('button'));
//             };
            
//         };
//     });
// });
