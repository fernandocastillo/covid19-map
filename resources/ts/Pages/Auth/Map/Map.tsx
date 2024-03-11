import { useEffect, useState } from "react"
import { Bubble, CardType } from "../../../types"

export default ({
    bubbles,    
}:{bubbles: Array<Bubble>})=>{

    useEffect(()=>{
        if (bubbles.length>0) {            
                    
            setTimeout(()=>{
                const mapProps = {
                    element: document.getElementById('container'),
                    scope: "india",
                    geographyConfig: {
                        popupOnHover: true,
                        highlightOnHover: true,
                        borderColor: "#444",
                        borderWidth: 0.5,
                        dataUrl: "https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json"
                        //dataJson: topoJsonData
                    },
                    bubblesConfig: {
                        borderWidth: 2,
                        borderOpacity: 1,
                        borderColor: "#FFFFFF",
                        popupOnHover: true, // True to show the popup while hovering
                        radius: null,
                        popupTemplate: function (geo, data) {
                        return `<div class="hoverinfo">city: ${data.state}, Slums: ${data.radius}%</div>`;
                        },
                        fillOpacity: 0.75,
                        animate: true,
                        highlightOnHover: true,
                        highlightFillColor: "#FC8D59",
                        highlightBorderColor: "rgba(250, 15, 160, 0.2)",
                        highlightBorderWidth: 2,
                        highlightBorderOpacity: 1,
                        highlightFillOpacity: 0.85,
                        exitDelay: 100, // Milliseconds
                        key: JSON.stringify
                    },
                    fills: {
                        MAJOR: "#306596",
                        MEDIUM: "#0fa0fa",
                        MINOR: "#bada55",
                        defaultFill: "#dddddd"
                    },
                    /*data: {
                        JH: { fillKey: "MINOR" },
                        MH: { fillKey: "MINOR" }
                    },*/
                    setProjection: function (element) {
                        var projection = d3.geo
                        .mercator()
                        .center([80, 25])
                        .scale(800)
                        .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
                        var path = d3.geo.path().projection(projection);
                        return { path: path, projection: projection };
                    }
                }                
                const map = new Datamap(mapProps)
                setTimeout(() => { // only start drawing bubbles on the map when map has rendered completely.
                map.bubbles(bubbles, {
                    popupTemplate: function(geo, data) {
                      return '<div class="hoverinfo">' + data.state  + ''
                    }
                  })
                },1000)
            },300)
          }
        
    },[bubbles])


    return <>
    { 
        bubbles && bubbles.length >0 ? (<div id="container"  className="w-full min-h-[500px]"></div>) : null 
    }
    </>
}