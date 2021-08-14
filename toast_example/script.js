$(function () {


    const success_button = document.querySelector(".btn--success");
    const danger_button = document.querySelector(".btn--danger");
    
    function createToast(type, title, icon, body) {
        let toast_template = `<div class="toast toast--${type}">
                            <div class="toast__head toast__head--${type}">
                                <i class="${icon}"></i>
                            </div>
                            <div class="toast__body">
                                <h2>${title}</h2>
                                <p>${body}</p>
                            </div>
                            <div class="toast__close"><i class="fas fa-times"></i></div>
                        </div> `;
        return toast_template;
    }

    


    success_button.onclick = function() {
        let toast = $(createToast("success", 'Success', 'fas fa-check-circle', 'checking'));

        $('#toast').append(toast);

        setTimeout(function(){
            $(toast).remove();
        },5000)

    }
    

    danger_button.onclick = function() {
        let toast = $(createToast("warning", 'Warning', 'fas fa-exclamation-circle', 'checking'));

        $('#toast').append(toast);

        setTimeout(function(){
            $(toast).remove();
        },5000)
    }



    
   













})