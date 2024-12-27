import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div>
                <h1 className="mb-5">Welcome to Harmoniq</h1>
                <h3>This is the collection of musical instruments i coded for fun</h3>
                <span>Nb: More to come, Work in progress!</span>
                
                <Container className="mt-5">
                <h2>Instruments:</h2>
                <Button variant="light"><Link to="/piano">Piano</Link></Button>
                </Container>
            </div>
        </>
    )
}