   let Mainpage=document.createElement('main');
    Mainpage.className='main';
    Mainpage.innerHTML=`

<div class="name">
<span>Aditya</span>
<span>Rathod</span>
        <i class="fa-solid fa-pen-nib fa-bounce"></i>
</div>

<div class="Pname">
      <span class="fa-solid fa-code fa-fade" ></span>
     <span> Frontend Developer </span>
     <span class="fa-brands fa-hashtag fa-fade" ></span>
 </div>

 <div class="skills">
    <div>Skills</div>
    <div>
        <span>Javascript</span>
        <span>Phyton</span>
        <span>C</span>
        <span>Docker</span>
        <span>Dart</span>
        <span>Node js</span>
        <span>Git</span>
        <span>Flask</span>
    </div>
</div>

<div class="links">
        <a href="" title=""><i class="fa-brands fa-github"></i></a>
        <a href="mailto:adityarathod1425@gmail.com" title="adityarathod1425@gmail.com"><i class="fa-regular fa-envelope"></i></a>
        <a href="tel:+919359409686" title="+91 9359409686"><i class="fa-solid fa-phone"></i></a>
        <a href="" title=""><i class="fa-brands fa-linkedin"></i></a>
        <a href="" title=""><i class="fa-brands fa-instagram"></i></a>
</div>

<div class="more"  onclick=" Hmain() ">
    More about me
</div>
    
    `;
document.body.append(Mainpage)

 function Load(){
 document.querySelector('.main').style.height = `${window.innerHeight - 20}px`;
 document.querySelector('.Main').style.display = 'none';
  
  }
 function Hmain(){
    document.querySelector('.main').style.display = 'none';
    document.querySelector('.Main').style.display = 'flex';
  }

