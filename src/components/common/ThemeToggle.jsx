
import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button onClick={toggle}
      className="relative w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-700">
      <span
        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform
          ${theme === 'dark' ? 'translate-x-6' : ''}`}
      />
    </button>
  )
}
