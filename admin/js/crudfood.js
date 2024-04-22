var form = document.getElementById("myForm"),
    imgInput = document.querySelector(".img"),
    file = document.getElementById("imgInput"),
    foodtype = document.getElementById("foodname"),
    category = document.getElementById("categoryname"),
    description = document.getElementById("descriptionname"),
    quantity = document.getElementById("quantityname"),
    amount = document.getElementById("amountname"),
    submitBtn = document.querySelector(".submit"),
    userInfo = document.getElementById("data"),
    modal = document.getElementById("userForm"),
    modalTitle = document.querySelector("#userForm .modal-title"),
    newUserBtn = document.querySelector(".newUser");


let getData = localStorage.getItem('roomservicerequest') ? JSON.parse(localStorage.getItem('roomservicerequest')) : [];

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
    document.querySelectorAll('.foodDetails').forEach(info => info.remove());
    getData.forEach((element, index) => {
        let createElement = `<tr class="foodDetails">
            <td><img src="${element.picture}" alt="" width="50" height="50"></td>
            <td>${element.foodType}</td>
            <td>${element.category}</td>
            <td>${element.description}</td>
            <td>${element.quantity}</td>
            <td>${element.amount}</td>
            <td>
                <button class="btn btn-success" onclick="readInfo('${element.picture}', '${element.foodType}', '${element.category}', '${element.description}', '${element.quantity}', '${element.amount}')" data-bs-toggle="modal" data-bs-target="#readData"><i class="bi bi-eye"></i></button>

                <button class="btn btn-primary" onclick="editInfo(${index}, '${element.picture}', '${element.foodType}', '${element.category}', '${element.description}', '${element.quantity}', '${element.amount}')" data-bs-toggle="modal" data-bs-target="#userForm"><i class="bi bi-pencil-square"></i></button>

                <button class="btn btn-danger" onclick="deleteInfo(${index})"><i class="bi bi-trash"></i></button>
            </td>
        </tr>`;

        userInfo.innerHTML += createElement;
    });
}
showInfo()

function readInfo(pic, type, catg, desc, qty, amt){
    document.querySelector('.showImg').src = pic;
    document.querySelector('#foodtype').value = type;
    document.querySelector('#category').value = catg;
    document.querySelector("#description").value = desc;
    document.querySelector("#quantity").value = qty;
    document.querySelector("#amount").value = amt;
}

function editInfo(index, pic, type, catg, desc, qty, amt){
    isEdit = true;
    editId = index;
    imgInput.src = pic;
    foodtype.value = type;
    category.value = catg;
    description.value = desc;
    quantity.value = qty;
    amount.value = amt;

    submitBtn.innerText = "Update";
    modalTitle.innerText = "Update Food";
}

function deleteInfo(index){
    if(confirm("Are you sure want to delete?")){
        getData.splice(index, 1);
        localStorage.setItem("roomservicerequest", JSON.stringify(getData));
        showInfo();
    }
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    const foodInfo = {
        picture: imgInput.src,
        foodType: foodtype.value,
        category: category.value,
        description: description.value,
        quantity: quantity.value,
        amount: amount.value
    };

    if(!isEdit){
        getData.push(foodInfo);
    }
    else{
        isEdit = false;
        getData[editId] = foodInfo;
    }

    localStorage.setItem('roomservicerequest', JSON.stringify(getData));

    submitBtn.innerText = "Submit";
    modalTitle.innerText = "Fill the Form";

    showInfo();

    form.reset();
    imgInput.src = "/img/logo.png";
});
