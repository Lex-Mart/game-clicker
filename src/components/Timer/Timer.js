import React from 'react'
import './Timer.css'

export class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pretimer: 3,
            timer: props.time,
        }
    }

    componentDidMount() {
        const pretimerId = setInterval(() => {
            if (this.state.pretimer === 0) {
                clearInterval(pretimerId)

                this.props.toggleRunGame()

                const timerId = setInterval(() => {
                    if (this.state.timer === '0.0') {
                        clearInterval(timerId)

                        this.props.toggleRunGame()
                        this.props.setFinish()
                    } else {
                        this.setState({ timer: (this.state.timer - 0.1).toFixed(1) })
                    }
                }, 100)
            } else {
                this.setState({ pretimer: this.state.pretimer - 1 })
            }
        }, 1000)
    }

    render() {
        return (
            <div className='timer'>
                {this.state.pretimer !== 0
                    ? `старт через ${this.state.pretimer}`
                    : this.state.timer}
            </div>
        )
    }
}

export default Timer
