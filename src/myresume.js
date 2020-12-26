import './App.css';
import react,{useState,useEffect} from 'react'

export default function Myresume() {

  const [display ,setdisplay]=useState(false);

  const [windowsidebar ,setwindowsidebar]=useState(false);

useEffect(()=>
{
    if(window.innerWidth <= 960)
    {
    setdisplay(true)
    setwindowsidebar(true)
    
    } 
    else
    {
    setdisplay(false)
    setwindowsidebar(false)
   
    }
})
 

 window.addEventListener('resize',setdisplay);
 window.addEventListener('resize',setwindowsidebar);
  
  return (
      
    <div className={display ? "mobile":"website"}>
      <div className="container-fluid">
      <div className={windowsidebar?"Side-bar-mobile":"Side-bar"}>
            <div className="Resume_Heading">
              <p>MYRESUME</p>
            </div>

            <div className="img_pic">
              <img src="profilepic.jpg"></img>
            </div>

            <div className="Personal_details">
           
               <div className="Sub_details">
               <h6>ABOUT ME</h6>
                 <ul>
                 <p> My Name is Arjuna N R ,My native is Niluvani which is preasent near Agumbe,shivamogga Karnataka
                  I completed My graduation in MCA in JNNCE at Shivamogga,and completed my degree in Bsc at TungaMahavidyalaya
                  Thirthahalli</p>
                 </ul>
               </div>
               <div className="Sub_details">
               <h6>ADDRESS</h6>
               <ul>
                  
                   <li>Arjuna N R</li>
                   <li>S/O Rajashekara N C</li>
                   <li>Niluvali</li>
                   <li>Kendalbail(p)</li>
                   <li>Thirthahalli(T)</li>
                   <li>Shivamogga(D)</li>
                   <li>Karnatake(S)</li>
                   <li>India(c)</li>
                   <li>PinCode:577411</li>
                 </ul>
               </div>
               <div className="Sub_details">
               <h6>SOCIAL MEDIA AND LINK</h6>
               <ul>
              
                   <div style={{width:"90%",height:"auto",padding:"1%"}}>
                       <li>Facebook</li>
                       <li>ArjunGowdaNiluvani</li>
                       <p></p>
                       <li>Instagram</li>
                   <li>arjun_0000_Gowda</li>  
                   </div>
                 </ul>
               </div>
               <div className="Sub_details">
               <h6>NATIONALITY AND PROOF</h6>
                <ul>Nationality:India</ul>
                <ul>Proof:</ul>
                   <ul>
                   <li>AdarCard</li>
                   <li>voter Id</li>  
                   <li>PanCard</li>
                   </ul>
               
               
                  
               
               </div>
            </div>


      </div> 
       
    <div className="mainbar-sub">
    
    <div className="my-clg-exy">
        <p>Email:arjun042896@gmail.com</p>
        <p>Phone:9448427178</p>
    </div>
 
    <div className="my-clg-ex">
        <p>Exspirience</p>
        <p>My name is Arjuna N R ,
            I completed my post graduation in MCA ,
            i am good in proraming language like java ,
            c#,sql,html,css,javascrept,node js,core php,
            i got selected to quinnox and there i 
            completed three month training on
             html,css,javascrept,React js,c#,Sql</p>
    </div>
   
    <div className="my-clg-ex"><p>Education</p>
    <table border="1" style={{width:"90%",borderCollapse:"collapse",border:"1px;",marginLeft:"2%"}}>
        <tr style={{width:"10px",height:"auto",padding:"2px"}}>
            <th>catagery</th>
            <th>Name(S/c)</th>
            <th>YEAR</th>
            <th>Pecentage</th>
        </tr>
        <tr>
            <td>SSLC</td>
            <td>Gov.Shcool Basavani</td>
            <td>2012</td>
            <td>79.54</td>
          
        </tr>
        <tr>
            <td>PUC</td>
            <td>Gov.Junior.College,Thirthahalli</td>
            <td>2014</td>
            <td>69.34</td>
          
        </tr>
        <tr>
            <td>BSc</td>
            <td>TungaMahavidyalaya</td>
            <td>2017</td>
            <td>65.34</td>
          
        </tr>
        <tr>
            <td>MCA</td>
            <td>JNNCE Shivamogga</td>
            <td>2020</td>
            <td>7.5 cgpa</td>
          
        </tr>
    </table>
    
    </div>
    
    <div className="my-clg-ex">ProgramingLanguage
    

    <table border="0.1" style={{width:"90%",borderCollapse:"collapse"}}>
        <tr>
            <th>HTML</th>
            <th>CSS</th>
            <th>C#</th>
            <th>JAVA</th>
            <th>SQL</th>
        </tr>
    </table>
                  
                  
                </div>
 
    <div className="my-clg-exy">
       websitecreater:
                      <p>Arjuna N R</p>
                      <p>ph:9448427178</p>
                      <p>email:arjun042896@gmail.com</p>

    </div>
    </div>  

    </div>

</div>

  );
}

