 const hamburguerHeaderBTN = document.querySelector("#hamburguerHeader");
 const logo = document.querySelector(".logo");
 const logoImage = document.querySelector(".logoImage");
 
 if (hamburguerHeaderBTN !== null) {
     hamburguerHeaderBTN.addEventListener("click", () => {
         document.querySelector(".menuContainer").classList.toggle("show");
         if(document.querySelector(".menuContainer").classList.contains("show")){
             hamburguerHeaderBTN.src="/assets/img/x.svg";
            }else{
                hamburguerHeaderBTN.src="/assets/img/hamburguer.svg";    
         }
     });
 }
 if (logo !== null) {
     logo.addEventListener("click", () => {
        window.location.href="/";
     });
 }
 if (logoImage !== null) {
     logoImage.addEventListener("click", () => {
        window.location.href="/";
     });
 }
