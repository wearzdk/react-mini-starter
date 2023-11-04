import { useDarkMode } from '@reactuses/core'

export function ToggleDark() {
  const [darkTheme, toggleDark] = useDarkMode({
    classNameDark: 'dark',
    classNameLight: 'light',
    defaultValue: true,
  })
  return (
    <div className="absolute right-0 top-0 mt-5 mr-5">
      <button
        className="inline-flex items-center btn-base p-1 hover:bg-fill2"
        onClick={toggleDark}
      >
        { darkTheme
          ? (
            <span className="i-mdi-weather-night" />
            )
          : (
            <span className=" i-mdi-weather-sunny" />
            )}
      </button>
    </div>
  )
}
