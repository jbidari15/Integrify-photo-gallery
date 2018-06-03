document.addEventListener("DOMContentLoaded", function(event) {
    let index=0;
    const showSmallImages=()=>{
        data.forEach((element)=>{
             let allImage=document.getElementById("all-images");
             let smallDiv= document.createElement("div");
             smallDiv.className="smallImageDiv";
             let smallImage=document.createElement("img");
            smallImage.className="small-image"
            smallImage.src=`pictures/${element.src}`;
            let caption = document.createElement("div");
            caption.innerText=element.firstName+" "+element.lastName;
            caption.className="caption";
            allImage.appendChild(smallDiv);
            smallDiv.appendChild(smallImage);
            smallDiv.appendChild(caption);
        
     
    
        })
    }
    showSmallImages();
    
    const showDetails=(obj)=>{
        let name=document.getElementById("name");
        let title=document.getElementById("title");
        let nationality=document.getElementById("nationality");
        let skills=document.getElementById("skills");
        let why=document.getElementById("why-sw");
        let longTerm=document.getElementById("long-term");
        let motivation=document.getElementById("motivation");
        let quote=document.getElementById("quote");
        let join=document.getElementById("join");
     
        name.innerHTML=obj.firstName+" "+obj.lastName;
        title.innerHTML=obj.title;
        nationality.innerHTML=obj.nationality;
        skills.innerHTML=obj.skills;
        why.innerHTML=obj.whySofterDeveloper;
        longTerm.innerHTML=obj.longTermVision;
        motivation.innerHTML=obj.motivatesMe;
        quote.innerHTML=obj.favoriteQuote;
        join.innerHTML=obj.joinedOn;
    
    }
    
    const showBigImage=()=>{
        let smallImages=document.getElementsByClassName("small-image");
        let allImage=document.getElementById("all-images");
        // Get the modal
        let modal = document.getElementById('myModal');
        let modalImg = document.querySelector(".modal .modal-content");
        let close=document.querySelector(".close");
    
        for(let i=0;i<smallImages.length;i++){
            let container=document.querySelector(".container");
            smallImages[i].addEventListener("click",(e)=>{
                allImage.style.display="none";
                modal.style.display="block";
                modalImg.src=smallImages[i].src;
                index=i;
               container.style.overflow="hidden";
                showDetails(data[i]);
               
            })
            close.addEventListener("click",()=>{
                container.style.overflow="visible";
                modal.style.display = "none";
                allImage.style.display="grid";
            })
        }
    }
    showBigImage();

const displayItem=(value)=>{
    let modal = document.getElementById('myModal');
    let wrapper=document.querySelector(".img-detail-wrapper");
    let modalImg = document.querySelector(".modal .modal-content");
    wrapper.addEventListener("click",(e)=>{
        
        if(index>-1 && index<data.length){
           if(e.target.classList.contains("fa-arrow-right")||e.target.classList.contains("right-button")&& index<data.length-1){
            index+=value;
            modal.style.display="block";
            if(index===data.length){
                index=0;
            }
            modalImg.src=`pictures/${data[index].src}`;
            showDetails(data[index]);
           
           }
      
         else  if(e.target.classList.contains("fa-arrow-left")||e.target.classList.contains("left-button")&& index>0 &&index<data.length-1){
            index-=value;  
            if(index===-1){
                index=data.length-1;
            }
              modal.style.display="block";
              modalImg.src=`pictures/${data[index].src}`;
            showDetails(data[index]);
         }
    }
      
     
    })
}
displayItem(1);



});