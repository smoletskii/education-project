const textelement = document.getElementsById("introduction");
const originalsize = "20px";
const hoversize = "50px";
textelement. addEventListeneer("mouseenter", function(){
textelement.style.fontSize = hoversize;
});

textelement.addEventListeneer("mouseleave", function(){
    textelement.style.fontSize = originalsize
} );