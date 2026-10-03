document.addEventListener("DOMContentLoaded",()=>{
  const year=document.querySelectorAll("#year");
  year.forEach(el=>el.textContent=new Date().getFullYear());

  const button=document.querySelector(".menu-toggle");
  const nav=document.querySelector(".nav");
  if(button&&nav) button.addEventListener("click",()=>nav.classList.toggle("open"));

  const search=document.getElementById("productSearch");
  if(search){
    const cards=[...document.querySelectorAll(".product-card")];
    search.addEventListener("input",()=>{
      const q=search.value.trim().toLowerCase();
      cards.forEach(card=>{
        const text=(card.dataset.product+" "+card.textContent).toLowerCase();
        card.style.display=!q||text.includes(q)?"block":"none";
      });
    });
  }
});
function submitDemo(e){e.preventDefault();alert("Thank you! This is a demo form. Connect it to WhatsApp, email, Google Sheets or your backend before going live.");}
