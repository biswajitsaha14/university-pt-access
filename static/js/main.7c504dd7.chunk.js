(this["webpackJsonpuniversity-pt-access"]=this["webpackJsonpuniversity-pt-access"]||[]).push([[0],{101:function(e,t){},113:function(e){e.exports=JSON.parse('{"labels":["Greater Sydney","Western City","Central City","Eastern City","North","South"],"datasets":[{"label":"15 minutes","data":[14.070092950227,1.982828380503545,3.851441690863664,42.00651854863816,10.80739634776616,1.537543402777778]},{"label":"30 minutes","data":[52.897051711686,19.32799625420511,42.59004659328787,87.86359756962754,65.20068691310222,38.42013888888889]},{"label":"45 minutes","data":[85.0323078201329,53.84478362436192,89.8475251536228,99.1787221696305,88.45893014378142,94.22019675925925]},{"label":"60 minutes","data":[94.51432814007939,78.8339686595042,98.55898440137754,99.99788221291807,96.41995766952698,99.49978298611111]}]}')},163:function(e,t,i){},164:function(e,t,i){},166:function(e,t,i){},170:function(e,t){},174:function(e,t,i){"use strict";i.r(t);var n=i(7),s=i.n(n),a=i(124),r=i.n(a),c=(i(163),i(164),i(1)),o=i(152),l=i(113),d=i(26),b={15:[102,194,165],30:[252,141,98],45:[141,160,203],60:[231,138,195]},u={};for(var j in b)u[j]="rgba(".concat(b[j].join(),",1)");var p={};for(var h in b)p[h]="rgba(".concat(b[h].join(),",0.9)");l.datasets=l.datasets.map((function(e){var t=e.label.split(" ")[0];return console.log(t),Object(c.a)(Object(c.a)({},e),{},{label:"".concat(e.label," (%)"),backgroundColor:p[t],borderColor:u[t],borderWidth:1})}));var m={indexAxis:"y",maintainAspectRatio:!1,elements:{bar:{borderWidth:1}},responsive:!0,scales:{x:{ticks:{callback:function(e,t,i){return e+"%"}}}},plugins:{legend:{position:"right",display:!1},title:{display:!1,text:" metres access to open space"}}},f=function(){return Object(d.jsx)("div",{style:{height:"400px"},children:Object(d.jsx)(o.a,{data:l,options:m})})},g=(i(166),function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{id:"legend",style:{fontFamily:"Roboto, sans-serif"},children:[Object(d.jsx)("h4",{children:" LEGEND"}),Object(d.jsx)("div",{className:"legend-content",children:Object.keys(b).map((function(e){return Object(d.jsxs)("li",{children:[" ",Object(d.jsx)("div",{className:"circle",style:{backgroundColor:"rgba(".concat(b[e].join(),")")}}),e," minutes catchment"]})}))})]})})}),y=function(){return Object(d.jsxs)("div",{className:"layer-selector",style:{fontFamily:"Roboto, sans-serif"},children:[Object(d.jsx)("h3",{children:" Access to university by public transport and walking"}),Object(d.jsx)("p",{style:{fontSize:"12px",color:"gray",lineHeight:"1.4em"},children:"The area with at least one trip between 7:00 am to 9:00am on a weekday (Tuesday, 08/06/2021) to its nearest university is considered to have access to universities."}),Object(d.jsx)(g,{}),Object(d.jsx)("div",{style:{marginTop:"10px",fontSize:"small"},children:Object(d.jsx)("b",{children:"% of dwellings that have access to university"})}),Object(d.jsx)(f,{}),Object(d.jsx)("div",{children:Object(d.jsx)("span",{style:{fontSize:"8px"},children:"Source: GSC Analysis 2021,TfNSW, DPIE, ABS 2016"})}),Object(d.jsxs)("span",{style:{fontSize:"10px",color:"gray",lineHeight:"1.1em"},children:["Please contact ",Object(d.jsx)("a",{href:"mailto: data@gsc.nsw.gov.au",children:"data@gsc.nsw.gov.au"})," for more info"]})]})},x=i(16),v=i(72),O=i(189),w=i(23),k=i(188),C=i(148),S=i(190),N={latitude:-33.878197,longitude:151.148648,zoom:10};Object(v.d)({username:"gsc-admin",apiKey:"default_public"});var _=function(){var e=new O.a({id:"access-uni",type:w.f.QUERY,data:"select the_geom_webmercator, tobreak from serviceareapolygons_rings_universities",getFillColor:function(e){return[].concat(Object(x.a)(b[e.properties.tobreak]),[210])},getLineColor:function(e){return b[e.properties.tobreak]},lineWidthMinPixels:.1,pickable:!1}),t=new O.a({id:"university",type:w.f.QUERY,data:"select the_geom_webmercator, university_campus_name as uni_name from universities",getFillColor:[0,0,0],getLineColor:[255,255,255],lineWidthMinPixels:1,pointRadiusMinPixels:6,pickable:!0}),i=new O.a({id:"district",type:w.f.QUERY,data:'select the_geom_webmercator, district from "gsc-admin".districtboundary ',getFillColor:[0,0,0,0],getLineColor:[35,35,35],lineWidthMinPixels:1.2,pickable:!1});return Object(d.jsx)("div",{children:Object(d.jsx)(S.a,{width:"100%",height:"100%",initialViewState:N,getTooltip:function(e){var t=e.object;if(!t)return!1;var i=t.properties,n=(i.district,i.uni_name);return{html:"<div>University: ".concat(n,"</div>"),style:{fontSize:"0.8em"}}},controller:!0,layers:[e,i,t],children:Object(d.jsx)(C.a,{reuseMaps:!0,mapStyle:k.a.PRISTON,mapboxApiAccessToken:"pk.eyJ1IjoiYnNuYXlhbiIsImEiOiJja3Ewczd3MW4wN3Z3MnVvNDNsenlzNnFsIn0.f8nk8yrxIeCKOlzIy1b-Pg",preventStyleDiffing:!0})})})};var F=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(_,{}),Object(d.jsx)(y,{})]})},E=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,195)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;i(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root")),E()}},[[174,1,2]]]);
//# sourceMappingURL=main.7c504dd7.chunk.js.map