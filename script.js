function volume_sphere(e) {
  //Write your code here
  e.preventDefault();
let radius=document.getElementById("radius");
let output=document.getElementById("volume");
if(parseFloat(radius.value)<0){
output.value=NaN;
}
else if(isNaN(radius.value)){
  output.value=NaN;
  
}
else{
  let r=parseFloat(radius.value);
  let volume=((4/3)*Math.PI*r*r*r).toFixed(4);
  output.value=volume;

}
//console.log(output);
} 


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
