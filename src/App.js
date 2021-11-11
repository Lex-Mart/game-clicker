import React from 'react'
import './App.css'
import Game from './components/Game/Game'
import Menu from './components/Menu/Menu'
import { dateFormat, getFromLocalStorage, saveToLocalStorage } from './utils'

class App extends React.Component {
    state = {
        scores: getFromLocalStorage('scores') || [],
        isStart: false,
        gameOption: {
            time: 10,
            difficultyLevel: 2,
        },
    }

    addScore(clicks) {
        const date = dateFormat(new Date())
        const newScore = {
            time: this.state.gameOption.time,
            difficultyLevel: this.state.gameOption.difficultyLevel,
            clicks,
            date,
        }

        this.setState({
            scores: [...this.state.scores, newScore],
        })

        saveToLocalStorage('scores', newScore)
    }

    setTime(time) {
        let t = time < 10 ? 10 : time > 60 ? 60 : time

        this.setState({
            gameOption: {
                ...this.state.gameOption,
                time: t,
            },
        })
    }

    toggleGameStatus() {
        this.setState({ isStart: !this.state.isStart })
    }

    setDifficultyLevel(level) {
        this.setState({
            gameOption: {
                ...this.state.gameOption,
                difficultyLevel: level,
            },
        })
    }

    render() {
        return (
            <div className='app'>
                {this.state.isStart ? (
                    <Game
                        option={this.state.gameOption}
                        changeStatus={() => this.toggleGameStatus()}
                        addScore={(s) => this.addScore(s)}
                    />
                ) : (
                    <Menu
                        gameOption={this.state.gameOption}
                        setTime={(t) => this.setTime(t)}
                        setLevel={(l) => this.setDifficultyLevel(l)}
                        changeStatus={() => this.toggleGameStatus()}
                        scores={this.state.scores}
                    />
                )}
            </div>
        )
    }
}

export default App
