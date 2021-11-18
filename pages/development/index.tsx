import background from './assets/background.jpg'
import { Image } from '../../src/image'
import { BackgroundImage, Cover, Frame, UnorderedList } from '../../src/layout'
import {
  H1,
  H2,
  Paragraph,
  TextBlock,
  Important,
  TextInline,
  Space,
  NonBreakable,
  Time,
} from '../../src/typography'

const Page = () => (
  <>
    <Cover color="white" image={background.src}>
      <H1 charsPerLine="medium">
        Металлоторговые компании ищут новые пути развития
      </H1>
    </Cover>

    <Frame charsPerLine="large">
      <Paragraph fontSize="large">
        <Time>28 октября</Time> в Челябинске прошел круглый стол на тему
        "Электронная коммерция на рынке металлов", организатором которого
        выступил бизнес-клуб РСПМ-Урал. Участие в нем приняли порядка 40
        человек. Открыл работу круглого стола А.
        <NonBreakable />
        Романов, президент РСПМ, который рассказал о текущей ситуации на рынке
        металлов РФ и мира, отметив важные тенденции, которые сегодня влияют на
        стоимость металлопроката и на динамику ее изменения.
      </Paragraph>

      <TextBlock>
        Д.
        <NonBreakable />
        Харламов, директор компании "Труба на складе.ру", продолжил выступления
        описанием тех трендов, оказывающих влияние на бизнес, в том числе и на
        металлоторговый. В.
        <NonBreakable />
        Сунагатуллин, руководитель проекта E-metall, представил видение того,
        как развивается электронная коммерция на рынке металлов России сегодня,
        а А.
        <NonBreakable />
        Иосса, руководитель проекта Река.Маркет, рассказал о том, как она
        развивается в мире. Р.
        <NonBreakable />
        Волков, генеральный директор MetalScaner, осветил результаты
        исследования стоимости привлечения клиентов на рынке металлов в
        настоящее время.
      </TextBlock>

      <Image src={background.src} width={549} height={412} />

      <TextBlock>В режиме дискуссии также выступили:</TextBlock>

      <UnorderedList>
        <TextInline>
          генеральный директор Металлбаза{' '}
          <Important>
            В.
            <NonBreakable />
            Лабунский
          </Important>
          ,
        </TextInline>

        <TextInline>
          Р.Кузьмин генеральный директор Первой металлоснабжающей компании
          <Space />
          <Important>
            Ж.
            <NonBreakable />
            Пец,
          </Important>
        </TextInline>

        <TextInline>
          начальник информационно-аналитического управления ТМК
          <Space />
          <Important>
            А.
            <NonBreakable />
            Спицын.
          </Important>
        </TextInline>
      </UnorderedList>

      <Paragraph>
        Затем участники круглого стола посетили с экскурсией
        производственно-складскую площадку Металлобазы, а также склад и
        производственный цех электросварных труб Сталепромышленной компании. По
        окончанию деловой части мероприятия его участники побывали с экскурсией
        в Историческом музее Южного Урала, а затем посоревновались в турнире по
        дартсу на призы компании E-metall.
      </Paragraph>
    </Frame>
  </>
)

export default Page
