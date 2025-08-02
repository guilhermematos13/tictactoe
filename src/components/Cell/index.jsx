export function Cell({ value, onClick, colors }) {
  const getColor = () => {
    if (value === 'X') return colors?.x || '#2563eb'
    if (value === 'O') return colors?.o || '#dc2626'
    return null
  }

  const color = value ? getColor() : null
  const showValue = value && color

  return (
    <button
      onClick={onClick}
      className="w-20 h-20 cursor-pointer text-3xl font-bold flex items-center justify-center rounded"
      style={{
        backgroundColor: colors?.cell || '#ffffff',
        color: color || 'transparent',
      }}
    >
      {showValue ? value : ''}
    </button>
  )
}
