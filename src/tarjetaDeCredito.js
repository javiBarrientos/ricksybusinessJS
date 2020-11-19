// Constructor
export default function TarjetaDeCredito(propietario, numeroTarjeta) {
  this.propietario = propietario;
  this.numeroTarjeta = numeroTarjeta;
  this.pasta = 3000;
  this.tipoDeMoneda = "EZI";
}

TarjetaDeCredito.prototype.comprobarPastaPago = function (pago) {
  if (this.pasta >= pago) {
    this.pasta -= pago;
    return true;
  } else {
    return false;
  }
};
