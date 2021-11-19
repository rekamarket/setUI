import Head from 'next/head'
import { VFC, createElement } from 'react'

const defaultTitle = 'Блог компании Reka.Market'

interface Props {
  children: string
}

export const displayName = 'Title'

const Title: VFC<Props> = ({ children = defaultTitle }) => (
  <Head>
    <title>{children}</title>
  </Head>
)

Title.displayName = displayName

export default Title
