/*Heather Sleyster
sleyster_a10.js
INFO 2124
Thoendel
02/19/20
*/


document.getElementById('action').addEventListener('click', function() {
    //WRITE YOUR SOLUTION BETWEEN THIS COMMENT

/*These statements assigns the id value of photo to a variable img,
then retrieves the value of the src attribute of the img variable and assigns
it to the variable s. Then there is an if statement that finds out the value of s 
and compares it to the jpg file and depending on the value of s sets the src 
attribute to the coresponding jpg file. We then assign the h1 elements to an
array h and loop through the h array with the for loop setting the class to the
greenText class in the styles.css file and when the src attribute is set to the other
jpg file the h1 elements should reset to no style class setting.
*/
let img = document.getElementById('photo');
let s = img.getAttribute('src');
if(s=='01.jpg'){
    img.setAttribute('src', '02.jpg');
    let h = document.getElementsByTagName('h1');
    for (let i=0, max=h.length; i<max; i++){
        h[i].setAttribute('class','greenText');
    }
}
else {
    img.setAttribute('src', '01.jpg');
    for (let i=0, max=h.length; i<max; i++){
        h[i].setAttribute('class','');
    }
}
    //AND THIS COMMENT
});