import type { NextPage } from 'next'
import Head from 'next/head'
import { Frame } from '../src/layout'
import { H1, H2, Paragraph, Time } from 'typography';

import classes from './index.module.css';

const list = [
  {
    key: 'b2bmarketplace',
    title: 'B2B маркетплейсы: сценарии развития, убьют ли маркетплейсы бизнес трейдеров?',
    description: 'Металлургические компании смогли достичь успеха благодаря масштабному внедрению цифровых технологий и аналитики в свою сферу деятельности',
    date: '01.10.2021',
    link: '/b2bmarketplace',
  },
  {
    key: 'development',
    title: 'Изменение строительных требований',
    description: 'С 1 сентября 2021 года количество обязательных требований в сфере строительстве сократилось более чем на 50% (на 3,8 тыс. пунктов)',
    date: '27.09.2021',
    link: '/development',
  },
  {
    key: 'marketplacezametallom',
    title: 'Как меняются цены на рынке металлопроката',
    description: 'Состояние рынка стали является побочным продуктом ряда внутренних и международных событий. Это проблема не только России, с ней сталкивается каждый бизнес и каждый потребитель во всём мире',
    date: '27.09.2021',
    link: '/marketplacezametallom',
  },
];

const IndexPage: NextPage = () => (
  <Frame charsPerLine="large">
    <H1 textAlign="center">Свежие статьи</H1>

    <ul className={classes.list}>
      {list.map(e => (
        <li key={e.key} className={classes.item}>
          <article className={classes.article}>
            <H2 className={classes.title}><a href={e.link} className={classes.link}>{e.title}</a></H2>
            <Paragraph className={classes.description}>{e.description}</Paragraph>
            <Time className={classes.date}>{e.date}</Time>
          </article>
        </li>
      ))}
    </ul>
  </Frame>
)

export default IndexPage
