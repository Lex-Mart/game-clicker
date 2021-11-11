import React from 'react'
import './ScoreTable.css'

class ScoreTable extends React.Component {
    renderTableBody() {
        const scores = this.props.scores.map((score) => ({
            ...score,
            rate: (score.clicks / score.time).toFixed(2),
        }))

        const filteredCurrentLevel = scores.filter(
            (score) => score.difficultyLevel === this.props.currentLevel
        )

        const sortedScores = filteredCurrentLevel.sort((a, b) => b.rate - a.rate)

        return sortedScores.map((score, idx) => (
            <React.Fragment key={idx}>
                <div className='item'>{idx + 1}</div>
                <div className='item'>{score.rate}</div>
                <div className='item'>{score.date}</div>
                <div className='item'>{score.time}</div>
                <div className='item'>{score.clicks}</div>
            </React.Fragment>
        ))
    }

    render() {
        return (
            <div className='scoreTableWrap'>
                <div className='selectLevels'>
                    {this.props.levels.map((level, idx) => (
                        <div
                            key={idx}
                            onClick={() => this.props.setCurrentLevel(level.value)}
                            className={`selectLevel ${
                                this.props.currentLevel === level.value ? 'active' : ''
                            }`}>
                            {level.mode} сл.
                        </div>
                    ))}
                </div>
                <div className='scoreTable'>
                    <div className='scoreTableHead grid'>
                        <div>№</div>
                        <div>клик./сек.</div>
                        <div>дата</div>
                        <div>секунды</div>
                        <div>клики</div>
                    </div>
                    <div className='scoreTableBody grid'>{this.renderTableBody()}</div>
                </div>
            </div>
        )
    }
}

export default ScoreTable
