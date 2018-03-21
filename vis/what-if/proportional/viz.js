var usViz = (function() {
    function roundup(x, n) { return (x%n)?x-x%n+n:x }

    var realResults = { D: 227, R: 304, I: 7 };
    var propResults = { D: 257, R: 252, I: 29 };
    var propWtaResults = { D: 268, R: 265, I: 5 };

    var propData;
    var propWtaData;

    var svgWidth = 750;

    //create svg containers
    var svg = d3.select("#by-state")
                .append("svg")
                .attr("width", svgWidth)
                .attr("height", 830);

    var mapSvg = d3.select("#map")
        .append("svg")
        .attr("width", 370)
        .attr("height", 180);

    //draw results bars
    function render() {
        renderBars(realResults, "#actual-result");
        renderBars(propResults, "#proportional");
        renderBars(propWtaResults, "#prop-wta");

        //load initial data
        d3.csv("prop-votes.csv", function(states) {
            propData = states;
            renderSquares(states, svg);

            renderMap(mapSvg, states, 370, 180);
        });
    }



    //load alt dataset
    d3.csv("prop-wta.csv", function(states) {
        propWtaData = states;
    });

    function addVotes(arr, count, value)
    {
        for(var j = 0; j < count; j++)
        {
            arr.push(value);
        }
    }

    function calculateVotes(state, actualResult)
    {
        state.voteData = [];

        //special case for requesting actual results, as this data
        //can be built up from either data set, as it has no. of EC
        //votes and 2016 winner.
        if(actualResult) {
            if(state.Result === "D") {
                addVotes(state.voteData, +state.EC, "D");
            }
            else {
                addVotes(state.voteData, +state.EC, "R");
            }
        }
        else {
            //add dem results first in blue state, else add rep results first
            if(state.Result === "D") {
                addVotes(state.voteData, +state.Clinton, "D");
                addVotes(state.voteData, +state.Trump, "R");
            }
            else {
                addVotes(state.voteData, +state.Trump, "R");
                addVotes(state.voteData, +state.Clinton, "D");
            }
            addVotes(state.voteData, +state.Other, "O");
        }

        return state;
    }

    function renderBars(results, target)
    {
        var width = 370;

        var x = d3.scaleLinear().range([0, width]).domain([0, 538]);

        var bar = d3.select(target).append("svg")
            .attr("width", width)
            .attr("height", 50)
        
        var repX = x(results.R);
        var undX = x(results.I);
        var demX = x(results.D);

        var height = 20;
        var textY = 15;

        bar
        .append("rect")
            .attr("width", repX)
            .attr("height", height)
            .attr("fill", "#faa")
            .attr("x", 0)
            .attr("y", 0)

        bar
        .append("rect")
            .attr("width", undX)
            .attr("height", height)
            .attr("fill", "#ccc")
            .attr("x", repX)
            .attr("y", 0)

        bar
        .append("rect")
            .attr("width", demX)
            .attr("height", height)
            .attr("fill", "#aaf")
            .attr("x", repX + undX)
            .attr("y", 0)

        bar
        .append("text")
            .text("REP " + results.R)
            .attr("fill", "#000")
            .attr("x", 10)
            .attr("y", textY)

        bar
        .append("text")
            .attr("fill", "#fff")
            .attr("x", repX + 10)
            .attr("y", textY)

        bar
        .append("text")
            .text("DEM " + results.D)
            .attr("fill", "#000")
            .attr("x", width - 70)
            .attr("y", textY)

        bar
        .append("rect")
            .attr("width", 1)
            .attr("height", height + 10)
            .attr("fill", "#000")
            .attr("x", x(270))
            .attr("y", 0)

    }

    function renderSquares(states, svg, actualResult)
    {
        var sqSize = 6;
        
        //create ec vote data
        for(var i = 0; i < states.length; i++)
        {
            states[i] = calculateVotes(states[i], actualResult);
        }

        svg.selectAll("g.state").remove();

        var g = svg.selectAll("g.state")
            .data(states)
            .enter()
            .append("g")
            .attr("class", "state")
            .attr("transform", function(d,i){
                var width = 7;
                var x = i % width;
                return "translate(" + ((x * ((sqSize * 15 + (sqSize / 2)) + (sqSize * 2))) + 10) + "," 
                + (roundup(i + 1, width) - (width - 1)) * (sqSize * 2.5) + ")"; 
            });

        g.append("rect")
            .attr("height", (sqSize * 11))
            .attr("width", (sqSize * 15 + (sqSize / 2)))
            .attr("x", 0)
            .attr("y", 5)
            .attr("class", function(d) { return "result " + d.Result })
            .attr("fill", function(d){ return (d.Clinton === d.Trump && !actualResult) ? "#FFFFE0" : "none"; });

        g.append("text")
            .text(function(d) { return d.Name; });

        g.selectAll("rect.vote")
            .data(function(d){ return d.voteData })
            .enter()
            .append("rect")
            .attr("width", sqSize)
            .attr("height", sqSize)
            .attr("y", function(d, i){
                return (roundup(i + 1, 10) - (sqSize)) + 5;
            })
            .attr("x", function(d, i){
                return (i % 10) * (sqSize * 1.5) + (sqSize / 2);
            })    
            .attr("class", function(d) { return "vote " + d });
    }

    //draw map
    function renderMap(target, data, width, height)
    {
        var projection = d3.geoAlbersUsa()
            .translate([width/2, height/2])     // translate to center of screen
            .scale([360]);                      // scale things down so see entire US

        var path = d3.geoPath()
            .projection(projection);

        d3.json("us-state.json", function(error, us) {
            target.selectAll(".state")
                .data(us.features)
                .enter()
                .append("path")
                .attr("d", path)
                .attr("class", function(d) { 
                    var dataPoint = data.filter(function(e) { return e.State === d.properties.name });
                    var className = "def";
                    
                    if(dataPoint[0]) {
                        className = dataPoint[0].Result;
                    }

                    return "state " + className; 
                });
        });
    }

    //change source data
    function changeData(type)
    {
        var data;
        var actualResult = false;

        switch(type)
        {
            case 'res':
                data = propData;
                actualResult = true;
                break;
            case 'prop':
                data = propData;
                break;
            case 'thres':
                data = propWtaData;
                break;
        }
        
        renderSquares(data, svg, actualResult);
    }
    return {
        changeData: changeData,
        render: render
    }

})();

usViz.render();