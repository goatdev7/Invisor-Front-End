function check(){
  
    var a = document.getElementById('firstpara').value;
  
    var b = document.getElementById('secondpara').value;
  
    var c =document.getElementById('thirdpara').value;
  
    var d = a.split(" ");
    var e = b.split(" ");
    var f = c.split(" ");
    var l=[]
   
    for (i=0; i<d.length ;i++){
      if (/[0-1*]/.test(d[i])== true){
      for(j=0; j<e.length; j++){
          if (d[i]==e[j]){
            for(k=0; k<f.length; k++){
              if (d[i]==f[k]){
                if(l.length==0){
                    l.push(d[i]);
                    var x = document.createElement('p');
                        x.innerHTML = l[0];

                        document.body.appendChild(x); 
                 
                }
                else if(l.length==1){
                    if(l[0]!=d[i]){
                        l.push(d[i]);
                        var x = document.createElement('p');
                        x.innerHTML = l[1];

                        document.body.appendChild(x); 
                    }
                else
                {
                    for(m=0; m<=l.length-1; m++){
                        if(l[m]!= d[i] && l[m+1]!=d[i]){
                          l.push(d[i]);
                          var x = document.createElement('p');
                            x.innerHTML = l[-1];

                            document.body.appendChild(x); 
                          
                        }
              
                  
                      
                      }
                }
                  
                  
                
              
                  
            }
             
            }    
      }
          
          
    }
    

    
    
                               
    }
      }    
    }

      
}
    