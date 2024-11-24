const input = document.querySelector("#search")
const fresh = document.querySelector("#form")
const main = document.querySelector("#main")

input.addEventListener("focusout", function () {
    check(input)
});
const check = (input) => {
    if (input.value != "") {
        getdata(input.value);
        input.value="";

    }
    return false;
}
const getdata = async (val) => {
    const api = `https://api.github.com/users/${val}`
    const data = await fetch(api).then((data) => {
        console.log(data)
        return data.json()
    })
    console.log(data)
    const card = `<div id="card">
            <div>
                <img src="${data.avatar_url}" alt="" srcset="" class="img">
            </div>
            <div class="card-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>
                <ul class="info">
                    <li>${data.followers}<strong>Followers</strong></li>
                    <li>${data.following}<strong>Following</strong></li>
                    <li>${data.public_repos}<strong>Repos</strong></li>
                </ul>
                <div id="link">
                    <a href="#" target="_blank">${data.html_url}</a>
                              
             </div>
    
            </div>
        </div>`
    main.innerHTML = card;
//   getrepo(api)

}
/**
 *  <a href="#" target="_blank">Repo1</a>
                    <a href="#" target="_blank">Repo2</a>
                    <a href="#" target="_blank">Repo3</a>
 
  const  getrepo=async(url)=>{
    const box=document.querySelector("#link")
    const rep=await fetch(`${url}/repos`).then((data)=>{
        // console.log(data);
        return data.json();
    })
    // console.log(rep) 
    const brea=document.createElement("br")
    rep.forEach((dat)=>{
        const elem=document.createElement("a");
        elem.href=dat.html_url;
        elem.innerHTML=dat.name;
        elem.target="_blank"
        box.appendChild(elem);
        // box.appendChild(brea)

    })
  }*/