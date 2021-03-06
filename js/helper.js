/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the '+data+' placeholder text you see in them.
*/

var data = '%data%'

var HTMLheaderName = '<h1 id="name">'+data+'</h1>';
var HTMLheaderRole = '<span class="role">'+data+'</span><hr/>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="icon">%contact%</span> '+data+'</li>';
var HTMLmobile = '<li class="flex-item"><span class="icon">phone</span> '+data+'</li>';
var HTMLemail = '<li class="flex-item"><span class="icon">email</span><span class="white-text"><a href="mailto:'+data+'" target="_blank">'+data+'</a></span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="icon">twitter</span><span class="white-text"><a href="http://twitter.com/'+data+'" target="_blank">@'+data+'</a></span></li>';
var HTMLgithub = '<li class="flex-item"><span class="icon">github</span><span class="white-text"><a href="http://github.com/'+data+'" target="_blank">'+data+'</a></span></li>';
var HTMLblog = '<li class="flex-item"><span class="icon">portfolio</span><span class="white-text"><a href="http://www.'+data+'" target="_blank">'+data+'</a></span></li>';
var HTMLlocation = '<li class="flex-item"><span class="icon">location</span> '+data+'</li>';

//var HTMLbioPic = '<img src="'+data+'" class="biopic img-responsive" />';
var HTMLbioPic = '<div style="background-image:url('+data+');" class="biopic img-responsive"></div>';
var HTMLwelcomeMsg = '<span class="welcome-message">'+data+'</span>';
var HTMLskillsStart = '<ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item">'+data+'</li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#" class="link"><span class="employer">'+data+'</span>';
var HTMLworkTitle = ' <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> '+data+'</a>';
var HTMLworkDates = '<div class="date-text">'+data+'</div>';
var HTMLworkLocation = '<div class="location-text">'+data+'</div>';
var HTMLworkDescription = '<p class="description">'+data+'</p>';

var HTMLprojectStart = '<div class="project-entry col-md-4 col-sm-4"></div>';
var HTMLprojectTitle = '<h3 class="title">'+data+'<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></h3>';
var HTMLprojectDates = '<b class="date-text">'+data+'</b>';
var HTMLprojectDescription = '<p class="description">'+data+'</p>';
var HTMLprojectImage = '<a href="#" data-toggle="modal" data-target="#'+data+'"><picture><source media="(max-width: 500px)" srcset="images/'+data+'_small.jpg" /><source media="(min-width: 501px)" srcset="images/'+data+'_medium.jpg" /><img src="images/'+data+'_small.jpg"  srcset="images/'+data+'_small.jpg 1x, images/'+data+'.jpg 2x" class="img-responsive" alt="" /></picture></a>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#" class="link"><span class="school">'+data+'</span>';
var HTMLschoolDegree = ' <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> '+data+'</a>';
var HTMLschoolDates = '<span class="location-text">'+data+'</span></div>';
var HTMLschoolLocation = '<div class="date-text">'+data+' - ';
var HTMLschoolMajor = '<p class="major">'+data+'</p>';

var HTMLonlineStart = '<div class="online-entry"></div>';
var HTMLonlineTitle = '<a href="#" class="link">'+data+'</a>';
var HTMLonlineDates = ' ('+data+')</span></div>';
var HTMLonlineSchool = '<div class="school">'+data+' <span class="date-text">';

var internationalizeButton = '<button id="btInt" type="button" class="btn btn-xs btn-danger pull-right">Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
	$('button').click(function() {
		var oldName = $('#name').html() || '';
		var iName = inName(oldName) || function(){};
		$('#name').html(iName);
	});
});

function inName(name){
	//console.log(name);
	var newName = name;
	var firstName = newName.split(' ')[0];
	var lastName = newName.split(' ')[1];

	if (lastName == lastName.toUpperCase()) {
		newName = firstName + ' ' + lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
		$('#btInt').text('Internationalize');
	} else {
		newName = firstName + ' ' + lastName.toUpperCase();
		$('#btInt').text('Undo');
	}
	return newName;
};

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
	clickLocations.push(
		{
			x: x,
			y: y
		}
	);
	console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
	// your code goes here!
	logClicks(loc.pageX, loc.pageY);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

	var locations;

	// No zoom alowed by clicking or touching
	var mapOptions = {
		zoomControl: false,
		disableDoubleClickZoom: true,
		disableDefaultUI: true,
		scrollwheel: false,
	};

/*
For the map to be displayed, the googleMap var must be
appended to #mapDiv in resumeBuilder.js.
*/
map = new google.maps.Map(document.querySelector('#map'), mapOptions);


/*
locationFinder() returns an array of every location string from the JSONs
written for bio, education, and work.
*/
function locationFinder() {

	// initializes an empty array
	var locations = [];

	// adding places I've lived
	locations = bio.places;

	// adds the single location property from bio to the locations array
	locations.push(bio.contacts.location);

	// iterates through school locations and appends each location to
	// the locations array
	for (var school in education.schools) {
		locations.push(education.schools[school].location);
	}

	// iterates through work locations and appends each location to
	// the locations array
	for (var job in work.jobs) {
		locations.push(work.jobs[job].location);
		//console.log(locations);
	}

	//console.log(locations);
	return locations;
}

/*
createMapMarker(placeData) reads Google Places search results to create map pins.
placeData is the object returned from search results containing information
about a single location.
*/
function createMapMarker(placeData) {

	// The next lines save location data from the search result object to local variables
	var lat = placeData.geometry.location.lat();  // latitude from the place service
	var lon = placeData.geometry.location.lng();  // longitude from the place service
	var name = placeData.formatted_address;   // name of the place from the place service
	var bounds = window.mapBounds;            // current boundaries of the map window

	// marker is an object with additional data about the pin for a single location
	var marker = new google.maps.Marker({
		map: map,
		position: placeData.geometry.location,
		title: name
	});

	// infoWindows are the little helper windows that open when you click
	// or hover over a pin on a map. They usually contain more information
	// about a location.
	var infoWindow = new google.maps.InfoWindow({
		content: name
	});

	// hmmmm, I wonder what this is about...
	google.maps.event.addListener(marker, 'click', function() {
		// your code goes here!
		infoWindow.open(map, marker);
	});

	// this is where the pin actually gets added to the map.
	// bounds.extend() takes in a map location object
	bounds.extend(new google.maps.LatLng(lat, lon));
	// fit the map to the new marker
	map.fitBounds(bounds);
	// center the map
	map.setCenter(bounds.getCenter());
}

/*
callback(results, status) makes sure the search returned results for a location.
If so, it creates a new map marker for that location.
*/
function callback(results, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		createMapMarker(results[0]);
	}
}

/*
pinPoster(locations) takes in the array of locations created by locationFinder()
and fires off Google place searches for each location
*/
function pinPoster(locations) {

	// creates a Google place search service object. PlacesService does the work of
	// actually searching for location data.
	var service = new google.maps.places.PlacesService(map);

	// Iterates through the array of locations, creates a search object for each location
	for (var place in locations) {

		// the search request object
		var request = {
			query: locations[place]
		};

		// Actually searches the Google Maps API for location data and runs the callback
		// function with the search results after each search.
		service.textSearch(request, callback);
	}
}

// Sets the boundaries of the map based on pin locations
window.mapBounds = new google.maps.LatLngBounds();

// locations is an array of location strings returned from locationFinder()
locations = locationFinder();

// pinPoster(locations) creates pins on the map for each location in
// the locations array
pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
	//Make sure the map bounds get updated on page resize
	map.fitBounds(mapBounds);
});