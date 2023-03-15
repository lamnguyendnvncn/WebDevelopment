var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var allBtns = $$('.btn')
var toastMsg = $('#toast')

function toast({title='',message='',type='info',duration=3000}) {
    if (toastMsg) {
        const toast = document.createElement('div');
        const icons = {
            success: 'fa-solid fa-circle-check',
            error: 'fa-solid fa-circle-exclamation',
            info: 'fa-regular fa-circle-question',
            warning: 'fa-solid fa-triangle-exclamation'
        }
        const icon = icons[type]

        toast.classList.add('toast',`toast--${type}`);
        toast.style.animation=`slideIn ease 0.7s, fadeOut linear 0.5s ${duration}ms forwards`;
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h4 class="toast__title">
                    ${title}
                </h4>
                <p class="toast__message">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `
        toastMsg.appendChild(toast)

        const autoRemoveID = setTimeout(() => {
            toastMsg.removeChild(toast)
        }, duration+500);

        toast.onclick = function(e) {
            if (e.target.parentNode.classList.contains('toast__close')) {
                toastMsg.removeChild(toast)
                clearTimeout(autoRemoveID);
            }
        }

        
    }
}

function showSuccess() {
    toast({
        title: 'Success',
        message: 'Create Successfully',
        type: 'success',
        duration: 5000
    })
}

function showError() {
    toast({
        title: 'Error',
        message: 'Failed! Check your info again',
        type: 'error',
        duration: 3000
    })
}

function showWarning() {
    toast({
        title: 'Warning',
        message: 'You might type wrong info! Check your info again!',
        type: 'warning',
        duration: 3000
    })
}

function showInfo() {
    toast({
        title: 'Info',
        message: 'Please contact the administrator for further info!',
        type: 'info',
        duration: 3000
    })
}






