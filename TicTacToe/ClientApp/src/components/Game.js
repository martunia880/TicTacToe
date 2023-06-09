import React, { Component } from "react";
import {Board} from "./gameComponents/Board";
// import {Player} from "./gameComponents/Player";


export class Game extends Component {
  
    render () {
      return (
        <div>
          <Board />
        </div>
      );
    }
  }
  