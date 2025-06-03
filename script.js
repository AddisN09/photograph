document.addEventListener('DOMContentLoaded',()=>{
     const modal=document.getElementById('modal');
    const modaltext=document.getElementById('name-of-image');
    const modaldate=document.getElementById('date-of-image');
    const motivation=document.getElementById('motivation');
    const modalimage=document.getElementById('modal-image');
  if(modal){
     let photos=document.querySelectorAll('.photo-item');
    photos.forEach(photo=>{
        photo.addEventListener('click',()=>{
            modaltext.textContent=photo.dataset.names;
            modaldate.textContent=photo.dataset.date;
            motivation.textContent=photo.dataset.motivotion;
            modalimage.src=photo.dataset.image;
            modal.style.display='grid';
        });
    });
    modal.addEventListener('click',e=>{
        if(e.target===modal){
            modal.style.display='none';
        }
    });

  }

const form=document.getElementsByClassName('form-container')[0];
const text=document.getElementById('popuptext');


if(form){
form.addEventListener('submit',e=>{
    e.preventDefault();
    text.textContent="Thank you for your message! I'll get back to you soon.";
    form.reset();
});
}


});