import { ToggleDark } from './components/header'

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <ToggleDark />
      {props.children}
    </>
  )
}
