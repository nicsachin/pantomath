

function main()
{var value=document.getElementById("value").value;
 var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+value+"&format=json&callback=?"; 
 var output=document.getElementById("output");

 
  output.innerHTML='';

  $.ajax({
  dataType: "json",
  url: url,
  success: function(data)
     {  

        
      for(var i=0;i<data.length;i++)
       { 
       	  
              if ((data[1][i]&&data[2][i])!=undefined) {
       	   output.insertAdjacentHTML('beforeend',"<li>"+data[1][i]+"--->"+data[2][i]+"</li>");
         }

       } 

      
       localStorage.setItem(value,JSON.stringify(data));
      
     }
});





}
