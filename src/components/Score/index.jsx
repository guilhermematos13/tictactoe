export function Score({ score, resetScore, colors }) {
  return (
    <div
      className="mt-6 p-4 rounded shadow-md w-full max-w-xs"
      style={{ backgroundColor: colors.cell, color: colors.background }}
    >
      <h2 className="text-xl font-semibold mb-2 text-center">Placar</h2>
      <div className="flex justify-between mb-2">
        <span>X:</span>
        <span>{score.X}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>O:</span>
        <span>{score.O}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Empates:</span>
        <span>{score.draw}</span>
      </div>
      <button
        onClick={resetScore}
        style={{ backgroundColor: colors.background, color: colors.cell }}
        className="w-full mt-2 px-3 py-1 cursor-pointer text-white rounded"
      >
        Zerar placar
      </button>
    </div>
  )
}
