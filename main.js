function onclicks( )
{
    let color = Math.floor(Math.random()*16666666).toString(16);
    document.getElementById("backgroundcolor").style.backgroundColor ='#'+color
    console.log(color)
}
 