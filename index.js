
const staffData = [
    {
        name:"Odii Chinedu Wisdom", location:"Abakaliki - GRA service center",staffId:"001",designation:"Op-Tech",age:"35yrs",gender:"Male",nickName:"Peace maker"
    },
    {
        name:"Nwaba Chinedu", location:"Abakaliki - GRA service center",staffId:"002",designation:"Op-Tech",age:"39yrs",gender:"Male",nickName:"Daddy Obiuto"
    },
    {
        name:"Oko Emmanuel Ukpai", location:"Abakaliki - GRA service center",staffId:"003",designation:"Op-Tech",age:"29yrs",gender:"Male",nickName:"Nwoke n'ife"
    },
    {
        name:"Nnamani Chidiebere", location:"Abakaliki - GRA service center",staffId:"004",designation:"Op-Tech",age:"32yrs",gender:"Male",nickName:"Honorable"
    },
    {
        name:"Egbe Emmanuel Nnaemeka", location:"Abakaliki - GRA service center",staffId:"005",designation:"Op-Tech",age:"34yrs",gender:"Male",nickName:"Ego Ochie"
    },
    {
        name:"Ikeweta Calistus", location:"Abakaliki - GRA service center",staffId:"006",designation:"Op-Tech",age:"37yrs",gender:"Male",nickName:"Cali bobo"
    },
    {
        name:"Uhuo Stanislaus Odinaka", location:"Abakaliki - GRA service center",staffId:"007",designation:"Marketer",age:"33yrs",gender:"Male",nickName:"Okpoka Oru"
    },
    {
        name:"Uhuo Elochukwu", location:"Abakaliki - GRA service center",staffId:"008",designation:"Marketer",age:"29yrs",gender:"Female",nickName:"Understanding"
    },
    {
        name:"Nwigbo Chnasa", location:"Abakaliki - GRA service center",staffId:"009",designation:"Marketer",age:"31yrs",gender:"Female",nickName:"Eku Nwa n'aka"
    },
    {
        name:"Udensi Oluchi", location:"Abakaliki - GRA service center",staffId:"010",designation:"Marketer",age:"30yrs",gender:"Female",nickName:"Rico"
    },
    {
        name:"Chukwu Gift Udu", location:"Abakaliki - GRA service center",staffId:"011",designation:"Marketer",age:"25yrs",gender:"Female",nickName:"Giftyfarrah"
    },
    {
        name:"Namani Stella Amara", location:"Abakaliki - GRA service center",staffId:"012",designation:"Marketer",age:"28yrs",gender:"Female",nickName:"Mommy Anyi"
    },
    {
        name:"Ukuaghe Grace Ebube", location:"Abakaliki - GRA service center",staffId:"013",designation:"Customer Service Rep.",age:"28yrs",gender:"Female",nickName:"Mrs Anoh"
    },
    {
        name:"Ugwu Friday Bathlomew", location:"Abakaliki - GRA service center",staffId:"000",designation:"Feeder Manager",age:"63yrs",gender:"Male",nickName:"Odikasigbuo"
    },
    {
        name:"Asogwa Precious", location:"Abakaliki - GRA service center",staffId:"014",designation:"Marketer",age:"32yrs",gender:"Female",nickName:"Olaedo"
    },
    {
        name:"Nweze Goodness", location:"Abakaliki - GRA service center",staffId:"015",designation:"Marketer",age:"29yrs",gender:"Female",nickName:"Nwakiyeye"
    },
    {
        name:"Okoro Benedicta", location:"Abakaliki - GRA service center",staffId:"016",designation:"Marketer",age:"35yrs",gender:"Female",nickName:"Police woman"
    },
    {
        name:"Nweke Amaka Precious", location:"Abakaliki - GRA service center",staffId:"017",designation:"Baxi Champion",age:"30yrs",gender:"Female",nickName:"Madam baxi"
    },
    {
        name:"Ipere Desmond Nnaemeka", location:"Abakaliki - GRA service center",staffId:"018",designation:"Op-Tech",age:"36yrs",gender:"Male",nickName:"Onye guy"
    }

]


const text = document.querySelector(".text");
const element = document.createElement("button");
const elementText = document.createTextNode("Add");

const input = document.createElement("input");
const tfoot = document.querySelector(".tfoot");
element.appendChild(elementText);
tfoot.appendChild(element);
tfoot.appendChild(input);


function cloneElement(){
const template = document.querySelector(".staffData");
const clone = template.content.cloneNode(true);
const td = clone.querySelectorAll("td");
const tbody = document.querySelector("tbody");

const staff = staffData.find(element => input.value === element.staffId);
if(!staff){
    alert("This is not our staff");
    return;
}

td[0].textContent = staff.name;
td[1].textContent = staff.staffId;
td[2].textContent = staff.location;
td[3].textContent = staff.designation;
td[4].textContent = staff.age;
td[5].textContent = staff.gender;
tbody.appendChild(clone);
input.value = "";
return;
}

function addClone(){
    element.addEventListener("click",()=>{
        let p = document.createElement("p");
        const staff = staffData.find(element => input.value === element.staffId);
        p.innerText = staff.nickName;
        p.classList.add("peem");
        text.appendChild(p);
        const peem = document.querySelectorAll(".peem");
        cloneElement();
})
}
addClone();

