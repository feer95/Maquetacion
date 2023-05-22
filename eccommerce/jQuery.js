$(document).ready(function() {
    // Código del carrito
    let carrito = [];

    // Función para añadir productos al carrito al hacer clic en el botón correspondiente
    $('.card-body .btn').click(function(e) {
        e.preventDefault();
        let addCart = {
            articulo: $(this).siblings('.card-title').text(),
            precio: $(this).siblings('.card-price').text()
        };
        carrito.push(addCart);
    });

    // Función para calcular y mostrar el total de la compra
    function total() {
        let total = 0;
        for (let i = 0; i < carrito.length; i++) {
            total += parseFloat(carrito[i].precio);
        }
        $('#total' + ' ').text( total.toFixed(2) + '€');
    }

    // Función para imprimir la lista de productos en el carrito
    function printCartList() {
        let list = '';
        for (let i = 0; i < carrito.length; i++) {
            list += `<li class="list-group-item">PRENDA: ${carrito[i].articulo} ${carrito[i].precio}</li>`;
        }
        $('.body-ul').html(list);
    }

    // Evento al hacer clic en el botón del carrito
    $('.te').click(function(e) {
        e.preventDefault();
        printCartList();
        total();
    });
});


  