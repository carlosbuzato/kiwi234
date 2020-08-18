// Get URL params
function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

// Give the URL parameters variable names
var source = getUrlParameter('utm_source');
var medium = getUrlParameter('utm_medium');
var campaign = getUrlParameter('utm_campaign');
var src = getUrlParameter('src');

// Create Cookies
if(Cookies.get('utm_source')) {
	if(source) {
		var aux = Cookies.get('utm_source');
		Cookies.remove('utm_source');
		if(aux == source) {
			Cookies.set('utm_source', aux, { expires: 365 });
		} else {
			Cookies.set('utm_source', aux + "|" + source,  { expires: 365 });
		}
	}
} else {
	if(source) {
		Cookies.set('utm_source', source,  { expires: 365 });
	}
}
if(Cookies.get('utm_medium')) {
	if(medium) {
		var aux = Cookies.get('utm_medium');
		Cookies.remove('utm_medium');
		if(aux == medium) {
			Cookies.set('utm_medium', aux,  { expires: 365 });
		} else {
			Cookies.set('utm_medium', aux + "|" + medium,  { expires: 365 });
		}
	}
} else {
	if(medium) {
		Cookies.set('utm_medium', medium,  { expires: 365 });
	}
}
if(Cookies.get('utm_campaign')) {
	if(campaign) {
		var aux = Cookies.get('utm_campaign');
		Cookies.remove('utm_campaign');
		if(aux == campaign) {
			Cookies.set('utm_campaign', aux,  { expires: 365 });
		} else {
			Cookies.set('utm_campaign', aux + "|" + campaign,  { expires: 365 });
		}
	}
} else {
	if(campaign) {
		Cookies.set('utm_campaign', campaign,  { expires: 365 });
	}
}
if(Cookies.get('src')) {
	if(src) {
		var aux = Cookies.get('src');
		Cookies.remove('src');
		if(aux == src) {
			Cookies.set('src', aux,  { expires: 365 });
		} else {
			Cookies.set('src', aux + "|" + src,  { expires: 365 });
		}
	}
} else {
	if(src) {
		Cookies.set('src', src,  { expires: 365 });
	}
}


function trackerURL(url) {
	// Check Cookies exists
	if(src) {
		url += "?src=" + src;
	}
 	
 	// Return URL
	return url;
}
