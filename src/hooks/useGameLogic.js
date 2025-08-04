import { useEffect, useRef, useState } from 'react'

export default function useGameLogic() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [playerTurn, setPlayerTurn] = useState('X')
  const [winner, setWinner] = useState(null)
  const [timer, setTimer] = useState(5)
  const [score, setScore] = useState({ X: 0, O: 0, draw: 0 })
  const [showModal, setShowModal] = useState(false)
  const [finalMessage, setFinalMessage] = useState('')

  const timeoutRef = useRef(null)
  const intervalRef = useRef(null)

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const checkWinner = (newBoard) => {
    for (let combo of winningCombos) {
      const [a, b, c] = combo
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a]
      }
    }
    return newBoard.every((cell) => cell !== null) ? 'draw' : null
  }

  const resetScore = () => {
    setScore({ X: 0, O: 0, draw: 0 })
    setShowModal(false)
    setFinalMessage('')
  }

  const resetGame = () => {
    clearAllTimers()
    setBoard(Array(9).fill(null))
    setPlayerTurn('X')
    setWinner(null)
    setTimer(5)
  }

  const clearAllTimers = () => {
    clearTimeout(timeoutRef.current)
    clearInterval(intervalRef.current)
  }

  const makeMove = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = playerTurn
    setBoard(newBoard)

    const result = checkWinner(newBoard)

    if (result) {
      setWinner(result)
      clearAllTimers()

      if (result === 'draw') {
        setScore((prev) => {
          const updated = { ...prev, draw: prev.draw + 1 }

          if (updated.draw === 11) {
            setFinalMessage('A partida terminou em empate após 11 rodadas!')
            setShowModal(true)
          }

          return updated
        })
      } else {
        setScore((prev) => {
          const updated = { ...prev, [result]: prev[result] + 1 }

          if (updated[result] === 11) {
            setFinalMessage(`🏆 Jogador ${result} venceu a partida, parabéns!`)
            setShowModal(true)
          }

          return updated
        })
      }
    } else {
      setPlayerTurn(playerTurn === 'X' ? 'O' : 'X')
    }
  }

  const makeAutoMove = () => {
    const emptyIndices = board.map((v, i) => (v === null ? i : null)).filter((v) => v !== null)
    if (emptyIndices.length === 0 || winner) return

    const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)]
    makeMove(randomIndex)
  }

  useEffect(() => {
    if (winner) return

    setTimer(5)

    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev - 1)
    }, 1000)

    timeoutRef.current = setTimeout(() => {
      makeAutoMove()
    }, 5000)

    return () => {
      clearAllTimers()
    }
  }, [playerTurn])

  return {
    board,
    resetScore,
    score,
    playerTurn,
    winner,
    makeMove,
    resetGame,
    timer,
    showModal,
    finalMessage,
    setShowModal,
    setFinalMessage,
  }
}
