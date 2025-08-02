import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const MenuOptions = ({ colors, setColors }) => {
  return (
    <div className="flex flex-col gap-2 text-sm">
      <label>
        Cor do X:
        <input
          type="color"
          value={colors.x}
          onChange={(e) => setColors({ ...colors, x: e.target.value })}
          className="ml-2 cursor-pointer"
        />
      </label>

      <label>
        Cor do O:
        <input
          type="color"
          value={colors.o}
          onChange={(e) => setColors({ ...colors, o: e.target.value })}
          className="ml-2 cursor-pointer"
        />
      </label>

      <label>
        Cor das células:
        <input
          type="color"
          value={colors.cell}
          onChange={(e) => setColors({ ...colors, cell: e.target.value })}
          className="ml-2 cursor-pointer"
        />
      </label>

      <label>
        Cor do fundo:
        <input
          type="color"
          value={colors.background}
          onChange={(e) => setColors({ ...colors, background: e.target.value })}
          className="ml-2 cursor-pointer"
        />
      </label>
    </div>
  )
}

export function FloatingMenu({ colors, setColors }) {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)

  const handleToggleModal = () => {
    setIsOpenMobileMenu((prev) => !prev)
  }

  return (
    <>
      <button
        onClick={handleToggleModal}
        className="md:hidden fixed top-4 right-4 bg-white shadow-lg rounded p-4"
        style={{ backgroundColor: colors.cell, color: colors.background }}
      >
        <Menu />
      </button>
      {isOpenMobileMenu ? (
        <div
          className="fixed inset-0 p-4 flex bg-white flex-col z-10"
          style={{ backgroundColor: colors.background, color: colors.cell }}
        >
          <button onClick={handleToggleModal} className="md:hidden fixed top-4 right-4">
            <X />
          </button>
          <h2 className="font-bold text-lg mb-2">🎨 Personalização</h2>
          <MenuOptions colors={colors} setColors={setColors} />
        </div>
      ) : null}
      <div
        className="hidden md:flex flex-col fixed top-4 right-4 bg-white shadow-lg rounded p-4 z-50"
        style={{ backgroundColor: colors.cell, color: colors.background }}
      >
        <h2 className="font-bold text-lg mb-2">🎨 Personalização</h2>
        <MenuOptions colors={colors} setColors={setColors} />
      </div>
    </>
  )
}
