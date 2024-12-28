import * as Tone from "tone";
import './Piano.css'
import { Container } from "react-bootstrap";

export default function Piano() {
    function play(id) {
        const element = document.getElementById(id);
    
        element.style.boxShadow = "none";
        const synth = new Tone.Synth().toDestination()
        synth.triggerAttackRelease(id, "8n")
        setTimeout(() => {
            element.style.boxShadow = "0px 12px 10px -4px rgba(0,0,0,0.75)";
        }, 100);
    }

    return (
      <>
        <Container>
          <h2>Piano</h2>
          <div className='piano mt-5'>
            
          <div className='white-key' id="C4" onClick={() => {
            play("C4")
          }}></div>
          <div className='black-key' id="Db4" onClick={() => {
            play("Db4")
          }}></div>
          <div className='white-key' id="D4" onClick={() => {
            play("D4")
          }}></div>
          <div className='black-key' id="Eb4" onClick={() => {
            play("Eb4")
          }}></div>
          <div className='white-key' id="E4" onClick={() => {
            play("E4")
          }}></div>
          <div className='white-key' id="F4" onClick={() => {
            play("F4")
          }}></div>
          <div className='black-key' id="Gb4" onClick={() => {
            play("Gb4")
          }}></div>
          <div className='white-key' id="G4" onClick={() => {
            play("G4")
          }}></div>
          <div className='black-key' id="Ab4" onClick={() => {
            play("Ab4")
          }}></div>
          <div className='white-key' id="A4" onClick={() => {
            play("A4")
          }}></div>
          <div className='black-key' id="Bb4" onClick={() => {
            play("Bb4")
          }}></div>
          <div className='white-key' id="B4" onClick={() => {
            play("B4")
          }}></div>
        </div>
      </Container>
      </>
    )
}