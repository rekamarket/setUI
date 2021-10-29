import { BackgroundImage, Cover, Frame, UnorderedList } from 'layout'
import { H1, H2, Paragraph, TextBlock, Important } from 'typography'

const IndexPage = () => (
  <>
    <Cover
      color="white"
      image="https://www.mckinsey.com/~/media/mckinsey/industries/metals%20and%20mining/our%20insights/the%20dri%20dilemma%20could%20raw%20material%20shortages%20hinder%20the%20steel%20industrys%20green%20transition/the-dri-dilemma-1536x1536.jpg?mw=677&car=8:5"
    >
      <H1>
        B2B маркетплейсы: сценарии развития, убьют ли маркетплейсы бизнес
        трейдеров?
      </H1>
    </Cover>

    <Frame charsPerLine="large">
      <H2>Цифровые технологии и аналитика</H2>

      <Paragraph>
        Металлургические компании смогли достичь успеха благодаря масштабному
        внедрению цифровых технологий и аналитики в свою сферу деятельности.
      </Paragraph>

      <TextBlock>
        За последние несколько лет многие игроки рынка уже активно используют
        цифровые и аналитические программы, но большой потенциал все еще
        остается неиспользованным.
      </TextBlock>

      <Paragraph>
        Статистические данные отмечают беспрецедентный эффект применения
        цифровых технологий и аналитики в металлургии, которого невозможно было
        достичь с помощью традиционных подходов. На примере Китая, можно
        рассмотреть, как металлургическая компания Shougang Group Co., Ltd. и
        брокерская фирма Zhongtai Securities объединились для запуска онлайн
        площадки Zhaogang.
      </Paragraph>

      <TextBlock>
        {' '}
        На данным момент она является лидером онлайн отрасли:{' '}
      </TextBlock>

      <UnorderedList>
        <Important>
          100 производителей продукции из стали, а также свыше 970 компаний
          транспорта,
        </Important>
        <Important>свыше 4000 металлотрейдеров,</Important>
        <Important>более 190 поставщиков услуг склада и переработки,</Important>
        <Important> 20 млн тонн стали составил её годовой оборот.</Important>
      </UnorderedList>

      <Frame.FullBleed>
        <BackgroundImage image="https://www.mckinsey.com/~/media/mckinsey/industries/metals%20and%20mining/our%20insights/pressure%20to%20decarbonize%20drivers%20of%20mine%20side%20emissions/pressure-to-decarbonize-1536x1536.jpg?mw=592&car=8:5" />
      </Frame.FullBleed>

      <H2>Методы цифровой трансформации</H2>

      <Paragraph>
        По нашему мнению, компании, которые успешно используют потенциал
        цифровых решений, первыми смогут добиться резкого увеличения доходов от
        продаж. Для максимально положительного эффекта, цифровая трансформация
        должна учитывать три ключевые области: бизнес, организацию и технологии.
      </Paragraph>

      <Paragraph>
        Исследование показывает, что существует несколько основных факторов
        успеха для масштабирования цифровых и аналитических программ. Они
        устанавливают цели и стратегии, инвестируют, создают гибкую архитектуру
        данных и технологий, формируют наборы навыков и создают правильное
        управление статистикой и аналитикой.
      </Paragraph>
    </Frame>
  </>
)

export default IndexPage
