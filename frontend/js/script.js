// redirecionamento para pagina de reservas 
const makeReservation = document.getElementById('make-reservation');
makeReservation.onclick = function () {
    window.location.href = "./pages/reservation.html"
};

// redirecionamento para pagina de comprar ingressos 
const buy = document.getElementById('buy');
buy.onclick = function () {
    window.location.href = "./pages/ticket.html"
};