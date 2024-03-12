import { useEffect } from "react"
import { Bubble } from "../../../types"


export default ({    
    dataUrl,
    scope,
    scale,
    center_x,
    center_y,
    selectState,
}:{dataUrl?: string, scope?: string, scale?: number, center_x?: number, center_y?: number, selectState?: any})=>{


    

    useEffect(()=>{
        if (scope) {
                    
            setTimeout(()=>{
                const mapProps = {
                    element: document.getElementById('container'),
                    scope,
                    responsive: true,
                    geographyConfig: {
                        popupOnHover: true,
                        highlightOnHover: true,
                        borderColor: "#444",
                        borderWidth: 0.5,
                        dataUrl
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
                        .center([center_x, center_y])
                        .scale(scale)                        
                        .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
                        var path = d3.geo.path().projection(projection);
                        return { path: path, projection: projection };
                    },
                    done: function(datamap) {
                        datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {                            
                            selectState(geography.id)                            
                        });
                    }
                }                
                const map = new Datamap(mapProps)                
                // Pure JavaScript
                window.addEventListener('resize', function() {
                    map.resize();
                });                
            },300)
          }
        
    },[scope])


    return <div id="container"  className="w-full min-h-[500px]"></div>
}