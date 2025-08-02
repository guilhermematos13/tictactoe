import useGameLogic from './hooks/useGameLogic'
import { Board } from './components/Board'
import { useState } from 'react'
import { FloatingMenu } from './components/FloatingMenu'
import { GameOverModal } from './components/GameOverModal'
import { Score } from './components/Score'
import { InfoContent } from './components/InfoContent'

export default function App() {
  const {
    board,
    playerTurn,
    winner,
    makeMove,
    resetGame,
    finalMessage,
    setFinalMessage,
    setShowModal,
    showModal,
    score,
    timer,
    resetScore,
  } = useGameLogic()
  const [colors, setColors] = useState({
    x: '#2563EB',
    o: '#DC2626',
    cell: '#4EA5D9',
    background: '#122C34',
  })

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4"
      style={{ backgroundColor: colors.background }}
    >
      <h1 className="text-3xl font-bold mb-4" style={{ color: colors.cell }}>
        Tic Tac Toe
      </h1>

      <Board board={board} onCellClick={makeMove} colors={colors} />

      <InfoContent
        colors={colors}
        playerTurn={playerTurn}
        resetGame={resetGame}
        timer={timer}
        winner={winner}
      />

      <Score resetScore={resetScore} score={score} colors={colors} />
      <FloatingMenu colors={colors} setColors={setColors} />
      <GameOverModal
        show={showModal}
        message={finalMessage}
        onClose={() => {
          resetGame()
          resetScore()
          setShowModal(false)
          setFinalMessage('')
        }}
      />
    </div>
  )
}
