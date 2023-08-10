var button = document.getElementById("colorButton");
     var colors = ["red", "green" ,"blue", "yelow",  "brown" , "orange",  "purple", "black"];
     var currentColorIndex = 0;
  
     button.addEventListener("click", function() {
      document.body.style.backgroundColor = colors[currentColorIndex];
      colorDisplay.textContent = "Cor escolhida: " + colors[currentColorIndex];
      
      currentColorIndex = (currentColorIndex + 1) % colors.length;
  
    
  });
  document.getElementById("btn-red").addEventListener("click", function(){
      document.querySelector("body").setAttribute("class","red");
      })
      
      document.getElementById("btn-green").addEventListener("click", function(){
      document.querySelector("body").setAttribute("class","green");
      })
      
      document.getElementById("btn-blue").addEventListener("click", function(){
      document.querySelector("body").setAttribute("class","blue");
      })
  
      document.getElementById("btn-yelow").addEventListener("click", function(){
      document.querySelector("body").setAttribute("class","yelow");
      })

      document.getElementById("btn-brown").addEventListener("click", function(){
      document.querySelector("body").setAttribute("class","brown");
      })
  
      document.getElementById("btn-orange").addEventListener("click", function(){
      document.querySelector("body").setAttribute("class","orange");
            })

      document.getElementById("btn-purple").addEventListener("click", function(){
      document.querySelector("body").setAttribute("class","purple");
      })
  
      document.getElementById("btn-black").addEventListener("click", function(){
      document.querySelector("body").setAttribute("class","black");
      })
  
    