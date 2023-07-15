//*react-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


//*doctors data
import { doctorData } from "../helpers/data";
import { useState } from "react";
import AddModal from "./AddModal";

            
const Doctors = ({apps,setApps}) => {
    const [show, setShow] = useState(false);
    const [drName , setDrName ] = useState('')
    return (
        <Container>
            <h3 className="display-6" style={{ color: "rgb(166, 18, 189)" }}>
                Our Doctors
            </h3>

            <Row className="" xs={1} sm={2} md={3} xl={4}>
                {doctorData.map(({ id, name, dep, img }) => (
                    <Col key={id} xs={12} sm={6} md={3} xl={4}>
                        <img
                            onClick={() => {
                                setShow(true);
                                setDrName(name);
                            }}
                            className="img-thumbnail doctor-img"
                            src={img}
                            alt={name}
                        />
                        <h5>{name}</h5>
                        <h6>{dep} </h6>
                    </Col>
                ))}
            </Row>
            <AddModal
                show={show}
                handleClose={() => setShow(false)}
                drName={drName}
                apps={apps}
                setApps={setApps}
            />
        </Container>
    );
};

export default Doctors;
