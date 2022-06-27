let  templateHtml, data, photoRule
let member = 0

function templateGen(x, fname, lname, gender, birth_date, address, is_for_mer){
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
    if(!is_for_mer){
        is_for_mer=''
    }else{
        is_for_mer='<h3 class="sec-title">Turmush o\'rtog\'ingiz xaqidagi malumotlar uchun</h3>'
    }
    let html = ` 
<div class="member" id="member${x}">
    ${is_for_mer}
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
        document.getElementById('personal').value = 'False'
    }else if(member<=1){
        photoRule.style.display='none'
        document.getElementById('personal').value = 'True'
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
    document.getElementById('memberCount').value=`${member}`
    console.log(document.getElementById('memberCount').value)
}

// console.log(templateGen('_mer','Joe', 'McNeil', 'male','2000-09-16', 'address', true))


// // when user select merried option 
function merAdd(){
    if(document.getElementById('family_state').value == 'merried'){    
        allConditions()
        let memForm = document.createElement('div')
        memForm.id = `member_mer`
        memForm.innerHTML = templateGen('_mer','','','','','',true)
        let memberList = document.getElementById('memberList')
        memberList.appendChild(memForm)
        document.getElementById('has_mer').value = 'True'
    }else{
        document.getElementById('memberList').removeChild(document.getElementById('member_mer'))
        document.getElementById('has_mer').value = 'False'
    }
}

