import React, { useState } from 'react'
import { Dismiss } from 'flowbite';
import axios from 'axios'
import face from './static/facemjpg.jpg';
export const Attendance = () => {

  const [cwidth, setcwidth] =useState(400);
  const [latitude, setlatitude] =useState(0);
  const [longitude, setlongitude] =useState(0);
  const [rmessage, setrmessage] =useState("Start camera and capture");

    const stopcvfunc=async(e)=>{
      console.log("stopcvfunxton started")
      setrmessage("Wait...") 

      // get location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        console.log("Geolocation is not supported by this browser.")
       }

      //  get photo of user
        const canvas=document.getElementById('canvas')
        var videoEl = document.getElementById('video');
        setcwidth(videoEl.offsetWidth)
        console.log("che",canvas.height)
        canvas.getContext('2d').drawImage(videoEl, 0, 0, canvas.width, canvas.width);
     	let image_data_url = canvas.toDataURL('image/jpeg');
        // data url of the image
      	console.log(typeof(canvas));

        // stpping the camera
       let stream = videoEl.srcObject;
       let tracks = stream.getTracks();
       tracks.forEach(function(track) {
          track.stop();
        });
        videoEl.srcObject = null;  

        videoEl.style.backgroundImage=`url('${image_data_url}')`
        document.getElementById('scanner').style.display='block'

        function base64ToBlob(base64, mime) 
{
    mime = mime || '';
    var sliceSize = 1024;
    var byteChars = window.atob(base64);
    var byteArrays = [];

    for (var offset = 0, len = byteChars.length; offset < len; offset += sliceSize) {
        var slice = byteChars.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, {type: mime});
}
var jpegFile64 = image_data_url.replace(/^data:image\/(png|jpeg);base64,/, "");
var jpegBlob = base64ToBlob(jpegFile64, 'image/jpeg');
console.log(typeof(jpegBlob))

const fileInput = document.getElementById('ifile');
const jpgf=document.getElementById('jpgf')
// Create a new File object
const myFile = new File([jpegBlob], 'myFile.jpg', {
    type: 'image/jpeg',
    lastModified: new Date(),
});
 const dataTransfer = new DataTransfer();
    dataTransfer.items.add(myFile);
    fileInput.files = dataTransfer.files;
      
    console.log("onselect")
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file)
    formData.append('longitude', longitude)
    formData.append('latitude', latitude)
    
    axios.post("http://localhost:5000/api/a/attend", formData, {headers: {
      'auth-token': localStorage.getItem('token')
      }})
    .then(res => { // then print response status
      console.log(res.data)
      document.getElementById('stopcv').disabled=true
      document.getElementById('opencv').disabled=false
      document.getElementById('scanner').style.display='none'
      setrmessage(res.data.message)
      console.log("ended f")
    })

     
         }

         const onSelectImageHandler =async (e) => {
     
 
}
    const opencv=async(e)=>{
        console.log("openedc")
        document.getElementById('opencv').disabled=true
        document.getElementById('sloader').style.opacity=1
        const video = document.getElementById('video')
        var vwidth = video.offsetWidth;
        var vheight = video. offsetHeight;
        let front=false
        function startVideo() {
            console.log("cvstarted")
            var constraints = { video: { facingMode: (front? "user" : "environment"), width: vwidth, height: vheight  } };
            navigator.mediaDevices.getUserMedia(constraints)
            .then(function(mediaStream) {
              video.srcObject = mediaStream;
              video.onloadedmetadata = function(e) {
              video.play();
              document.getElementById('sloader').style.opacity=0
              setrmessage("Now click on Capture button.")
              document.getElementById('stopcv').disabled=false
          };
          })
          .catch(function(err) { console.log(err.name + ": " + err.message); })
          
           
          }
           startVideo()
         

    }

    const btnsdiss=async()=>{
      document.getElementById('stopcv').disabled=true
      document.getElementById('opencv').disabled=false
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition,error2,options);
        } else {
          console.log("Geolocation is not supported by this browser.")
         
        }
        
    }
    function error2(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    function showPosition(position) {
      setlongitude(position.coords.longitude)
      setlatitude(position.coords.latitude)
      document.getElementById('loc').innerHTML=position.coords.longitude
      document.getElementById('loc2').innerHTML=position.coords.latitude
  console.log(position, position.coords.latitude ,position.coords.longitude)
  
     }

    const toastshowing=(val)=>{
      const targetEl = document.getElementById('toast-success');
    
     
     targetEl.classList.remove('hidden')
     targetEl.classList.remove('opacity-0')
   
     setTimeout(
      function() {
       toastdismiss();
       }, 5000);
   
   }
   const toastdismiss=()=>{
    
     const $targetEl = document.getElementById('toast-success');
     const dismiss = new Dismiss($targetEl);
     dismiss.hide();
   }


   const polygon = [
    {lat: 31.400734, lng: 75.535784},
    {lat: 31.398088, lng: 75.530261},
    {lat: 31.390992, lng: 75.536039},
    {lat: 31.393762, lng: 75.540772}
  ];
  let point = {lat: 31.398038, lng: 75.531505};
  function isPointInsidePolygon(point, polygon) {
    const vertices = polygon.length;
    let intersectCount = 0;
  
    for (let i = 0; i < vertices; i++) {
      const vertex1 = polygon[i];
      const vertex2 = polygon[(i + 1) % vertices];
  
      if (((vertex1.lng > point.lng) != (vertex2.lng > point.lng)) &&
          (point.lat < (vertex2.lat - vertex1.lat) * (point.lng - vertex1.lng) / (vertex2.lng - vertex1.lng) + vertex1.lat)) {
        intersectCount++;
      }
    }
  
    return intersectCount % 2 == 1;
  }
function printcc(){
  let input_lat=document.getElementById('input_lat').value
  let input_long=document.getElementById('input_long').value
  point.lat=input_lat
  point.lng=input_long
  // point.lat=31.399301
  // point.lng=75.538309
  const isInside = isPointInsidePolygon(point, polygon);
  console.log(isInside);
}
 

  return (
   <>
   <div className="">

 
<button type="button" className="btn btn-primary" onClick={btnsdiss} data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<p id='loc'></p>
<p id='loc2'></p>
<input type="text" style={{backgroundColor:"gray"}} id='input_lat' />
<input type="text" style={{backgroundColor:"gray"}} id='input_long' />
<button onClick={printcc}>click</button>


<div className="modal fade" id="exampleModal"  data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg modalkiwidth">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className='latrat'>

        <div className="lat">
<div className="facephotofuldiv d-flex">
        <div className="card cardka">
  <img id='jpgf' src={face} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">Your face will be recorded and verified with your profile for attendance.</p>
  </div>
</div>
<input type="file" name="" id="ifile" style={{display:"none"}} onChange={onSelectImageHandler}/>
<div className="dbnbtns">
            <button className='btn btn-secondary opencvbtn' id='opencv' onClick={opencv}>
              <div className="" style={{margin:"5px 10px"}}>
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera m-1" viewBox="0 0 16 16">
  <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
  <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
</svg>Camera
</div>
<div className="loader" id='sloader'></div>
            </button>
          
            <button id='stopcv' className='btn btn-danger' onClick={stopcvfunc}>Capture</button>
            <canvas id="canvas" width={cwidth} height={cwidth}></canvas>
            </div>

        </div></div>
        <div className="rat">
            <div className="camerakliye">
              <div className="thirdloander">
              <div className='scanner' id='scanner'></div>
</div>
            <video id="video" autoPlay muted>
        
            </video>
            </div>
        </div>
      </div>
      </div>
      <div className="modal-footer mofooter">
        {/* <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button className="btn btn-primary">Save changes</button> */}
        <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 rmessage" role="alert">
  {rmessage}
  {/* <div className="wrapper" id='ballloader'>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    
</div> */}
</div>
      </div>
    </div>
  </div>
</div>

<div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 absolute right-5 top-5 hidden opacity-0" role="alert">
    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Check icon</span>
    </div>
    <div className="ml-3 text-sm font-normal">Problem Solved successfully.</div>
    <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close" onClick={toastdismiss}>
        <span className="sr-only">Close</span>
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"  data-dismiss-target="#toast-success"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </button>
</div>
   </div>
   </>
  )
}
