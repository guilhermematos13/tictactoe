export function GameOverModal({ show, message, onClose }) {
  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center">
        <h2 className="text-xl font-bold mb-4">Fim da Partida</h2>
        <p className="mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          OK
        </button>
      </div>
    </div>
  )
}
