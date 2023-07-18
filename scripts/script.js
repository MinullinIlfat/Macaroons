document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open')
    }
})

let loader = $('.loader')

$('#submit').click(function () {
    let product = $('#product')
    let name = $('#name')
    let phone = $('#phone')
    let hasError = false

    $('.input-error').hide();

    if (!product.val()) {
        product.next().show();
        product.css('border-color', 'red').css('margin-bottom', '15px');
        hasError = true
    }
    if (!name.val()) {
        name.next().show();
        name.css('border-color', 'red');
        hasError = true
    }
    if (!phone.val()) {
        phone.next().show();
        phone.css('border-color', 'red');
        hasError = true
    }

    if (!hasError) {
        loader.css('display', 'flex');

        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: {product: product.val(), name: name.val(), phone: phone.val()}
        })
            .done(function (msg) {
                loader.hide();
                if (msg.success) {
                    $('.order-choice').hide();
                    $('.order-title').hide();
                    $('.order-info').hide();
                    $('.order-action').hide();
                    $('.order-name').hide();
                    $('.show-text').show();
                    $('.order-form').css('margin', 'auto 0')
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
                    product.val('');
                    name.val('');
                    phone.val('');
                }
            });
    }
});

let prices = $('.prices');
let order = $('.order')

$('.cakes').click(function () {
    prices[0].scrollIntoView({behavior: 'smooth'});
});
$('.btn-scroll').click(function () {
    prices[0].scrollIntoView({behavior: 'smooth'});
});
$('.about_Us').click(function () {
    $('.advantages')[0].scrollIntoView({behavior: 'smooth'});
});
$('.checkout').click(function () {
    order[0].scrollIntoView({behavior: 'smooth'});
});

let addToCartButtons = $('.btn-add-too-cart');
for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].onclick = function (e) {
        let product = document.getElementById('product').value = e.target.parentElement.parentElement.previousElementSibling.innerText;
        order[0].scrollIntoView({behavior: 'smooth'});
    }
}

