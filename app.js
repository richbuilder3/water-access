function project(data){
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


function drawCountries(data, width, height){
	var fillsafe = "rgba(0, 0, 255, 0.1)";
	var fillnonsafe = "rgba(166, 139, 106, .7)";
	var strokesafe = "blue";
	var strokenonsafe = "rgba(64, 45, 28, 1)";
	var circles = [];

	for(var i =0; i < data.length; i++){
		circles.push({
			strokecolor: strokesafe, 
			fillcolor: fillsafe, 
 			cx: (data[i].population_access_safe_water/data[i].population)*width, 
			cy: height - ((data[i].gdp_millions/16500000)*height),
			// r:  (data[i].population/1350000000)*300
			r: 10
		});
	}

	project(circles);
}
var width = 1200; var height = 600;
d3.select("svg").attr("width", width + 100).attr("height", height + 100).style("background-color", "white");
drawCountries(water_access, width, height);

