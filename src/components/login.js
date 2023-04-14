import React, { useState } from 'react'
import smoke from './static/smoke.png';
import tree from './static/rocket2.png';
import PriceChangeRoundedIcon from '@mui/icons-material/PriceChangeRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import PointOfSaleRoundedIcon from '@mui/icons-material/PointOfSaleRounded';

import FoodBankRoundedIcon from '@mui/icons-material/FoodBankRounded';
export const Login = () => {

  const handle=async (e)=>{
   
    let roomno=document.getElementById('password').value
    e.preventDefault();
    const response=await fetch("http://localhost:5000/api/b/bookroom",{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'auth-token':localStorage.getItem('token')
        },
        body: JSON.stringify({room:roomno})


    });
    const json=await response.json();
    console.log(json)
    // if(json.response){
    //     localStorage.setItem('token',json.jwtData)
    // }else{
    //     console.log("flase")
    // }
}

  const [sroom,setsroom]=useState()

  const handlegender=(e)=>{
    let floor=document.getElementById('floors').value
    let roomno=e.target.value
    let roomdiid=(parseInt(floor)*100)+parseInt(roomno)
    let roomst="R-"+roomdiid
    setsroom(roomdiid)
   }
   
  return (
   <>
    <div className="one two">
   <div className="flex flex-wrap mt-6 -mx-3 billoone" style={{width:"100%"}} >
<div className="w-half px-3 mb-6 lg:mb-0 lg:flex-none ww50" >
<div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border" id="fb50">
<div className="flex-auto p-4">
<div className="flex flex-wrap -mx-3 twrem">
<div className="max-w-full px-3 lg:w-1/2 lg:flex-none">
<div className="flex flex-col h-full">
<p className="pt-2 mb-1 font-semibold">Welcome to</p>
<h5 className="font-bold">Mega Boys Hostels</h5>
<p className="mb-12">The hostel facility is available to the regular students who are on the rolls of the institute depending upon the availability.</p>
<a className="mt-auto mb-0 font-semibold leading-normal text-sm group text-slate-500" target={'_blank'} href="https://www.nitj.ac.in/index.php/nitj_cinfo/index/23">
Read More
<i className="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200" aria-hidden="true"></i>
</a>
</div>
</div>
<div className="max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none mbhh">
<div className="h-full bg-gradient-to-tl from-purple-700 to-pink-500 rounded-xl">
{/* <img src="../assets/img/shapes/waves-white.svg" className="absolute top-0 hidden w-1/2 h-full lg:block" /> */}
<div className="relative flex items-center justify-center h-full">
<img className="relative z-20 w-full pt-6" src={tree} />
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-half px-3 lg:flex-none belo50">
<div className="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border p-4" id='underb50'>
<div className="relative h-full overflow-hidden bg-cover rounded-xl bckk">
<span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"></span>
<div className="relative z-10 flex flex-col flex-auto h-full p-4">
<h5 className="pt-2 mb-6 font-bold text-white">Announcements</h5>
<div id='announceslist' >
  
  


 

</div>

</div>
</div>
</div>
</div>
</div>
   </div>
   <div className="one">
   <div className="flex flex-wrap mt-6 -mx-3 billoone">
<div className="w-half px-3 mb-6 lg:mb-0 lg:flex-none ww50">
<div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
<div className="flex-auto p-4">
<div className="flex flex-wrap -mx-3">
<div className="max-w-full px-3 lg:w-1/2 lg:flex-none maxwphul" style={{width:"100%"}}>
<div className="">
  <div className="m0 flex slktroom">
  <p className='m0 plzslkt'>Select your room </p>
  <div className='flex'>
  <p className='m0 plzslkt'>Floor : </p>
  <div className="flex justify-center">
  <div className="mb-3 ">
    <select data-te-select-init id='floors'>
      <option value="0">Ground</option>
      <option value="1">First</option>
      <option value="2">Second</option>
      <option value="3">Third</option>
      <option value="4">Fourth</option>
      <option value="5">Fifth</option>
      
      
    </select>
  </div>
</div>
  </div>
  </div>
 <form action="" className='parent'>
  <input type="radio" onChange={handlegender} className='roomcheckbox' name="roomno" id="r1" value="01"/>
  <input type="radio" onChange={handlegender} className='roomcheckbox' name="roomno" id="r2" value="02"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r3" onChange={handlegender} value="03"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r4" onChange={handlegender} value="04"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r5" onChange={handlegender} value="05"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r6" onChange={handlegender} value="06"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r7" onChange={handlegender} value="07"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r8" onChange={handlegender} value="08"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r9" onChange={handlegender} value="09"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r10" onChange={handlegender} value="10"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r11" onChange={handlegender} value="11"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r12" onChange={handlegender} value="12"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r13" onChange={handlegender} value="13"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r14" onChange={handlegender} value="14"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r15" onChange={handlegender} value="15"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r16" onChange={handlegender} value="16"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r17" onChange={handlegender} value="17"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r18" onChange={handlegender} value="18"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r19" onChange={handlegender} value="19"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r20" onChange={handlegender} value="20"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r21" onChange={handlegender} value="21"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r22" onChange={handlegender} value="22"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r23" onChange={handlegender} value="23"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r24" onChange={handlegender} value="24"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r25" onChange={handlegender} value="25"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r26" onChange={handlegender} value="26"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r27" onChange={handlegender} value="27"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r28" onChange={handlegender} value="28"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r29" onChange={handlegender} value="29"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r30" onChange={handlegender} value="30"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r31" onChange={handlegender} value="31"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r32" onChange={handlegender} value="32"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r33" onChange={handlegender} value="33"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r34" onChange={handlegender} value="34"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r35" onChange={handlegender} value="35"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r36" onChange={handlegender} value="36"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r37" onChange={handlegender} value="37"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r38" onChange={handlegender} value="38"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r39" onChange={handlegender} value="39"/>
  <input type="radio" className='roomcheckbox' name="roomno" id="r40" onChange={handlegender} value="40"/>
   
 </form> 
</div>
</div>

</div>
</div>
</div>
</div>
<div className="w-half px-3 lg:flex-none belo50">
<div className="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border p-4">
<div className="relative h-full overflow-hidden bg-cover rounded-xl thisisbgcv">
<span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80 "></span>
<div className="relative z-10 flex flex-col flex-auto h-full p-4">
<h5 className="pt-2 mb-6 font-bold text-white">Mega Boys Hostels</h5>
<p className="txtw ">You have selected room number {sroom}</p>
<div>
<div className='d-flex rdetails'>
  <p className='stdd'>Name : <span className='hstdd'>Shaktiman Singh</span></p>
  <p className='stdd'>Roll No. : <span className='hstdd'>20102010</span></p>
</div>
<div className='d-flex rdetails'>
  <p className='stdd'>Room no : <span className='hstdd'>F-312</span></p>
  <p className='stdd'>Floor : <span className='hstdd'>Second</span></p>
</div></div>
<form onSubmit={handle}>
 
 
    <input type="password" className="form-control" id="password" hidden value={sroom}/>
  
 
    <a className="mt-auto mb-0 font-semibold leading-normal text-white group text-sm" href="#" onClick={handle}>
Next
<i className="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200" aria-hidden="true"></i>
</a>
</form>


</div>
</div>
</div>
</div>
</div>
   </div>
   
 <div className="one third">
<div className="flex flex-wrap mt-6 -mx-3 thirdbloon">
<div className=" px-3 mt-0 mb-6 lg:mb-0 lg:flex-none panjwta">
<div className="border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
<div className="flex-auto p-4">
<div className="py-4 pr-1 mb-4 bg-gradient-to-tl rounded-xl ">
<div className='blackbgp'>
<div className="smoky">
  <div className="d1"><img className='sm1 smdelay' src={smoke} alt="" />
  <img className='sm1 sm2 smdelay' src={smoke}alt="" />
  <img className='sm1 sm3 smdelay' src={smoke} alt="" /></div>
  <div className="d2"><img className='sm1' src={smoke} alt="" />
  <img className='sm1 sm2' src={smoke}alt="" />
  <img className='sm1 sm3' src={smoke} alt="" /></div>
  <div className="d3"><img className='sm1 smdelay2' src={smoke} alt="" />
  <img className='sm1 sm2 smdelay2' src={smoke}alt="" />
  <img className='sm1 sm3 smdelay2' src={smoke} alt="" /></div>
  <div className="d4"><img className='sm1 zsm' src={smoke} alt="" />
  <img className='sm1 sm2 zsm' src={smoke}alt="" />
  <img className='sm1 sm3 zsm' src={smoke} alt="" /></div>
  
</div>
</div>

</div>
<h6 className="mt-6 mb-0 ml-2">Mess Details</h6>
<p className="ml-2 leading-normal text-sm"><span className="font-bold">Active</span> from Jan 23,2023</p>
<div className="w-full px-6 mx-auto max-w-screen-2xl rounded-xl">
<div className="flex flex-wrap mt-0 -mx-3 flex-star">
<div className="flex-none w-1/4 max-w-full py-4 pl-0 pr-3 mt-0 koiv">
<div className="flex mb-2 wrapping">
<div className="flex items-center justify-center mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-purple-700 to-pink-500 text-neutral-900 wrem">
<FoodBankRoundedIcon sx={{ fontSize: 20,color:"white" }} />
</div>
<p className="mt-1 mb-0 font-semibold leading-tight text-xs">Last</p>
</div>
<h4 className="font-rs">&#8377;4K</h4>

</div>
<div className="flex-none w-1/4 max-w-full py-4 pl-0 pr-3 mt-0 koiv">
<div className="flex mb-2 wrapping">
<div className="flex items-center justify-center mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-blue-600 to-cyan-400 text-neutral-900 wrem">
<AccountBalanceWalletRoundedIcon sx={{ fontSize: 20,color:"white" }} />

</div>
<p className="mt-1 mb-0 font-semibold leading-tight text-xs">Used</p>
</div>
<h4 className="font-rs"> &#8377;14K</h4>

</div>
<div className="flex-none w-1/4 max-w-full py-4 pl-0 pr-3 mt-0 koiv">
<div className="flex mb-2 wrapping">
<div className="flex items-center justify-center mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-red-500 to-yellow-400 text-neutral-900 wrem">
<AccountBalanceRoundedIcon sx={{ fontSize: 20,color:"white" }} />

</div>
<p className="mt-1 mb-0 font-semibold leading-tight text-xs">Left</p>
</div>
<h4 className="font-rs">&#8377;10.5K</h4>

</div>
<div className="flex-none w-1/4 max-w-full py-4 pl-0 pr-3 mt-0 koiv">
<div className="flex mb-2 wrapping ">
<div className="flex items-center justify-center mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-red-600 to-rose-400 text-neutral-900 wrem">
<PriceChangeRoundedIcon sx={{ fontSize: 20,color:"white" }} />

</div>
<p className="mt-1 mb-0 font-semibold leading-tight text-xs">Total</p>
</div>
<h4 className="font-rs">&#8377;24.5K</h4>

</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full max-w-full px-3 mt-0 lg:flex-none chewta">
<div className="border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border bdrbl">
<div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
<h6>Announcements</h6>

</div>
<div className="flex-auto p-4 thisisannounces">
<div>
<ul className='thisisul' id='ulof'>
  <li className='text-whit twl'>Billi ne kutte ko kata</li>
  <li className='text-whit twl'>ladke ki dulhan gohde k saath bhaagi</li>
  <li className='text-whit twl'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quaerat, nostrum eligendi omnis amet repellat sapiente nam et aliquid unde eveniet commodi earum id minima impedit voluptatibus, deserunt corrupti esse?
  </li>
  <li className='text-whit twl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad id doloremque, distinctio repellendus, error, omnis animi impedit sapiente eius harum aliquid cumque aliquam mollitia nihil atque cum odio. Reiciendis, esse nulla sit eveniet dolores consequatur cum voluptatibus, libero natus culpa a maiores dolore quia? Dolorum rem ullam molestias, veniam beatae laboriosam officiis eum repellat voluptatem odio commodi inventore dignissimos sapiente vero sint nobis? Consequuntur nostrum officiis, voluptate doloribus hic maiores ipsum aut totam est expedita provident, repudiandae tempora quibusdam vero a explicabo modi? Optio hic praesentium voluptatibus fugit excepturi quasi eaque blanditiis eligendi laudantium. Id optio consequatur dolorum atque libero.last line</li>
</ul>

</div>
</div>
</div>
</div>
</div>
  
</div> 
  
   </>
    
  )
}
