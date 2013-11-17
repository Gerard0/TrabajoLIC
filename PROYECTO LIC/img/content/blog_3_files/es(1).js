Date.weekdays = $w('Lu Ma Mi Ju Vi Sa Do');
Date.months = $w('Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre');

Date.first_day_of_week = 1;

_translations = {
  "OK": "OK",
  "Now": "Ahora",
  "Today": "Hoy",
  "Clear": "Borrar"
};

// Formats date and time as "01 January 2000 5:00pm"
Date.prototype.toFormattedString = function(include_time)
{
   str = Date.padded2(this.getDate()) + " " + Date.months[this.getMonth()] + " " + this.getFullYear();
   if (include_time) { hour=this.getHours(); str += " " + this.getAMPMHour() + ":" + this.getPaddedMinutes() + this.getAMPM().toLowerCase() }
   return str;
}