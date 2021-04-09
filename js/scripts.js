document.getElementById('contingut').addEventListener('click', bor);
var prova2 = document.getElementsByTagName('input')
function bor(e){
    if(e.target.id == 'contingut' || e.target.id =='systemR'){
        for(i=0;i<prova2.length;i++){
            prova2[i].checked=false;
        }
        
    }
}

/*
document.getElementById('systemR').addEventListener('mouseover', quantes);
document.getElementById('systemR').addEventListener('mouseout',quines );
document.getElementById('systemR').addEventListener('click', pinta);
document.getElementById('contingut').addEventListener('click', begin);
var galaxy =[document.getElementById('star-1'),
            document.getElementById('star-2'),
            document.getElementById('star-3'),
            document.getElementById('star-4'),
            document.getElementById('star-5')];
var stars = [document.getElementById('star-11'),
            document.getElementById('star-12'),
            document.getElementById('star-13'),
            document.getElementById('star-14'),
            document.getElementById('star-15')];
/*function quantes(e){
    if(e.target.firstChild.value >0){
        for(i=0;i<galaxy.length;i++){
            if(e.target.firstChild.value>= galaxy[i].value){
                stars[i].classList.add('painted')
            }
            else{
                stars[i].classList.remove('painted')
            }
        }
    }
}
function quines(e){
    for(i=0;i<galaxy.length;i++){
        stars[i].classList.remove('painted')
    }
}
function pinta(e){
    if(e.target.value >0){
        for(i=0;i<galaxy.length;i++){
            if(e.target.value >= galaxy[i].value){
                stars[i].classList.add('rated')
                }
            else{
                stars[i].classList.remove('rated')
            }
        }
    }
}
function begin(e){
    if(e.target.id == 'contingut' || e.target.id == 'systemR')
    for(i=0;i<galaxy.length;i++){
        galaxy[i].checked = false;
        stars[i].classList.remove('rated')
        stars[i].classList.remove('painted')
        alert('asasdadasdas')
    }
}

function begin(e){
    if(e.target.id == 'contingut' || e.target.id == 'systemR'){
        var prova= document.getElementsByTagName('input');
        prova.checked= false;
        alert('asd');
        //galaxy[i].checked = false;  
    }
}*/