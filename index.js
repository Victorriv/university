

document.addEventListener('DOMContentLoaded', ()=> {
    university();

})

function university(){
    fetch ("http://universities.hipolabs.com/search?country=United+Kingdom")
    .then(res => res.json())
    .then(data => renderSchools (data.results));
};

const schools = (info) => {
    console.log(info);
};