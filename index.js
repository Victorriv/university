    document.addEventListener('DOMContentLoaded', () => { // callback function, asychronous, arrow function
        document.getElementById('universities').addEventListener('click', university) // when you click 
        university();
        
        

    })

    function university (){
        let info = document.getElementById('info') 
        let universities  = document.getElementById("university-list") 
        info.innerHTML = "" 
        universities.innerHTML = "" 
        fetch ("http://universities.hipolabs.com/search?country=United+Kingdom")
        .then(res => res.json())
        .then(data => {  
            data.map(uni => { 
                universities.innerHTML += ` 
                <li>
                <a href="#" data-name="${uni.name}"
                data-country="${uni.country}"
                > ${uni.name} </a>  
                
                <button data-likes = "0"  class = "buttons"> like!</button>
                    </li>
                `

            }) 
            
            
            
            
          schoolLinks() 
        })
    };

     function schoolLinks(){ 
        const buttonLiker = document.querySelectorAll(`button.buttons`) 
        buttonLiker.forEach(college => { 
            college.addEventListener('click', likeSchool) 
        })


        const campuses = document.querySelectorAll(`li a`) 
        campuses.forEach(uni => { 
            uni.addEventListener('click', showUni) 
         })  
    }


        function likeSchool(e){
            
            const li = e.target.parentElement 
            const button = e.target  
            const likes = li.querySelector(`p`)  
            button.dataset.likes ++ 
            

           
            if (likes === null){ 
                li.insertAdjacentHTML(`beforeend`, `<p id = "likes" > Likes: ${button.dataset.likes}</p>`) 
                
            }
            else {
                likes.innerText = `Likes: ${button.dataset.likes}` 
            }
        }



     function showUni(event){ 
       
        let a = event.target 
        let universities = document.getElementById('university-list') 
        universities.innerHTML = `
                                    <h2>School Name:</h2>
                                    <p>${a.dataset.name}</p>
                                    <br>
                                    <h3>Country Name:</h3>
                                    <p>${a.dataset.country}</p>`
          
    }



        
        
        
        
        
        
