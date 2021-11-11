import React from 'react'
import { randomColor, randomNumber } from '../../utils'
import './GameField.css'

export class GameField extends React.Component {
    renderSquare() {
        const color = randomColor()
        let size = randomNumber(60, 100)

        if (this.props.level === 2) size = size * 0.7
        if (this.props.level === 3) size = size * 0.55

        const posX = randomNumber(1, 500 - size)
        const posY = randomNumber(1, 500 - size)

        const styles = {
            backgroundColor: color,
            height: size,
            width: size,
            top: posY,
            left: posX,
        }

        return <div className='square' onClick={this.props.addClick} style={styles}></div>
    }

    render() {
        return <div className='gameField'>{this.props.start && this.renderSquare()}</div>
    }
}

export default GameField
