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
      $('#answer').html('Over a distance of <i>d</i> <span>' + arcLength + 'km</span>, the height <i>h</i> of the bulge is <span>' + (1000 * sagitta).toFixed(2) + ' meters</span>');
    }
  else
    {
      $('#answer').html('Over a distance of <span>' + arcLength + ' miles</span>, the height <i>h</i> of the bulge is <span>' + (5280 * sagitta).toFixed(2) + ' feet</span>');
    }
  
    $('#answer').fadeIn(2000);
});
