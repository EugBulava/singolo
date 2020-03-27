const NAVBAR = document.getElementById('navigation');
const IPHONE_1 = document.getElementById('iphone_1');
const IPHONE_2 = document.getElementById('iphone_2');
const LAYOUT = document.getElementById('layout');
const BUTTON = document.getElementById('btn');
const CLOSE_MESSAGE = document.getElementById('close-message');
const TAG = document.getElementById('tags');
const SECTIONS = document.querySelectorAll('#body > section');


/*function navigation(){
    NAVBAR.querySelectorAll('a').forEach(el => el.classList.remove('checked'));
    event.target.classList.add('checked');
}*/

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

document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const current_position = window.scrollY;
    
    SECTIONS.forEach((el) => {
        if(el.offsetTop-10 <= current_position && (el.offsetTop + el.offsetHeight) > current_position){
            document.querySelectorAll('#navigation a').forEach((a) => {
                a.classList.remove('checked');
                if(el.getAttribute('id') === a.getAttribute('href').substring(1)){
                    a.classList.add('checked');
                }
            })
        }else if(current_position>2590){
            document.querySelectorAll('#navigation a').forEach((a) => {
                a.classList.remove('checked');
                document.getElementById('lol').classList.add('checked');
            })
        }
    });
}

if (matchMedia('(max-width: 767px)').matches) {
    document.getElementById('header-items').prepend(document.createElement("div"));
    document.getElementById('header-items').firstChild.style = "display:inline-block; position:relative; width:30px; height:30px;padding-left:20px;";
    document.getElementById('header-items').firstChild.prepend(document.createElement("a"));
    document.getElementById('header-items').firstChild.firstChild.style = "display:inline-block; position: relative; width:30px; height:30px; z-index:2;";
    document.getElementById('header-items').firstChild.firstChild.prepend(document.createElement("span"));
    document.getElementById('header-items').prepend(document.createElement("div"));
    document.getElementById('header-items').firstChild.style = "display:inline-block; position:absolute; width:278px; height:100vh; background-color:#2D303A; z-index:1; display:none;";
    document.querySelectorAll('#header-items span').forEach((span) => {
        span.classList.add('header_gamburger');
    });
    var BUTTON_BURGER = document.getElementsByClassName('header-items')[0].getElementsByTagName('div')[1].getElementsByTagName('a')[0];
    document.getElementById('navigation').style = "display: none;";
    

    BUTTON_BURGER.addEventListener('click', () => {
        if(BUTTON_BURGER.classList == 0){
            BUTTON_BURGER.classList.add('active_burger');
            document.getElementById('header-items').firstChild.style = "display:inline-block; position:absolute; width:278px; height:100vh; background-color:#2D303A; z-index:1; display:block; left:0;"
            document.getElementById('navigation').style = "display: block;";
        }else {
            BUTTON_BURGER.classList.remove('active_burger');
            document.getElementById('header-items').firstChild.style = "display:inline-block; position:absolute; width:278px; height:100vh; background-color:#2D303A; z-index:1; display:none;left:-275px;"
            document.getElementById('navigation').style = "display: none;";
        }
    });

    document.querySelectorAll('.nav a')[0].addEventListener('click', () => {
        if(BUTTON_BURGER.classList == 0){
            BUTTON_BURGER.classList.add('active_burger');
            document.getElementById('header-items').firstChild.style = "display:inline-block; position:absolute; width:278px; height:100vh; background-color:#2D303A; z-index:1; display:block; left:0;"
            document.getElementById('navigation').style = "display: block;";
        }else {
            BUTTON_BURGER.classList.remove('active_burger');
            document.getElementById('header-items').firstChild.style = "display:inline-block; position:absolute; width:278px; height:100vh; background-color:#2D303A; z-index:1; display:none;left:-275px;"
            document.getElementById('navigation').style = "display: none;";
        }
    });    

    document.querySelectorAll('.nav a')[1].addEventListener('click', () => {
        if(BUTTON_BURGER.classList == 0){
            BUTTON_BURGER.classList.add('active_burger');
            document.getElementById('header-items').firstChild.style = "display:inline-block; position:absolute; width:278px; height:100vh; background-color:#2D303A; z-index:1; display:block; left:0;"
            document.getElementById('navigation').style = "display: block;";
        }else {
            BUTTON_BURGER.classList.remove('active_burger');
            document.getElementById('header-items').firstChild.style = "display:inline-block; position:absolute; width:278px; height:100vh; background-color:#2D303A; z-index:1; display:none;left:-275px;"
            document.getElementById('navigation').style = "display: none;";
        }
    });    

    document.querySelectorAll('.nav a')[2].addEventListener('click', () => {
        if(BUTTON_BURGER.classList == 0){
            BUTTON_BURGER.classList.add('active_burger');
            document.getElementById('header-items').firstChild.style = "display:inline-block; position:absolute; width:278px; height:100vh; background-color:#2D303A; z-index:1; display:block; left:0;"
            document.getElementById('navigation').style = "display: block;";
        }else {
            BUTTON_BURGER.classList.remove('active_burger');
            document.getElementById('header-items').firstChild.style = "display:inline-block; position:absolute; width:278px; height:100vh; background-color:#2D303A; z-index:1; display:none;left:-275px;"
            document.getElementById('navigation').style = "display: none;";
        }
    });    

    document.querySelectorAll('.nav a')[3].addEventListener('click', () => {
        if(BUTTON_BURGER.classList == 0){
            BUTTON_BURGER.classList.add('active_burger');
            document.getElementById('header-items').firstChild.style = "display:inline-block; position:absolute; width:278px; height:100vh; background-color:#2D303A; z-index:1; display:block; left:0;"
            document.getElementById('navigation').style = "display: block;";
        }else {
            BUTTON_BURGER.classList.remove('active_burger');
            document.getElementById('header-items').firstChild.style = "display:inline-block; position:absolute; width:278px; height:100vh; background-color:#2D303A; z-index:1; display:none;left:-275px;"
            document.getElementById('navigation').style = "display: none;";
        }
    });    

    document.querySelectorAll('.nav a')[4].addEventListener('click', () => {
        if(BUTTON_BURGER.classList == 0){
            BUTTON_BURGER.classList.add('active_burger');
            document.getElementById('header-items').firstChild.style = "display:inline-block; position:absolute; width:278px; height:100vh; background-color:#2D303A; z-index:1; display:block; left:0;"
            document.getElementById('navigation').style = "display: block;";
        }else {
            BUTTON_BURGER.classList.remove('active_burger');
            document.getElementById('header-items').firstChild.style = "display:inline-block; position:absolute; width:278px; height:100vh; background-color:#2D303A; z-index:1; display:none;left:-275px;"
            document.getElementById('navigation').style = "display: none;";
        }
    });    



    var NAVIGTION_BURGER = document.getElementById('navigation');
    var k = NAVIGTION_BURGER.getElementsByClassName('point').length;
    for(var i = 0; i<= k-1; i++){
        NAVIGTION_BURGER.getElementsByClassName('point')[0].remove();
    }

}

    







    

    



