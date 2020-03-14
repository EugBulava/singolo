const NAVBAR = document.getElementById('navigation');
const IPHONE_1 = document.getElementById('iphone_1');
const IPHONE_2 = document.getElementById('iphone_2');
const LAYOUT = document.getElementById('layout');
const BUTTON = document.getElementById('btn');
const CLOSE_MESSAGE = document.getElementById('close-message');
const TAG = document.getElementById('tags');


function navigation(){
    NAVBAR.querySelectorAll('a').forEach(el => el.classList.remove('checked'));
    event.target.classList.add('checked');
}

function tags(){
    if(event.target.classList.contains('tag_first')){
        TAG.querySelectorAll('li').forEach(el => el.classList.remove('tag_selected'));
        event.target.classList.add('tag_selected');
        document.getElementById('layout').appendChild(document.getElementById('pic1'));
        document.getElementById('layout').appendChild(document.getElementById('pic2'));
        document.getElementById('layout').appendChild(document.getElementById('pic3'));
        document.getElementById('layout').appendChild(document.getElementById('pic4'));
        document.getElementById('layout').appendChild(document.getElementById('pic5'));
        document.getElementById('layout').appendChild(document.getElementById('pic6'));
        document.getElementById('layout').appendChild(document.getElementById('pic7'));
        document.getElementById('layout').appendChild(document.getElementById('pic8'));
        document.getElementById('layout').appendChild(document.getElementById('pic9'));
        document.getElementById('layout').appendChild(document.getElementById('pic10'));
        document.getElementById('layout').appendChild(document.getElementById('pic11'));
        document.getElementById('layout').appendChild(document.getElementById('pic12'));
    } else if(event.target.classList.contains('tag_second')){
        TAG.querySelectorAll('li').forEach(el => el.classList.remove('tag_selected'));
        event.target.classList.add('tag_selected');
        event.target.classList.add('tag_selected');
        document.getElementById('layout').appendChild(document.getElementById('pic2'));
        document.getElementById('layout').appendChild(document.getElementById('pic3'));
        document.getElementById('layout').appendChild(document.getElementById('pic4'));
        document.getElementById('layout').appendChild(document.getElementById('pic5'));
        document.getElementById('layout').appendChild(document.getElementById('pic6'));
        document.getElementById('layout').appendChild(document.getElementById('pic7'));
        document.getElementById('layout').appendChild(document.getElementById('pic8'));
        document.getElementById('layout').appendChild(document.getElementById('pic9'));
        document.getElementById('layout').appendChild(document.getElementById('pic10'));
        document.getElementById('layout').appendChild(document.getElementById('pic11'));
        document.getElementById('layout').appendChild(document.getElementById('pic12'));
        document.getElementById('layout').appendChild(document.getElementById('pic1'));
    } else if(event.target.classList.contains('tag_third')){
        TAG.querySelectorAll('li').forEach(el => el.classList.remove('tag_selected'));
        event.target.classList.add('tag_selected');
        document.getElementById('layout').appendChild(document.getElementById('pic3'));
        document.getElementById('layout').appendChild(document.getElementById('pic4'));
        document.getElementById('layout').appendChild(document.getElementById('pic5'));
        document.getElementById('layout').appendChild(document.getElementById('pic6'));
        document.getElementById('layout').appendChild(document.getElementById('pic7'));
        document.getElementById('layout').appendChild(document.getElementById('pic8'));
        document.getElementById('layout').appendChild(document.getElementById('pic9'));
        document.getElementById('layout').appendChild(document.getElementById('pic10'));
        document.getElementById('layout').appendChild(document.getElementById('pic11'));
        document.getElementById('layout').appendChild(document.getElementById('pic12'));
        document.getElementById('layout').appendChild(document.getElementById('pic1'));
        document.getElementById('layout').appendChild(document.getElementById('pic2'));
    } else if(event.target.classList.contains('tag_fourth')){
        TAG.querySelectorAll('li').forEach(el => el.classList.remove('tag_selected'));
        event.target.classList.add('tag_selected');
        document.getElementById('layout').appendChild(document.getElementById('pic4'));
        document.getElementById('layout').appendChild(document.getElementById('pic5'));
        document.getElementById('layout').appendChild(document.getElementById('pic6'));
        document.getElementById('layout').appendChild(document.getElementById('pic7'));
        document.getElementById('layout').appendChild(document.getElementById('pic8'));
        document.getElementById('layout').appendChild(document.getElementById('pic9'));
        document.getElementById('layout').appendChild(document.getElementById('pic10'));
        document.getElementById('layout').appendChild(document.getElementById('pic11'));
        document.getElementById('layout').appendChild(document.getElementById('pic12'));
        document.getElementById('layout').appendChild(document.getElementById('pic1'));
        document.getElementById('layout').appendChild(document.getElementById('pic2'));
        document.getElementById('layout').appendChild(document.getElementById('pic3'));
    }    
}
    
IPHONE_1.addEventListener('click', () => {
    
    if(document.getElementById("iphone_1").src.substr(document.getElementById("iphone_1").src.length - 24) == "/assets/img/iphone_v.png"){
        document.getElementById("iphone_1").src="assets/img/iphone_v_off.png";
    } else{
        document.getElementById("iphone_1").src="assets/img/iphone_v.png";
    }
})

IPHONE_2.addEventListener('click', () => {
    if(document.getElementById("iphone_2").src.substr(document.getElementById("iphone_2").src.length - 24) == "/assets/img/iphone_h.png"){
        document.getElementById("iphone_2").src="assets/img/iphone_h_off.png";
    } else{
        document.getElementById("iphone_2").src="assets/img/iphone_h.png";
    }
})

function visibleSlide(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

var slideIndex = 1;
    visibleSlide(slideIndex);

function next() {
    visibleSlide(slideIndex += 1);
}

function prev() {
    visibleSlide(slideIndex -= 1);  
}

function border_for_picture() {
    LAYOUT.querySelectorAll('.picture').forEach(el => el.classList.remove('bordered_picture'));
    event.target.classList.add('bordered_picture');
}

BUTTON.addEventListener('click', () => {
    if(document.getElementById('form_name').value !== "" && document.getElementById('form_email').value !== "" && document.getElementById('form_email').value.search('@') !== -1){
        const subject = document.getElementById('subject').value;
        const description = document.getElementById('description').value;
        
        if(subject !== ''){
            document.getElementById('result_subject').innerText = "Тема: "+subject;
        } else{
            document.getElementById('result_subject').innerText = "Без темы";
        }

        if(description !== ''){
            document.getElementById('result_description').innerText = "Описание: "+description;
        }else{
            document.getElementById('result_description').innerText = "Без описания";
        }

        document.getElementById('message-block').classList.remove('hidden');
    } else {
        alert('WRONG NAME OR EMAIL');
    }
    event.preventDefault();
})

CLOSE_MESSAGE.addEventListener('click', () => {
    document.getElementById('message-block').classList.add('hidden');
    document.getElementById('form').reset();
})







    

    



