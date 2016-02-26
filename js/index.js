$('#distance').keypress(function(){ $('#answer').hide()});

$('#calc').click(function() {
  var converter = 1;
  
  if ($('#units').val() == 1)
    {
      converter = 0.621371;
    }
  
  var arcLength = Number($('#distance').val());
  var earthRadius = 6371 * converter;

  var earthCirc = 2 * Math.PI * earthRadius;

  var chordAngle = (2 * Math.PI) * (arcLength / earthCirc);

  var chordLength = 2 * earthRadius * Math.sin(chordAngle / 2);

  var sagitta = earthRadius -
    Math.sqrt(Math.pow(earthRadius, 2) -
      Math.pow(chordLength / 2, 2));
  
    if (converter == 1)
    {
      $('#answer').html('The bulge <i>h</i> is ' + (1000 * sagitta).toFixed(2) + ' meters');
    }
  else
    {
      $('#answer').html('The bulge <i>h</i> is ' + (5280 * sagitta).toFixed(2) + ' feet');
    }
  
    $('#answer').fadeIn(2000);
});