var form = document.getElementById("myForm"),
    imgInput = document.querySelector(".img"),
    file = document.getElementById("imgInput"),
    roomtype = document.getElementById("roomname"),
    description = document.getElementById("descriptionname"),
    amount = document.getElementById("amountname"),
    submitBtn = document.querySelector(".submit"),
    userInfo = document.getElementById("data"),
    modal = document.getElementById("userForm"),
    modalTitle = document.querySelector("#userForm .modal-title"),
    newUserBtn = document.querySelector(".newUser");


let getData = localStorage.getItem('roomCustomization') ? JSON.parse(localStorage.getItem('roomCustomization')) : [];

let isEdit = false, editId;

showInfo();

newUserBtn.addEventListener('click', ()=> {
    submitBtn.innerText = 'Submit',
    modalTitle.innerText = "Fill the Form";
    isEdit = false;
    imgInput.src = "/img/logo.png";
    form.reset();
});

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
    document.querySelectorAll('.roomDetails').forEach(info => info.remove());
    getData.forEach((element, index) => {
        let createElement = `<tr class="roomDetails">
            <td><img src="${element.picture}" alt="" width="50" height="50"></td>
            <td>${element.roomType}</td>
            <td>${element.description}</td>
            <td>${element.amount}</td>
            <td>
                <button class="btn btn-success" onclick="readInfo('${element.picture}', '${element.roomType}', '${element.description}', '${element.amount}')" data-bs-toggle="modal" data-bs-target="#readData"><i class="bi bi-eye"></i></button>

                <button class="btn btn-primary" onclick="editInfo(${index}, '${element.picture}', '${element.roomType}', '${element.description}', '${element.amount}')" data-bs-toggle="modal" data-bs-target="#userForm"><i class="bi bi-pencil-square"></i></button>

                <button class="btn btn-danger" onclick="deleteInfo(${index})"><i class="bi bi-trash"></i></button>
            </td>
        </tr>`;

        userInfo.innerHTML += createElement;
    });
}

function readInfo(pic, type, desc, amt){
    document.querySelector('.showImg').src = pic;
    document.querySelector('#roomtype').value = type;
    document.querySelector("#description").value = desc;
    document.querySelector("#amount").value = amt;
}

function editInfo(index, pic, type, desc, amt){
    isEdit = true;
    editId = index;
    imgInput.src = pic;
    roomtype.value = type;
    description.value = desc;
    amount.value = amt;

    submitBtn.innerText = "Update";
    modalTitle.innerText = "Update Room";
}

function deleteInfo(index){
    if(confirm("Are you sure want to delete?")){
        getData.splice(index, 1);
        localStorage.setItem("roomCustomization", JSON.stringify(getData));
        showInfo();
    }
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    const roomInfo = {
        picture: imgInput.src,
        roomType: roomtype.value,
        description: description.value,
        amount: amount.value
    };

    if(!isEdit){
        getData.push(roomInfo);
    }
    else{
        isEdit = false;
        getData[editId] = roomInfo;
    }

    localStorage.setItem('roomCustomization', JSON.stringify(getData));

    submitBtn.innerText = "Submit";
    modalTitle.innerText = "Fill the Form";

    showInfo();

    form.reset();
    imgInput.src = "/img/logo.png";
});
