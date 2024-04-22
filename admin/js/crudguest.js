var form = document.getElementById("myForm"),
    imgInput = document.querySelector(".img"),
    file = document.getElementById("imgInput"),
    servicetype = document.getElementById("servicename"),
    settime = document.getElementById("timename"),
    date = document.getElementById("datename"),
    servicefee = document.getElementById("feename"),
    submitBtn = document.querySelector(".submit"),
    userInfo = document.getElementById("data"),
    modal = document.getElementById("userForm"),
    modalTitle = document.querySelector("#userForm .modal-title"),
    newUserBtn = document.querySelector(".newUser")

    let getData = localStorage.getItem('guestservicemenu') ? JSON.parse(localStorage.getItem('guestservicemenu')) : []
    let isEdit = false, editId

    showInfo()


newUserBtn.addEventListener('click', ()=> {
    submitBtn.innerText = 'Submit',
    modalTitle.innerText = "Fill the Form"
    isEdit = false
    imgInput.src = "/img/logo.png"
    form.reset()
})

file.onchange = function(){
    if(file.files[0].size < 1000000){  // 1MB = 1000000
        var fileReader = new FileReader();

        fileReader.onload = function(e){
            imgUrl = e.target.result;
            imgInput.src = imgUrl;
        };

        fileReader.readAsDataURL(file.files[0]);
    }
    else{
        alert("This file is too large!");
    }
};

function showInfo(){
    document.querySelectorAll('.serviceDetails').forEach(info => info.remove());
    getData.forEach((element, index) => {
        let createElement = `<tr class="serviceDetails">
            <td><img src="${element.picture}" alt="" width="50" height="50"></td>
            <td>${element.serviceType}</td>
            <td>${element.settime}</td>
            <td>${element.date}</td>
            <td>${element.servicefee}</td>
            <td>
                <button class="btn btn-success" onclick="readInfo('${element.picture}', '${element.serviceType}', '${element.settime}', '${element.date}', '${element.servicefee}')" data-bs-toggle="modal" data-bs-target="#readData"><i class="bi bi-eye"></i></button>

                <button class="btn btn-primary" onclick="editInfo(${index}, '${element.picture}', '${element.serviceType}', '${element.settime}', '${element.date}', '${element.servicefee}')" data-bs-toggle="modal" data-bs-target="#userForm"><i class="bi bi-pencil-square"></i></button>

                <button class="btn btn-danger" onclick="deleteInfo(${index})"><i class="bi bi-trash"></i></button>
            </td>
        </tr>`;

        userInfo.innerHTML += createElement;
    });
}
showInfo()

function readInfo(pic, type, time, date, fee){
    document.querySelector('.showImg').src = pic,
    document.querySelector('#servicetype').value = type,
    document.querySelector("#settime").value = time,
    document.querySelector("#date").value = date,
    document.querySelector("#servicefee").value = fee
}

function editInfo(index, pic, type, time, date, fee){
    isEdit = true;
    editId = index
    imgInput.src = pic
    serviceType.value = type
    settime.value = time
    date.value = date
    servicefee.value = fee

    submitBtn.innerText = "Update";
    modalTitle.innerText = "Update Service";
}

function deleteInfo(index){
    if(confirm("Are you sure want to delete?")){
        getData.splice(index, 1)
        localStorage.setItem("guestservicemenu", JSON.stringify(getData))
        showInfo()
    }
}

form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const serviceInfo = {
        picture: imgInput.src == undefined ? "./img/logo.png" : imgInput.src,
        serviceType: servicetype.value,
        settime: settime.value,
        date: date.value,
        servicefee: servicefee.value
    };

    if(!isEdit){
        getData.push(serviceInfo);
    }
    else{
        isEdit = false;
        getData[editId] = serviceInfo;
    }

    localStorage.setItem('guestservicemenu', JSON.stringify(getData));

    submitBtn.innerText = "Submit";
    modalTitle.innerText = "Fill the Form";

    showInfo();

    form.reset();
    imgInput.src = "/img/logo.png";
});
