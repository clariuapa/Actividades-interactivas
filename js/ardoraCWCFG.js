//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="BUEN TRAAJO"; messageTime=""; messageError="VUELVE A INTENTARLO"; messageErrorG="VUELVE A INTENTARLO"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="T1ZB"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["RQ==","Qw==","VQ==","QQ==","Qw==","SQ==","Tw==","Tg==","",""],["Vg==","QQ==","Ug==","SQ==","QQ==","Qg==","TA==","RQ==","",""],["SQ==","Rw==","VQ==","QQ==","TA==","RA==","QQ==","RA==","",""],["VA==","RQ==","Ug==","TQ==","SQ==","Tg==","Tw==","","",""],["TA==","SQ==","Tg==","RQ==","QQ==","TA==","","","",""],["SQ==","Tg==","Qw==","Tw==","Rw==","Tg==","SQ==","VA==","QQ==",""],["RA==","RQ==","Uw==","UA==","RQ==","Sg==","QQ==","Ug==","",""],["Uw==","Tw==","TA==","VQ==","Qw==","SQ==","Tw==","Tg==","",""],["Qw==","Tw==","RQ==","Rg==","SQ==","Qw==","SQ==","RQ==","VA==","RQ=="],["Tw==","UA==","RQ==","Ug==","QQ==","Qw==","SQ==","Tw==","Tg==",""]];
var x1=[1,1,1,1,1,1,1,1,1,1];
var y1=[1,2,3,4,5,6,7,8,9,10];
var x2=[8,8,8,7,6,9,8,8,10,9];
var y2=[1,2,3,4,5,6,7,8,9,10];
var imaCW=["","","","","","","","","",""];
var audioCW=["","","","","","","","","",""];
var defCW=["Igualdad matemática que contiene una o más incógnitas.","Letra que representa un valor desconocido.","Relación matemática donde dos expresiones tienen el mismo valor.","Cada una de las partes de una expresión algebraica.","Tipo de ecuación donde la variable tiene exponente uno.","Valor desconocido que se desea encontrar.
","Proceso de dejar sola la variable en una ecuación.","Valor que hace verdadera la ecuación.","Número que multiplica a la variable.","Procedimiento matemático como suma, resta, multiplicación o división."];
var altCW=["","","","","","","","","",""];
var colNum=10;
var rowNum=10;
