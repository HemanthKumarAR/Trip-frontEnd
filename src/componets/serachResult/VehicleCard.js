import { Card, Button, Row, Col } from 'react-bootstrap';
import './VehicleCard.css'
import { useNavigate } from 'react-router-dom';

const VehicleCard = ({ vehicle }) => {
    // console.log(vehicle)
    const navigate=useNavigate()
   console.log(vehicle.images)
  const vehicleImage = vehicle.images.find((ele)=>{
    return ele.tittle==='vehicle'
   })
   console.log(vehicleImage.image)

   const handleBook=(vehicleData)=>{
    console.log(vehicleData)
    navigate(
      '/book',
      {state:{vehicle:vehicleData}}
    )

   }

  return (
    <div className='cards-display'>
     

<Row xs={1} md={2} lg={3} className="g-4"> {/* Use the Row component to create rows */}
            <Col> {/* Use the Col component to specify the number of columns per row */}
                <Card style={{ width: '20rem', height:'350px'}}>
                    {vehicleImage && (
                        <Card.Img className='vehicleimage' variant="top" src={`http://localhost:3044/upload/image/${vehicleImage.image}`}  />
                    )}
                    <Card.Body>
                        <Card.Title>{vehicle.vehicleName}</Card.Title>
                        <Card.Text>
                            <strong>Price per km:</strong> Rs {vehicle.pricePerKm}
                        </Card.Text>
                        <Card.Text>
                            <strong>Per day wages:</strong> Rs {vehicle.wages}
                        </Card.Text>
                        <Button variant="primary" onClick={()=>handleBook(vehicle)}>Book</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
  );
}

export default VehicleCard;
