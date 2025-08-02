import { Cell } from '../Cell'

export function Board({ board, onCellClick, colors }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {board.map((value, index) => (
        <Cell key={index} value={value} onClick={() => onCellClick(index)} colors={colors} />
      ))}
    </div>
  )
}
