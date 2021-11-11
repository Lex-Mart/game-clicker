import React from 'react'
import ScoreTable from '../ScoreTable/ScoreTable'
import Button from '../ui/Button'
import Input from '../ui/Input'
import Select from '../ui/Select'
import './Menu.css'

class Menu extends React.Component {
    state = {
        currentLevel: 1,
    }

    handleInputChange(e) {
        if (!e.nativeEvent.inputType) {
            const time = +e.target.value
            this.props.setTime(time)
        }
    }

    handleSelectChange(e) {
        const value = +e.target.value
        this.props.setLevel(value)
    }

    handleSelectLevel(level) {
        this.setState({ currentLevel: level })
    }

    render() {
        const levels = [
            { value: 1, mode: 'низкая' },
            { value: 2, mode: 'средняя' },
            { value: 3, mode: 'высокая' },
        ]

        return (
            <div className='menu'>
                <div className='option'>
                    <div className='time'>
                        время{' '}
                        <Input
                            value={this.props.gameOption.time}
                            min='10'
                            max='60'
                            onChange={(e) => this.handleInputChange(e)}
                        />
                    </div>
                    <div className='gameMode'>
                        сложность{' '}
                        <Select
                            value={this.props.gameOption.difficultyLevel}
                            onChange={(e) => this.handleSelectChange(e)}>
                            {levels.map((el, i) => (
                                <option key={i} value={el.value}>
                                    {el.mode}
                                </option>
                            ))}
                        </Select>
                    </div>
                    <div className='br'></div>
                    <Button onClick={this.props.changeStatus}>играть</Button>
                </div>
                <div className='scores'>
                    таблица рекордов
                    <div className='br'></div>
                    <ScoreTable
                        scores={this.props.scores}
                        levels={levels}
                        currentLevel={this.state.currentLevel}
                        setCurrentLevel={(l) => this.handleSelectLevel(l)}
                    />
                </div>
            </div>
        )
    }
}

export default Menu
