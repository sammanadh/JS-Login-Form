function animatedForm(){
    const arrow = document.querySelectorAll(".fa-arrow-down");

    arrow.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const parent = arrow.parentElement;
            const input = arrow.previousElementSibling;
            const nextForm = parent.nextElementSibling;

            //Check for validation
            if(input.type === "text" && validateUser(input)){
                nextSlide(parent, nextForm);
            }else if(input.type === "email" && validateEmail(input)){
                nextSlide(parent, nextForm);
            }else if(input.type === "password" && validateUser(input)){
                nextSlide(parent, nextForm);
            }else{
                parent.style.animation = "shake 0.5s ease";
            }
            //get rid of animation
            parent.addEventListener("animationend", ()=>{
                parent.style.animation = ""
            })
        })
    })
}

function validateUser(user){
    if(user.value.length < 6){
        console.log("not enough characters")
        error("rgb(189,87,87)");
        return false;
    }else{
        error("rgb(87, 189, 130)");
        return true;
    }
}

function validateEmail(email){
    const validate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(validate.test(email.value)){
        error("rgb(87, 189, 130)");
        return true;
    }else{
        error("rgb(189,87,87)");
    }

}

function nextSlide(parent, nextForm){
    parent.classList.add("active");
    parent.classList.remove("active");
    nextForm.classList.add("active");
}

function error(color){
    document.body.style.backgroundColor = color;
}

animatedForm();