var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; 
var yyyy = today.getFullYear();
var hour = today.getHours();
var minute = today.getMinutes();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd + 'T' + hour + ':' + minute;
year = yyyy;
document.getElementById("annee-circulation").setAttribute("max", year);