// import { Carousel } from 'react-bootstrap';

// export default function ImageComp(props) {
//   const { docs } = props;
//   const images = Object.values(docs).flat();

//   return (
//     <Carousel fade controls={images.length > 1}>
//       {images.map((ele) => (
//         <Carousel.Item key={ele._id}>
//           <img
//             className="d-block w-100"
//             src={ele.url}
//             alt={ele.model}
//             style={{
//               objectFit: 'contain',
//               backgroundColor: '#ffffff',
//               borderRadius: '5px',
//               height: '400px', // Adjust the height as needed
//             }}
//           />
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// }


// import React from 'react';
// import { Carousel } from 'react-bootstrap';

// export default function ImageComp(props) {
//     const {docs}=props
//     console.log(docs)
//     console.log('hello')
// //   const { src, alt } = props;
// //   console.log(src);

// //   // Check if src is defined and not null
// //   if (!src) {
// //     return <div>No image available</div>;
// //   }

//   return (
//     // <Carousel   >
//     //   <Carousel.Item   >
//     //     <img
//     //       className="d-block w-100"
//     //       src={`http://localhost:3044/upload/image/${src}`}
//     //       alt={alt || 'Image'} // Use provided alt text or fallback to 'Image'
//     //     />
//     //   </Carousel.Item>
//     // </Carousel>
//     <div>

//     </div>
//   );
// }

//working

// import React from 'react';
// import { Carousel, Image } from 'react-bootstrap';

// export default function ImageComp(props) {
//   const { docs } = props;
//   const images = Object.values(docs).flat();

//   return (
//     <Carousel style={{ width: "70vw", height: "60vh", margin: 'auto' }} pause={false}>
//       {images.map((ele) => (
//         <Carousel.Item key={ele._id}>
//           <Image
//             src={`http://localhost:3044/upload/image/${ele.image}`} // Assuming 'image' is the key for the image URL
//             alt={ele.tittle} // Assuming 'tittle' is the key for the image title
//             style={{
//               objectFit: "contain",
//               backgroundColor: "#ffffff",
//               borderRadius: "5px",
//             }}
//           />
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// }

//image fiting with modal 

// import React from 'react';
// import { Carousel, Image } from 'react-bootstrap';

// export default function ImageComp(props) {
//   const { docs } = props;
//   const images = Object.values(docs).flat();

//   return (
//     <Carousel style={{ width: "100%", height: "100%" }} pause={false}>
//       {images.map((ele) => (
//         <Carousel.Item key={ele._id}>
//           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
//             <Image
//               src={`http://localhost:3044/upload/image/${ele.image}`} // Assuming 'image' is the key for the image URL
//               alt={ele.tittle} // Assuming 'tittle' is the key for the image title
//               style={{
//                 maxWidth: "100%",
//                 maxHeight: "100%",
//                 objectFit: "contain",
//                 backgroundColor: "#ffffff",
//                 borderRadius: "5px",
//               }}
//             />
//           </div>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// }


import React from 'react';
// import './image.css'
import { Carousel, Image } from 'react-bootstrap';

export default function ImageComp(props) {
  const { docs } = props;
  const images = Object.values(docs).flat();

  return (
    <Carousel >
      {images.map((ele) => (
        <Carousel.Item key={ele._id}>
          <div style={{ display: 'flex',justifyContent: 'space-around', alignItems: 'center', height: '25%' }}>
            <Image
              src={`http://localhost:3044/upload/image/${ele.image}`} // Assuming 'image' is the key for the image URL
              alt={ele.tittle} // Assuming 'tittle' is the key for the image title
              style={{
                
                width: "50%", // Set width to 100% to ensure images fill the available space
                height: "50%", // Allow height to adjust proportionally based on the width
                backgroundColor: "#ffffff",
                borderRadius: "5px",
              }}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}


