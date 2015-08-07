/* BIO */
var bio = {
	"name" : "Karla Fernandes",
	"role" : "Designer Grafic/Web & Front-End Developer",
	"contacts" : {
		"mobile" : "+55 61 4042 0613 | +41 44 585 2979",
		"email" : "karla@vitaminak.com.br",
		"skype" : "karla.fernandes",
		"github" : "karlafernandes",
		"twitter" : "karlafernandes",
		"location" : "Brasília, Brazil",
		"blog" : "vitaminak.com.br"
	},
	"places" : ["Buenos Aires, Argentina", "Luzern, Swtizerland", "Berlin, Germany", "Paris, France", "Marrakesh, Morroco"],	
	"welcomeMessage" : "For nearly 20 years I have been working as a Designer Graphic and I created art for branding until newspapers or magazines, all kind of advertisements and print as business cards, packages, flyers and others. \n I love my work with art and have dedicated myself to Design Web since 2000 and I have remained up to date in my skills as new technologies and possibilities have evolved.  \n Before starting my own company in 2006, I gained experience in small companies, private and governamental institutions.",
	"skills" : ["Ilustrator", "InDesign", "Photoshop", "HTML5", "CSS", "Zope/Plone", "Wordpress", "Responsive Design", "User Experience"],	
	"bioPic" : "images/biopic.jpg",
}

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]).replace("%data%", bio.contacts["email"]);
	var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype").replace("%data%", bio.contacts["skype"]);	
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]).replace("%data%", bio.contacts["github"]);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter"]).replace("%data%", bio.contacts["twitter"]);
	var formattedPortfolio = HTMLblog.replace("%data%", bio.contacts["blog"]).replace("%data%", bio.contacts["blog"]);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
	var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	
	$("#header").prepend(formattedRole, internationalizeButton).prepend(formattedName).append(formattedImage, formattedMessage);
	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};
	$("#footerContacts").append(formattedMobile,formattedEmail,formattedSkype, formattedGithub, formattedTwitter, formattedPortfolio, formattedLocation);
	
};

bio.display();

/* EDUCATION */
var education = {
	"schools" : [
	{
		"name" : "Unieuro - Universidade Euro Americana",
		"location" : "Brasília, Brazil",
		"degree" : "Bachelor of Science (BS)", 
		"majors" : "Technology in Interior Design",
		"dates" : 2008,
		"url" : "http://unieuro.edu.br"
	},
	{
		"name" : "EAFUDI - Agrotechnical School of Uberlândia",
		"location" : "Uberlândia, Brazil",
		"degree" : "Bachelor of Technology (B.Tech.)", 
		"majors" : "Computer Technician Course",
		"dates" : 2003,
		"url" : "http://eafudi.gov.br"
	}],
	"online" : [
	{
		"title" : "Zope Techinical Solutions",
		"school" : "Simples Consultoria",
		"dates" : 2005,
		"url" : "http://zope.org"
	},
	{
		"title" : "User Experience for the Web",
		"school" : "Open2Study by Amir Ansari",
		"dates" : 2013,
		"url" : "https://www.open2study.com/node/75"
	},
	{
		"title" : "Writing for the Web",
		"school" : "Open2Study by Frankie Madden",
		"dates" : 2013,
		"url" : "https://www.open2study.com/node/76"
	},
	{
		"title" : "Online Advertising",
		"school" : "Open2Study by Patty Keegan",
		"dates" : 2014,
		"url" : "https://www.open2study.com/node/195"
	},
	{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "https://www.udacity.com/course/nd001"
	}]
};

education.display = function() {
	for(school in education.schools) {
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);		
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
	}
	for(course in education.online) {		
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.online[course].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.online[course].dates);
		var formattedOlineUrl = HTMLonlineTitle.replace("#", education.online[course].url);
		
		$("#online").append(HTMLonlineStart);
		$(".online-entry:first").prepend(formattedOnlineTitle, formattedOnlineDates, formattedOnlineSchool);
	}	
};

education.display();

/* WORK */
var work = {
	"jobs" : [
	{
		"employer" : "Vitamina K", 
		"title" : "Designer Grafic/Web & Front-End Developer",
		"location" : "Brasília, Brazil",		
		"dates" : "January 2006 - Current",
		"description" : "Managing Partner, Freelance Designer Grafic/Web & Front-End Developer."
	},	
	{
		"employer" : "Chamber of Deputies [Soma Soluções]", 
		"title" : "Designer Web & Graphic & Plone Developer",
		"location" : "Brasília, Brazil",		
		"dates" : "July 2004 - December 2005",
		"description" : "Site Maintenance and Development http://www.plenarinho.gov.br creation of print publications like the Plenarinho Newspaper."
	},
	{
		"employer" : "Ministry of Labor and Employment [Politec]", 
		"title" : "Designer Web & Graphic & Programmer",
		"location" : "Brasília, Brazil",		
		"dates" : "January - July 2004",
		"description" : "Creation, layout, photo processing, development of drawings, newspapers, magazines, Maintenance and Development of the Ministry."
	},
	{
		"employer" : "WebDaqui", 
		"title" : "WebDesigner",
		"location" : "Brasília, Brazil",		
		"dates" : "August 2003 - January 2004",
		"description" : "Development Sites, Advertisements, Banners."
	},
	{
		"employer" : "Bit House Brazil, Jornal O Triângulo & Registro Fotolito", 
		"title" : "WebDesigner, Editor Graphic & Electronic",
		"location" : "Uberlândia, Brazil",		
		"dates" : "March 1998 - April 2003",
		"description" : "Website Development. Desktop publishing: design and layout of the newspaper. Monitoring the entire process of creating the photolithography."
	},
	{
		"employer" : "Gráfica Real", 
		"title" : "Editor & Graphic Design",
		"location" : "Patrocínio, Brazil",		
		"dates" : "February - November 1997",
		"description" : "Creation, layout, photo processing, development of drawings, pamphlets, newspapers, magazines."
	}]
};

work.display = function() {
	for(job in work.jobs) {		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedDescription);
	}
};

work.display();

/* PROJECTS */
var projects = {
	"project" : [{
		"title" : "DB-Beauty Services",
		"dates" : "Mai 2015", 
		"description" : "Graphic Design: Flyer, Ilustrator.", 
		"images" : ["images/work1_small.jpg","images/work1_2_small.jpg"]
	},
	{
		"title" : "Image+ Christmas",
		"dates" : "November 2014", 
		"description" : "Graphic Design: Flyer, Ilustrator.", 
		"images" : ["images/work2_small.jpg"]
	},
	{
		"title" : "WTS Courses",
		"dates" : "July 2014", 
		"description" : "Graphic Design: Flyer, Ilustrator.", 
		"images" : ["images/work3_small.jpg"]
	}]
};

projects.display = function(){
	for(item in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.project[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);
		
		$(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
		for (image in projects.project[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.project[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		};
	}
};
projects.display();


/* OTHERS */

function inName(name){
	//console.log(name);
	var newName = name;
	var firstName = newName.split(" ")[0];
	var lastName = newName.split(" ")[1];
	
	if (lastName == lastName.toUpperCase()) {
		newName = firstName + " " + lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase(); 
		$("button").text("Internationalize");
	} else {
		newName = firstName + " " + lastName.toUpperCase();
		$("button").text("Undo"); 
	}
	return newName;
};

$("#mapDiv").append(googleMap);