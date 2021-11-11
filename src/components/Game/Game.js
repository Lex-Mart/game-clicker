import React from 'react'
import GameField from '../GameField/GameField'
import Timer from '../Timer/Timer'
import Button from '../ui/Button'
import './Game.css'

class Game extends React.Component {
    state = {
        clicks: 0,
        isPlay: false,
        isFinish: false,
    }

    addClick() {
        this.setState({ clicks: this.state.clicks + 1 })
    }

    toggleRunGame() {
        this.setState({ isPlay: !this.state.isPlay })
    }

    setFinish() {
        this.setState({ isFinish: true })
    }

    handleMenuClick() {
        this.props.addScore(this.state.clicks)
        this.props.changeStatus()
    }

    render() {
        return (
            <div className='game'>
                {!this.state.isFinish ? (
                    <React.Fragment>
                        <Timer
                            time={this.props.option.time}
                            toggleRunGame={() => this.toggleRunGame()}
                            setFinish={() => this.setFinish()}
                        />
                        <GameField
                            level={this.props.option.difficultyLevel}
                            finish={this.state.isFinish}
                            start={this.state.isPlay}
                            addClick={() => this.addClick()}
                        />
                    </React.Fragment>
                ) : (
                    <div className='stats'>
                        <div>время: {this.props.option.time}c.</div>
                        <div>количество кликов: {this.state.clicks}</div>
                        <div>
                            кликов в секунду:{' '}
                            {(this.state.clicks / this.props.option.time).toFixed(2)}
                        </div>
                        <Button className='btn' onClick={() => this.handleMenuClick()}>
                            меню
                        </Button>
                    </div>
                )}
            </div>
        )
    }
}

export default Game
