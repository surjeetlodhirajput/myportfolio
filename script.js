document.getElementById("copy").addEventListener('mouseover',()=>{
    document.getElementById("msg").innerText="click on it to copy email";
})

document.getElementById("copy").addEventListener('mouseout',()=>{
    document.getElementById("msg").innerText="";
})
document.getElementById('git').addEventListener('click',()=>{
    window.open("https://github.com/surjeetlodhirajput","_blank");
})
document.getElementById('insta').addEventListener('click',()=>{
    window.open("https://www.instagram.com/lordsurjeetlodhi/","_blank");
})
document.getElementById('linkdin').addEventListener('click',()=>{
    window.open("https://www.linkedin.com/in/surjeetlodhirajput/","_blank");
})
function lastUpdate(){
    var d=Date.parse("June 6,2021");
    var today=Date.now();
    var time=today-d;
    var diff=time/(1000*3600*24);
    document.getElementById("last-update").innerText=`Last Update: ${parseInt(diff)} days ago`;
}
lastUpdate();


  var i=0;
  var arr=["I had created an app using python using which we can compress the size of the mobile images without affecting the image quality through this app you can compress either a single image or whole directory for image you need to pass the relative path of the image and for directory you need to pass the relative directory path after compressing images save in new directory which contain the path of old + some random path.",
  "I had created an chat app using  node js and socket.io using which we can create unique user room and let our freind join that room and talk only those will able to join the room who will have the password and the room will remain open until the server start again",
  "i had created an app using java using which you can extract the  links from either webpage or whole website. i created simple ui for user in which you have to just paste link or select one option and then click button to traverse",
  "i had created an app using java using which you can download the image from webpage or whole wesbsite i created simple ui for user in which you need to just paste one link and select one of option and then press button."];
  var images=["./media/prjp/imagecomp.png","./media/prjp/node.jfif","./media/prjp/java.jfif","./media/prjp/java2.jfif"];
async function typing(){

            document.getElementById("primage").src=images[i];
            $('#right-text').text("")
            let a=arr[i];
            document.getElementById("right-text").innerText=a;
            if(i==(arr.length-1))
        i=0;
        else
        i++;    
}
typing()
setInterval(typing,6000)