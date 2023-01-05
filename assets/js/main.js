$(function() {
	$('#diagram-id-1').circleDiagram({
		"percent": "92%",
		"size": "262",
		"borderWidth": "24",
		"bgFill": "#cacaca",
		"frFill": "#6bc656",
		"textSize": "70",
		"textColor": "#3CA93C",
		"fontWeight": "900",
		"lineHeight" : "220px"
	});

	$('#diagram-id-2').circleDiagram({
		"percent": "79%",
		"size": "262",
		"borderWidth": "24",
		"bgFill": "#cacaca",
		"frFill": "#6bc656",
		"textSize": "70",
		"textColor": "#3CA93C",
		"fontWeight": "900",
		"lineHeight" : "220px"
	});
	$('#diagram-id-3').circleDiagram({
		"percent": "89%",
		"size": "262",
		"borderWidth": "24",
		"bgFill": "#cacaca",
		"frFill": "#fea934",
		"textSize": "70",
		"textColor": "#fea934",
		"fontWeight": "900",
		"lineHeight" : "220px"
	});
	$('#diagram-id-4').circleDiagram({
		"percent": "72%",
		"size": "262",
		"borderWidth": "24",
		"bgFill": "#cacaca",
		"frFill": "#fea934",
		"textSize": "70",
		"textColor": "#fea934",
		"fontWeight": "900",
		"lineHeight" : "220px"
	});
	$('#diagram-id-5').circleDiagram({
		"percent": "92%",
		"size": "262",
		"borderWidth": "24",
		"bgFill": "#cacaca",
		"frFill": "#fea934",
		"textSize": "70",
		"textColor": "#fea934",
		"fontWeight": "900",
		"lineHeight" : "220px"
	});
	
});


$(document).ready(function(){
	var screensize = $(window).width();
	if (screensize < 768) {
		$('#diagram-id-1m').circleDiagram({
			"percent": "92%",
			"size": "87",
			"borderWidth": "8",
			"bgFill": "#cacaca",
			"frFill": "#6bc656",
			"textSize": "18",
			"textColor": "#3CA93C",
			"fontWeight": "900",
			"lineHeight" : "80px"
		});

		$('#diagram-id-2m').circleDiagram({
			"percent": "79%",
			"size": "87",
			"borderWidth": "8",
			"bgFill": "#cacaca",
			"frFill": "#6bc656",
			"textSize": "18",
			"textColor": "#3CA93C",
			"fontWeight": "900",
			"lineHeight" : "80px"
		});
		$('#diagram-id-3m').circleDiagram({
			"percent": "89%",
			"size": "95",
			"borderWidth": "8",
			"bgFill": "#cacaca",
			"frFill": "#fea934",
			"textSize": "20",
			"textColor": "#fea934",
			"fontWeight": "900",
			"lineHeight" : "80px"
		});
		$('#diagram-id-4m').circleDiagram({
			"percent": "72%",
			"size": "95",
			"borderWidth": "8",
			"bgFill": "#cacaca",
			"frFill": "#fea934",
			"textSize": "20",
			"textColor": "#fea934",
			"fontWeight": "900",
			"lineHeight" : "80px"
		});
		$('#diagram-id-5m').circleDiagram({
			"percent": "92%",
			"size": "95",
			"borderWidth": "8",
			"bgFill": "#cacaca",
			"frFill": "#fea934",
			"textSize": "20",
			"textColor": "#fea934",
			"fontWeight": "900",
			"lineHeight" : "80px"
		});
	}
});