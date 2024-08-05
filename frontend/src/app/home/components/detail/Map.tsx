'use client'
 
import { useState } from 'react'
import styles from "./styles.module.css"
import geoJson from "./map.json"
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
    ZoomableGroup
  } from "react-simple-maps";
import MarkerEndArrow from './MarkerEndArrow';


export default function Map() {

  const pcScale = 500
  const spScacle = 0

    return (
        <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        center: [120.0, 25.0],
        scale: 500
      }}
    >
        <ZoomableGroup>
      <Geographies
        geography={geoJson}
        fill="#D6D6DA"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo}/>
          ))
        }
      </Geographies>
      <Annotation
        dx={ 300 }
        dy={ -145 }
        subject={[105.0, 21.0] }
        strokeWidth={ 1 }
        curve={0.5}
        markerEnd="url(#custom-arrow)"
        connectorProps={{
            stroke: "#f6bd60",
            strokeWidth: 3,
            strokeLinecap: "round"
          }}
        >
          <text x={-27} y={-10} fontSize={30}>Tokyo</text>
          <text x={-340} y={170} fontSize={30}>Hanoi</text>
        <MarkerEndArrow />
        </Annotation>
        </ZoomableGroup>
    </ComposableMap>
    )
}