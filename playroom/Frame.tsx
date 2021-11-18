import { useEffect } from 'react'

const useStylesheet = (url: string) => {
  useEffect(() => {
    const link = document.createElement('link')
    link.href = url
    link.rel = 'stylesheet'
    const head = document.getElementsByTagName('head')[0]
    head.appendChild(link)

    return () => {
      head.removeChild(link)
    }
  }, [url])
}

export default function PlayroomFrame(props: { children: React.ReactNode }) {
  useStylesheet(
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
  )

  return <>{props.children}</>
}
