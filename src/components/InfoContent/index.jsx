export function InfoContent({ winner, colors, timer, playerTurn, resetGame }) {
  return (
    <div className="mt-4 text-center" style={{ color: colors.cell }}>
      {winner ? (
        <div className="text-lg font-semibold">
          {winner === 'draw' ? 'Empate!' : `Vitória de ${winner}`}
          <button
            onClick={resetGame}
            className="ml-4 px-3 py-1 cursor-pointer rounded"
            style={{ color: colors.background, backgroundColor: colors.cell }}
          >
            Jogar novamente
          </button>
        </div>
      ) : (
        <>
          <p className="mb-1">
            Turno de: <span className="font-bold">{playerTurn}</span>
          </p>
          <p className="text-sm">Tempo restante: {timer}s</p>
        </>
      )}
    </div>
  )
}
