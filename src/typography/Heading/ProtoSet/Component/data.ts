import { Div } from 'HTML'
import type { LevelType, Props } from './types'

export const mimicryAs: <T>(
  level: Props['level']
) => (as: T) => Pick<Props, 'level' | 'OVERRIDE_TAG_SEMANTICS'> = () => {
  switch (as) {
    case 'h1': {
      return {
        level: 1,
        OVERRIDE_TAG_SEMANTICS: false,
      }
    }

    case 'h2': {
      return {
        level: 2,
        OVERRIDE_TAG_SEMANTICS: false,
      }
    }

    case 'h3': {
      return {
        level: 3,
        OVERRIDE_TAG_SEMANTICS: false,
      }
    }

    case 'h4': {
      return {
        level: 4,
        OVERRIDE_TAG_SEMANTICS: false,
      }
    }

    case 'h5': {
      return {
        level: 5,
        OVERRIDE_TAG_SEMANTICS: false,
      }
    }

    case 'h6': {
      return {
        level: 6,
        OVERRIDE_TAG_SEMANTICS: false,
      }
    }

    case [Div.Tag]: {
      return {
        level,
        OVERRIDE_TAG_SEMANTICS: true,
      }
    }
  }
}

export const headers: Record<LevelType, string> = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
}
