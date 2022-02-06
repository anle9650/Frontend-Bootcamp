mapboxgl.accessToken = 'pk.eyJ1IjoiYW5sZTk2NTAiLCJhIjoiY2t6YTc1OWU3MjE5YjJ1bnh2eXo3dXZmbSJ9.OVRTmHR3hpVZJjAk5ymRSg';

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-71.060982, 42.35725], // starting position [lng, lat]
    zoom: 18 // starting zoom
});