import React from 'react'
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import TestTimePicker from './TestTimePicker'
import './ProgrammeOverview.css'

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

class ProgrammeOverview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newLightRule:"",
            open: false,
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    onAddNewRules = () => {
        this.setState ({
            open: false,
            newLightRule: <TestTimePicker
                         />})
    }

    render() {
        const { open } = this.state;
        return (
            <div className="infosContainer">
                <div className="cityNameContainer">
                    City Name
                </div>
                <div className="dateContainer">
                    Date
                </div>
                <div className="programTotalHoursContainer">
                    <div className="hoursContainer">
                        02
                    </div>
                    <div className="minutesContainer">
                        35
                    </div>
                    <div className="secondsContainer">
                        00
                    </div>
                </div>
                <div style={styles} className="addprogrammeCTAContainer">
                    <button className="newProgramme" onClick={this.onOpenModal}>
                        +
                    </button>
                    <Modal className="modal" open={open} onClose={this.onCloseModal}>
                        <p>Nouvelle consigne d'éclairage</p>
                     
                            <div className="newStartTimeContainer">
                                <p>Début</p>
                                <div className="newStartTimePicker">
                                    <TestTimePicker />
                                </div>
                            </div>
                            <div className="newEndTimeContainer">
                                <p>Fin</p>
                                <div className="newStartTimePicker">
                                    <TestTimePicker />
                                </div>
                            </div>
                            <button onClick={this.onAddNewRules} >Ajouter</button>
                   
                    </Modal>
                </div>
                {this.state.newLightRule}
            </div>

        )
    }
}

export default ProgrammeOverview