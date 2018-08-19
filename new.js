// function Loadjson(file,callback){
// 	var xhr = new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange=function(){
// 		if(xhr.readyState === 4 && xhr.status=="200")
// 		{
// 			callback(xhr.responseText);
// 		}
// 	};

// xhr.send(null);
// }
// Loadjson("data.json",function(text)
// {
// 	var data=JSON.parse(text);
// 	console.log(data);
// 	basics(data.details);
// 	careeri(data.career);
// 	educationinfo(data.education);
// 	technical(data.technical);
// 	acheivments(data.acheivments)
// })
     function loadjson(file)
     {
     	return new Promise((resolve,reject)=>
     	{
     		return fetch(file).then(response=>
     		{
     			if(response.ok)
     			{
     				resolve(response.json())
     			}
          	})
        })
     }
     var newfile=loadjson("data.json")
     newfile.then(data=>
     {
     	console.log(data);
     	basics(data.details);
     	careeri(data.career);
     	educationinfo(data.education);
     	technical(data.technical);
     	acheivments(data.acheivments);
     })
      var left=document.querySelector(".left");
     function basics(det){
     	var img = document.createElement("img");
        img.src=det.image;
        left.appendChild(img);

        var name1 =document.createElement("h2");
        name1.textContent=det.name;
        left.appendChild(name1);

        var num=document.createElement("h3");
        num.textContent=det.number;
        left.appendChild(num);

        var email=document.createElement("a");
        email.textContent=det.email;
        email.href="sirishakarumudiv@gmail.com";
        email.textContent=det.email;
        left.appendChild(email);

        var address=document.createElement("h3");
        address.textContent="Address";
        left.appendChild(address);
        var line=document.createElement("hr");
        left.appendChild(line);

        var address=document.createElement("h3");
        address.textContent=det.address;
        left.appendChild(address);


     }
     var right=document.querySelector(".right");

     function careeri(ca){
     	var info=document.createElement("h3");
     	info.textContent="career objective";
     	right.appendChild(info);
     	var line=document.createElement("hr");
     	right.appendChild(line);

     	var career=document.createElement("h4");
     	career.textContent=ca.info;
     	right.appendChild(career);

     	
     }
     function educationinfo(edu)
     {
     	var ed = document.createElement("h1");
     	ed.textContent="Education qualification";
     	right.appendChild(ed);

     	var line=document.createElement("hr");
     	right.appendChild(line);

     	var hr=document.createElement("h1");
     	right.appendChild(hr);

     	var table1=document.createElement("table");
     	table1.border="1",
     	right.appendChild(table1);

     	tabledata="";

     	for(i=0;i<edu.length;i++){

     		tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>"
     	}
     	table1.innerHTML=tabledata;
     }
     function technical(tec)
     {
     	var te=document.createElement("h1");
     	te.textContent="Technical skills";
     	right.appendChild(te);

     	var line=document.createElement("hr");
     	right.appendChild(line);
     	for(i=0;i<tec.length;i++){
     		var s=document.createElement("h3");
     		s.textContent=tec[i].title;
     		right.appendChild(s);


     		var ul=document.createElement("ul");
     		var li=document.createElement("li");
     		li.textContent=tec[i].info;
     		ul.appendChild(li);
     		right.appendChild(ul);
     	}


	  }
      function acheivments(ach)
      {
      	var ac=document.createElement("h1");
      	ac.textContent="Acheivments";
      	right.appendChild(ac);

      	var line=document.createElement("hr");
      	right.appendChild(line);
      	for(i=0;i<ach.length;i++){
      		var ul=document.createElement("ul");
      		 var li=document.createElement("li");
      		 li.textContent=ach[i].info;
      		 ul.appendChild(li);
      		 right.appendChild(ul);



      	}
      }




 