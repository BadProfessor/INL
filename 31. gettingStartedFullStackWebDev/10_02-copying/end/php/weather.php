<?php
function show_forecast() {
  // Get the openweathermap.org API key and other constants
  include 'constants.php';

  // Call the API with the options we want
  $forecastRaw = file_get_contents(
    'https://api.openweathermap.org/data/2.5/onecall?' . 
    'lat=' . LONDON_LAT . 
    '&lon=' . LONDON_LONG .
    '&exclude=current,hourly,minutely,alerts' .
    '&units=metric' . 
    '&appid=' . WEATHER_API_KEY
  );
  
  // Convert the response from a text string to an object
  $forecast = json_decode($forecastRaw);
  
  // Present the results on the web page
  // Create a header
  echo '<h3>Weather report for the week starting ';
  echo(date('l, j F', $forecast->daily[0]->dt));
  echo "</h3>";

  // Put the weather into its own <div> for CSS styling
  echo '<div id="weatherforecast">';

  // Present each day's simplified forecast
  for ($i=0; $i <= 7 ; $i++) { 
    echo ('<weatherday>');
    echo ('<h3>' . date('D', $forecast->daily[$i]->dt) . '</h3>');
    echo (round($forecast->daily[$i]->temp->day) . 'c<br>');
    echo ($forecast->daily[$i]->weather[0]->description);
    echo '</weatherday>';
  }

  // Close out the #weatherforecast section
  echo '</div>';
}
