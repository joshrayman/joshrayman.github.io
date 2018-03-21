class SankeyVis {
  constructor() {
    this.selector = d3.select('#selector');
    this.sankey = d3.select('#sankey');
    this.width = 400;
    this.height = 450;
  }

  init() {
    this.testData = {
      "nodes": [
        { "name": "red" },
        { "name": "blue" },
        { "name": "yellow" },
        { "name": "purple" },
        { "name": "Coalition" },
        { "name": "Opposition" }
      ],
      "links": [
        { "source": "blue", "target": "Coalition", "value": 47 },
        { "source": "red", "target": "Opposition", "value": 39 },
        { "source": "yellow", "target": "Opposition", "value": 9 },
        { "source": "purple", "target": "Opposition", "value": 5 },
      ]
    };
    this.selected = [];
    this.renderSankey(this.sankey);
  }

  update(color) {
    if(this.selected.indexOf(color) > -1) {
      this.selected.slice(this.selected.indexOf(color), 1);
    }
    else {
      this.selected.push(color);
    }

    var linkIdx = this.testData.links.map(function(d) { return d.source }).indexOf(color);

    this.testData.links[linkIdx].target = this.testData.links[linkIdx].target === "Coalition" ? "Opposition" : "Coalition";

     var graph = JSON.parse(JSON.stringify(this.testData));
     var sankey = this.sankeyCalc;
     var svg = this.sankey;
     var path = sankey.link();
     var offset = 100;

     // return only the distinct / unique nodes
    graph.nodes = d3.keys(d3.nest()
      .key(function (d) { return d.name; })
      .object(graph.nodes));

     // loop through each link replacing the text with its index from node
     graph.links.forEach(function (d, i) {
       graph.links[i].source = graph.nodes.indexOf(graph.links[i].source);
       graph.links[i].target = graph.nodes.indexOf(graph.links[i].target);
     });

     //now loop through each nodes to make nodes an array of objects
     // rather than an array of strings
     graph.nodes.forEach(function (d, i) {
       graph.nodes[i] = { "name": d };
     });

     console.log(graph);

    sankey
      .nodes(graph.nodes)
      .links(graph.links)
      .layout(32);
    
    // add in the links
    var link = svg.selectAll(".link")
        .data(graph.links)
        .transition()
        .duration(500)
        .attr("class", function(d) { 
          return d.source.name + " link";
        })
        .attr("d", path)
        .style("stroke-width", function(d) { return Math.max(1, d.dy); });

    var node = svg.selectAll(".node")
        .data(graph.nodes)
        .transition()
        .duration(500)
        .attr("class", function(d) { 
          return d.name + " node";
        })
        .attr("transform", function(d) { 
          return "translate(" + d.x + "," + d.y + ")"; 
        });

    node.select("rect")
        .attr("height", function(d) { return d.dy; })
        .attr("width", sankey.nodeWidth())
        .style("stroke", function(d) { 
        return d3.rgb(d.color).darker(2); })
        .select("title")
          .text(function(d) { 
          return d.name + "\n" + d.value; });

    node.select("text")
        .text(function(d) { return d.value; })
        .attr("y", function(d) { return d.dy / 2; })

    var node2 = svg.selectAll(".node2");

    node2.data(graph.nodes)
        .transition()
        .duration(100)
        .style('opacity', 0)
        .transition()
        .duration(400)
        .attr("transform", function(d) { 
            var x = (d.sourceLinks.length > 0) ? -40 : d.x + 15 + (offset / 4);
            return "translate(" + x + "," + d.y + ")"; 
        })
        .on('end', function() {
          node2.selectAll('rect').remove();

          node2.selectAll('rect.votes')
            .data(function(d) { return new Array(d.value); })
            .enter().append('rect')
              .attr('class', 'votes')
              .attr("height", 8)
              .attr("width", 8)
              .attr("x", function(d, i) {
                return i % 3 * 10;
              })
              .attr("y", function(d, i) {
                return Math.floor(i / 3) * 10;
              });

            node2
              .transition()
              .duration(100)
              .style('opacity', 1)
        });
  }

  renderSankey(svg) {
     var graph = JSON.parse(JSON.stringify(this.testData));

     var offset = 100;

    // Set the sankey diagram properties
    var sankey = d3.sankey()
        .nodeWidth(30)
        .nodePadding(40)
        .size([this.width - offset, this.height - 20]);

    this.sankeyCalc = sankey;

    var path = sankey.link();

     // return only the distinct / unique nodes
    graph.nodes = d3.keys(d3.nest()
      .key(function (d) { return d.name; })
      .object(graph.nodes));

     // loop through each link replacing the text with its index from node
     graph.links.forEach(function (d, i) {
       graph.links[i].source = graph.nodes.indexOf(graph.links[i].source);
       graph.links[i].target = graph.nodes.indexOf(graph.links[i].target);
     });

     //now loop through each nodes to make nodes an array of objects
     // rather than an array of strings
     graph.nodes.forEach(function (d, i) {
       graph.nodes[i] = { "name": d };
     });

    sankey
      .nodes(graph.nodes)
      .links(graph.links)
      .layout(32);
    
    // add in the links
    var link = svg.append("g").selectAll(".link")
        .data(graph.links)
      .enter().append("path")
        .attr("class", function(d) { 
          return d.source.name + " link";
        })
        .attr("d", path)
        .style("stroke-width", function(d) { return Math.max(1, d.dy); })
        .sort(function(a, b) { return b.dy - a.dy; });

    link.append("title")
          .text(function(d) {
          return d.source.name + " → " + 
                  d.target.name + "\n" + d.value; });

    var node = svg.append("g").selectAll(".node")
        .data(graph.nodes)
      .enter().append("g")
        .attr("class", function(d) { 
          return d.name + " node";
        })
        .attr("transform", function(d) { 
        return "translate(" + d.x + "," + d.y + ")"; });

    node.append("rect")
        .attr("height", function(d) { return d.dy; })
        .attr("width", sankey.nodeWidth())
        .style("stroke", function(d) { 
        return d3.rgb(d.color).darker(2); })
      .append("title")
        .text(function(d) { 
        return d.name + "\n" + d.value; });

    node.append("text")
        .attr("x", sankey.nodeWidth() / 2)
        .attr("dy", "0.35em")
        .attr("y", function(d) { return d.dy / 2; })
        .text(function(d) { return d.value; })

    var node2 = svg.append("g").selectAll(".node2")
        .data(graph.nodes)
      .enter().append("g")
        .attr("class", function(d) { 
          return d.name + " node2";
        })
        .attr("transform", function(d) { 
            var x = (d.sourceLinks.length > 0) ? -40 : d.x + 15 + (offset / 4);
            return "translate(" + x + "," + d.y + ")"; });

    node2.selectAll('rect.votes')
      .data(function(d) { return new Array(d.value); })
        .enter()
        .append("rect")
        .attr("height", 8)
        .attr("width", 8)
        .attr("x", function(d, i) {
          return i % 3 * 10;
        })
        .attr("y", function(d, i) {
          return Math.floor(i / 3) * 10;
        });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var vis = new SankeyVis();
  vis.init();

  document.querySelector('#selector rect.red').addEventListener('click', function() {
    document.querySelector('#selector rect.red').classList.toggle('selected');
    vis.update('red');
  });

  document.querySelector('#selector rect.yellow').addEventListener('click', function() {
    document.querySelector('#selector rect.yellow').classList.toggle('selected');
    vis.update('yellow');
  });

  document.querySelector('#selector rect.blue').addEventListener('click', function() {
    document.querySelector('#selector rect.blue').classList.toggle('selected');
    vis.update('blue');
  });

  document.querySelector('#selector rect.purple').addEventListener('click', function() {
    document.querySelector('#selector rect.purple').classList.toggle('selected');
    vis.update('purple');
  });
});