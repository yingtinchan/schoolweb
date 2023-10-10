let data = [
    {
        "title":"Introduction",
        "img":"/public/img/index/thumb-schoolguide.jpeg",
        "contect": [
            ["HKIT Message","#"],
            ["Institute History","#"],
            ["Vision & Mission","#"],
            ["Administrative Unit","#"],
            ["Faculty Unit","#"],
            ["Campus","#"],
            ["Contact Us","#"],
            ["Resources and Facilities","#"],
            ["Staff Email Service","#"]
        ]
    },
    {
        "title":"Admission",
        "img":"/public/img/index/thumb-educationtrait.jpeg",
        "contect": [
            ["Prospective Student","#"],
            ["Financial Assistance","#"],
            ["Available Programmes","#"],
            ["Online Application","#"],
            ["Student Email Service","#"]
        ]
    },
    {
        "title":"Programms",
        "img":"/public/img/index/thumb-schoollife.jpeg",
        "contect": [
            ["Bachelor  Degree","#"],
            ["Top-Up Degree","#"],
            ["Higher Diploma","#"],
            ["Diploma in College Foundation Studies (DCFS)","#"],
            ["Diploma of Applied Education (DAE)","#"],
            ["Diploma Yi Jin (DYJ)","#"],
            ["Applied Learning (ApL)","#"],
            ["Continuing Education Fund (CEF)","#"],
            ["Short Course","#"]
        ]
    },
    {
        "title":"News",
        "img":"/public/img/index/thumb-entranceguide.jpeg",
        "contect": [
            ["HKIT News","#"],
            ["Student Notice","#"],
            ["Previous News","#"],
            ["All News","#"]
        ]
    },
    {
        "title":"About",
        "img":"/public/img/index/thumb-guidance.jpeg",
        "contect": [
            ["Contact Us","#"],
            ["Map","#"]
        ]
    }
]

navbar()
menubar()
footer()

function navbar(){
        let nav='<ul id="js-index-nav">'
        for(let i=0; i<data.length;i++){
            nav+=`<li><span class="toggle-btn">${data[i].title}</span>
            <div class="toggle-cont">
              <div class="wrap">
                <div class="index-nav-img">
                <img src="${data[i].img}">
                </div>
                <div class="index-nav-txt">
                  <div class="index-nav-title">${data[i].title}</div>
                  <div class="index-nav-body">
                `
            for(let k=0;k<data[i].contect.length;k++){
                if(k%4==0){
                    nav+=`<ul><li><a href="${data[i].contect[k][1]}">${data[i].contect[k][0]}</a></li>`
                }else if(k%4==3){
                    nav+=`<li><a href="${data[i].contect[k][1]}">${data[i].contect[k][0]}</a></li></ul>`
                }else{
                    nav+=`<li><a href="${data[i].contect[k][1]}">${data[i].contect[k][0]}</a></li>`
                }
            }
            if(data[i].contect.length%4!=0){
                nav+=`</ul>`
            }
            nav+='</div></div></div></div></li>'
        }
        nav+='</ul>'
    document.querySelector("#nav-bar").innerHTML = nav
}

function footer(){
    let nav = ''
    for(let i=0; i<data.length;i++){
        nav+=`<div class="grid-item">
        <div class="grid-title">${data[i].title}</div>
        <div class="grid-body">
        <ul>`
        for(let k=0;k<data[i].contect.length;k++){
            nav+=`<li><a href="${data[i].contect[k][1]}">${data[i].contect[k][0]}</a></li>`
        }
        nav+=`</ul>
        </div>
      </div>`
    }
    document.querySelector("#footer-nav").innerHTML = nav
}

function menubar() {
    let nav = '<ul class="menu-cont-wrap pc-hide">'
    for(let i=0; i<data.length;i++){
        nav+=`
        <a href="#" class="switch">${data[i].title}</a>
        <ul>`
        for(let k=0;k<data[i].contect.length;k++){
            nav+=`<li><a href="${data[i].contect[k][1]}">${data[i].contect[k][0]}</a></li>`
        }
        nav+=`</ul>
        </li>`
    }
    nav+='</ul>'
    document.querySelector("#menu-nav").innerHTML = nav
}