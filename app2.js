function project(data){
	d3.select("svg").selectAll("circle").remove();
	var projection = d3.select("svg").selectAll("circle").data(data);
	projection.enter()
		.append("circle")
		.style("stroke", function(c){return c.strokecolor})
		.style("stroke-width", 1)
		.style("fill", function(c){return c.fillcolor})
		.attr("cx",   function(c){return c.cx})
		.attr("cy",   function(c){return c.cy})
		.attr("r", 	  function(c){return c.r});
	projection.exit().remove();
}

function rand(num){
	return Math.floor((Math.random()*num)+1);	
}

function drawText(country){
	d3.select("svg").selectAll("text").remove();
	var projection = d3.select("svg").selectAll("text").data(country);
	projection.enter().append("text")
		.text(function(c){return c.country})
		.attr("fill", "black")
		.attr("font-family", "Arial")
		.attr("font-size", 50)
		.attr("x", 50)
		.attr("y", 50)
	projection.exit().remove();
}

function drawCountry(country, width, height){

	var fillsafe = "rgba(0, 0, 255, 0.1)";
	var fillnonsafe = "rgba(166, 139, 106, .7)";
	var strokesafe = "blue";
	var strokenonsafe = "rgba(64, 45, 28, 1)";
	var circles = [];
	var population_access_safe_water = country.population_access_safe_water;
	var population_no_access_safe_water = country.population_no_access_safe_water
	//Blue Circles
	var xxxl = (population_access_safe_water/100000000);
	var xxl  = (population_access_safe_water%100000000)/10000000;
	var xl   = (population_access_safe_water%10000000)/1000000;
	var l    = (population_access_safe_water%1000000)/100000;
	var m    = (population_access_safe_water%100000)/10000;
	var s    = (population_access_safe_water%10000)/1000;
	var xs   = (population_access_safe_water%1000);
	var i = 0;

	//Blue xxxl
	for (i = 1; i < xxxl; i++){
		circles.push({strokecolor: strokesafe, fillcolor: fillsafe, cx: rand(width), cy: rand(height), r: 200});
	}
	//Blue xxl
	for (i = 1; i < xxl; i++){
		circles.push({strokecolor: strokesafe, fillcolor: fillsafe, cx: rand(width), cy: rand(height), r: 150});
	}
	//Blue xl
	for (i = 1; i < xl; i++){
		circles.push({strokecolor: strokesafe, fillcolor: fillsafe, cx: rand(width), cy: rand(height), r: 100});
	}
	//Blue l
	for (i = 1; i < l; i++){
		circles.push({strokecolor: strokesafe, fillcolor: fillsafe, cx: rand(width), cy: rand(height), r: 75});
	}
	//Blue m
	for (i = 1; i < m; i++){
		circles.push({strokecolor: strokesafe, fillcolor: fillsafe, cx: rand(width), cy: rand(height), r: 50});
	}
	//Blue s
	for (i = 1; i < s; i++){
		circles.push({strokecolor: strokesafe, fillcolor: fillsafe, cx: rand(width), cy: rand(height), r: 25});
	}
	//Blue xs
	for (i = 1; i < xs; i++){
		circles.push({strokecolor: strokesafe, fillcolor: fillsafe, cx: rand(width), cy: rand(height), r: 5});
	}

	//Brown Circles
	xxxl = (population_no_access_safe_water/100000000);
	xxl  = (population_no_access_safe_water%100000000)/10000000;
	xl   = (population_no_access_safe_water%10000000)/1000000;
	l    = (population_no_access_safe_water%1000000)/100000;
	m    = (population_no_access_safe_water%100000)/10000;
	s    = (population_no_access_safe_water%10000)/1000;
	xs   = (population_no_access_safe_water%1000);
	i = 0;

	//Brown xxxl
	for (i = 1; i < xxxl; i++){
		circles.push({strokecolor: strokenonsafe, fillcolor: fillnonsafe, cx: rand(width), cy: rand(height), r: 200});
	}
	//Brown xxl
	for (i = 1; i < xxl; i++){
		circles.push({strokecolor: strokenonsafe, fillcolor: fillnonsafe, cx: rand(width), cy: rand(height), r: 150});
	}
	//Brown xl
	for (i = 1; i < xl; i++){
		circles.push({strokecolor: strokenonsafe, fillcolor: fillnonsafe, cx: rand(width), cy: rand(height), r: 100});
	}
	//Brown l
	for (i = 1; i < l; i++){
		circles.push({strokecolor: strokenonsafe, fillcolor: fillnonsafe, cx: rand(width), cy: rand(height), r: 75});
	}
	//Brown m
	for (i = 1; i < m; i++){
		circles.push({strokecolor: strokenonsafe, fillcolor: fillnonsafe, cx: rand(width), cy: rand(height), r: 50});
	}
	//Brown s
	for (i = 1; i < s; i++){
		circles.push({strokecolor: strokenonsafe, fillcolor: fillnonsafe, cx: rand(width), cy: rand(height), r: 25});
	}
	//Brown xs
	for (i = 1; i < xs; i++){
		circles.push({strokecolor: strokenonsafe, fillcolor: fillnonsafe, cx: rand(width), cy: rand(height), r: 5});
	}

	project(circles);
}
var width = 1200; var height = 600;
d3.select("svg").attr("width", width).attr("height", height).style("background-color", "white");
for (var i = 0; i < water_access.length; i++){
	$("<option>").text(water_access[i].country).val(i).appendTo($("select"));
}

$("select").on("change", function(){
	var country = $("select").val();
	drawCountry(water_access[country], width, height);
	drawText([water_access[country]]);
});

