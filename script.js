$(document).ready(function () {
    let today = new Date();
    let dia = today.getDate();
    let mes = today.getMonth() + 1; //January is 0!
    let ano = today.getFullYear();

    if (dia < 10) {
        dia = '0' + dia;
    }

    if (mes < 10) {
        mes = '0' + mes;
    }

    today = ano + '-' + mes + '-' + dia;
    $('#date').attr('max', today);

})

let botao = $('#button')
$('.video').addClass('none')

botao.on('click', function () {
    $('html').css('height', 'auto')
    let data = $('#date').val()
    const api = $.ajax({ url: `https://api.nasa.gov/planetary/apod?api_key=8wRUlMYfe2SO51TU7h1TWoa1O4rAcFDDiWyXx45g&date=${data} `,
        success: function() {
            $('.descricao').text(api.responseJSON.explanation)
            $('.autor').text(api.responseJSON.copyright)

            if (api.responseJSON.media_type == 'image') {
                $('.foto').attr('src', api.responseJSON.url)
                $('.video').addClass('inv')
                $('.foto').removeClass('inv')
            } else {
                $('.video').attr('src', api.responseJSON.url)
                $('.video').removeClass('inv')
                $('.foto').addClass('inv')
            }

        }
    })
});

const carr = document.querySelector("#carregar");

carr.addEventListener("click", function () {
    location.reload();
});

function inicio() {
    window.location.href="https://lauracastro27.github.io/Projeto_Apod/index.html";
}    

function Apod() {
    window.location.href="https://lauracastro27.github.io/Projeto_Apod/Apod.html";
}    

function instagram() {
    window.location.href="https://www.instagram.com/laura._.castro27/"
}

function sobre() {
    window.location.href="https://apod.nasa.gov/apod/lib/about_apod.html"
}
function nasa() {
    window.location.href="https://www.nasa.gov/"
}
