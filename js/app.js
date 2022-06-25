let  templateHtml, data, photoRule
let member = 0

function templateGen(x, fname, lname, gender, birth_date, address){
    if(!x){
        x=1
    }
    if(!fname){
        fname=''
    }
    if(!lname){
        lname=''
    }
    if(!gender){
        gender=''
    }
    if(!birth_date){
        birth_date=''
    }
    if(!address){
        address=''
    }
    let html = ` 
<div class="member" id="member${x}">
    <div class="input-group">
        <input type="text" class="form__input" name="member${x}" id="fname${x}" placeholder=" " value="${fname}"  required>
        <label class="form__label" for="fname${x}">Ism(ingliz tilida)</label>
    </div>
    <div class="input-group">
        <input type="text" class="form__input" name="member${x}" id="lname${x}" placeholder=" " value="${lname}"  required>
        <label class="form__label" for="lname${x}">Familya(ingliz tilida)</label>
    </div>
    <div class="box">
        <label class="sec-title" for="">Jins:</label>
        `
    if(gender=='male'){
        html += `
        <div class="input-group">
            <input type="radio" class="form__input" name="member${x}" id="male${x}" value="male"  checked>
            <label class="form__label_radio" for="male${x}">Erkak</label>
            <i></i>
        </div>
        <div class="input-group">
            <input type="radio" class="form__input" name="member${x}" id="female${x}" value="female">
            <label class="form__label_radio" for="female${x}" >Ayol</label>
            <i></i>
        </div>
        ` 
    }else if(gender=='female'){
        html += `
        <div class="input-group">
            <input type="radio" class="form__input" name="member${x}" id="male${x}" value="male">
            <label class="form__label_radio" for="male${x}">Erkak</label>
            <i></i>
        </div>
        <div class="input-group">
            <input type="radio" class="form__input" name="member${x}" id="female${x}" value="female" checked>
            <label class="form__label_radio" for="female${x}">Ayol</label>
            <i></i>
        </div>
        `
    }else{
        html += `
        <div class="input-group">
            <input type="radio" class="form__input" name="member${x}" id="male${x}" value="male" required>
            <label class="form__label_radio" for="male${x}">Erkak</label>
            <i></i>
        </div>
        <div class="input-group">
            <input type="radio" class="form__input" name="member${x}" id="female${x}" value="female"  required>
            <label class="form__label_radio" for="female${x}">Ayol</label>
            <i></i>
        </div>
        `
    }
    html += `
    </div>
    <div class="box">
        <label class="sec-title" for="birth_date${x}">Tug'ilgan Sana:</label>
        <div class="input-group">
            <input type="date" name="member${x}" id="birth_date${x}"  value="${birth_date}"  required>
        </div>
    </div>
    <div class="box">
        <label class="sec-title" for="city${x}" >Tug'ilgan joy:</label>
        <div class="input-group">
            <input class="form__input" type="text" name="member${x}" id="address${x}" placeholder="  " value="${address}" required>
            <label class="form__label" for="address${x}">To'liq manzil va uy raqami</label>
        </div>                                
    </div>
    <div class="box">
        <label class="sec-title" for="" >Fotourat:</label>
        <div class="input-group">
            <input type="file" accept="image/*" name="member${x}" id="image${x}"  required>
        </div>
    </div>
    <!-- <p class="btn btn-danger d-bloc" onclick="delMember(${x})"> <i class="fa fa-phone"></i> O'chirish</p>-->                        
</div>
`
return html
}

photoRule = document.getElementById('photoRule')

function allConditions(){
    if(member>0){
        photoRule.style.display='block'
    }else if(member<=1){
        photoRule.style.display='none'
    }
}

function addMember(){
    member ++
    allConditions()
    let memForm = document.createElement('div')
    memForm.id = `member${member}`
    memForm.innerHTML = templateGen(member)
    let memberList = document.getElementById('memberList')
    memberList.appendChild(memForm)
}

console.log(templateGen(2,'Joe', 'McNeil', 'male','2000-09-16', 'address'))









 

// let countMember, fname, lname, male, female, birth_date, address, members
// let gender

// function memberListGen(){
//     countMember = document.getElementById('memberList').childElementCount
//     members = []
//     fname = document.querySelector('input[type="radio"]:checked')
//     // for(let i=1; i<(countMember+1); i++){
//     //     members.push([])
//     //     lname = document.getElementById(`lname${i}`).value
//     //     male = document.getElementById(`male${i}`)
//     //     female = document.getElementById(`female${i}`).value
//     //     birth_date = document.getElementById(`birth_date${i}`).value
//     //     address = document.getElementById(`address${i}`).value
//     //     members[i-1].push(fname)
//     // }
//     console.log(fname)
// }



// // console.log(templateGen(1))

// photoRule = document.getElementById('photoRule')
// member = 0
// data = []

// function allConditions(){
//     if(member>0){
//         photoRule.style.display='block'
//     }else if(member<=1){
//         photoRule.style.display='none'
//     }
// }
// let elem

// // function prepareId(){
// //     for(let i=0;i<member; i++){
// //         elem = document.getElementById('test')
// //     }
// // }

// function addMember(){
//     let memberList = document.getElementById('memberList')
//     console.log(memberList)
//     member ++
//     memberListGen()
//     allConditions()
//     memberList.innerHTML += templateGen(member,'Joe', 'McNeil', 'male','2000-09-16', 'address')
//     // console.log(this)
// }

// function delMember(x){
//     member --
//     allConditions()
//     console.log(document.getElementById('memberList').removeChild(document.getElementById(`member${x}`)))
// }
