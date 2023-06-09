import React, {Component} from "react";
import {Square} from "./Square";

export class Board extends Component {
    
    render() {
      
      return (
        <div className="board">
            <Square 
              onClick={(e) => draw(e, 1)}
            />
            <Square 
              onClick={(e) => draw(e, 2)}
            />
            <Square 
              onClick={(e) => draw(e, 3)}
            />
            <Square 
              onClick={(e) => draw(e, 4)}
            />
            <Square 
              onClick={(e) => draw(e, 5)}
            />
            <Square 
              onClick={(e) => draw(e, 6)}
            />
            <Square 
              onClick={(e) => draw(e, 7)}
            />
            <Square 
              onClick={(e) => draw(e, 8)}
            />
            <Square 
              onClick={(e) => draw(e, 9)}
            />
        </div>
      );
    }
  }
