

// import React, { useEffect, useRef } from 'react';
// import L from 'leaflet';
// import { createControlComponent } from '@react-leaflet/core';
// import 'leaflet-routing-machine';
// import { isEqual } from 'lodash';
// import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

// // Import your marker icon image
// import taxiIcon from '../../images/taxi icon.png';

// const createRoutineMachineLayer = ({ pick, drop, drag, onWaypointsDrag }) => {
//   // Define custom marker icon
//   const customIcon = L.icon({
//     iconUrl: taxiIcon,
//     iconSize: [32, 32], // Size of the icon
//     iconAnchor: [16, 32], // Anchor point of the icon
//   });

//   const instance = L.Routing.control({
//     waypoints: [L.latLng(pick[1], pick[0]), L.latLng(drop[1], drop[0])],
//     serviceUrl: 'http://your-osrm-server-url/v1/route',
//     lineOptions: {
//       styles: [{ color: '#FF4000', weight: 4 }],
//     },
//     show: false,
//     addWaypoints: false,
//     routeWhileDragging: drag,
//     draggableWaypoints: drag,
//     fitSelectedRoutes: true,
//     showAlternatives: true,
//     routeInstructionsContainer: '',
//     createMarker: function (i, wp, nWps) {
//       return L.marker(wp.latLng, {
//         icon: customIcon, // Use custom icon for the marker
//       });
//     },
//   });

//   // Event handler for when a route is selected
//   instance.on('routeselected', function (e) {
//     const [x, y] = e.route.inputWaypoints;
//     const [a, b] = e.route.waypoints;
//     const oldSource = Object.values(Object.values(x)[1]);
//     const oldDestination = Object.values(Object.values(y)[1]);

//     const newSource = Object.values(Object.values(a)[1]);
//     const newDestination = Object.values(Object.values(b)[1]);

//     if (isEqual(oldSource, newSource) && isEqual(oldDestination, newDestination)) {
//       console.log('no changes');
//     } else {
//       onWaypointsDrag(e.route.waypoints);
//     }
//   });

//   return instance;
// };

// const RoutingMachine = createControlComponent(createRoutineMachineLayer);

// const RoutingMap = ({ pick, drop, drag }) => {
//   const ref = useRef();

//   useEffect(() => {
//     if (ref.current) {
//       ref.current.getPlan().setWaypoints([L.latLng(pick[0], pick[1]), L.latLng(drop[0], drop[1])]);
//     }
//   }, [pick, drop]);

//   const handleWaypointsDrag = (waypoints) => {
//     const [source, destination] = waypoints;
//     // Handle waypoints drag if needed
//   };

//   return <RoutingMachine ref={ref} pick={pick} drop={drop} drag={drag} onWaypointsDrag={handleWaypointsDrag} />;
// };

// export default RoutingMap;


import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

// Import your marker icon image
import taxiIcon from '../../images/taxi icon.png';

const createRoutineMachineLayer = ({ pick, drop, drag, onWaypointsDrag }) => {
  // Define custom marker icon
  const customIcon = L.icon({
    iconUrl: taxiIcon,
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Anchor point of the icon
  });

  const instance = L.Routing.control({
    waypoints: [L.latLng(pick[1], pick[0]), L.latLng(drop[1], drop[0])],
    lineOptions: {
      styles: [{ color: '#FF4000', weight: 4 }],
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: drag,
    draggableWaypoints: drag,
    fitSelectedRoutes: true,
    showAlternatives: true,
    routeInstructionsContainer: '',
    createMarker: function (i, wp, nWps) {
      return L.marker(wp.latLng, {
        icon: customIcon, // Use custom icon for the marker
      });
    },
  });

  // Event handler for when a route is selected
  instance.on('routeselected', function (e) {
    onWaypointsDrag(e.route.waypoints);
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

const RoutingMap = ({ pick, drop, drag }) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.getPlan().setWaypoints([L.latLng(pick[0], pick[1]), L.latLng(drop[0], drop[1])]);
    }
  }, [pick, drop]);

  const handleWaypointsDrag = (waypoints) => {
    const [source, destination] = waypoints;
    // Handle waypoints drag if needed
  };

  return <RoutingMachine ref={ref} pick={pick} drop={drop} drag={drag} onWaypointsDrag={handleWaypointsDrag} />;
};

export default RoutingMap;
