import type { Props, Semantics, LevelType, SemanticCore } from './types'

export const mimicryAs: <T extends Semantics>(
  level: LevelType
) => (tag: T) => Pick<Props, 'level' | 'tag'> = (level) => (tag) => {
  switch (tag) {
    case 'h1': {
      return {
        level: 1,
      }
    }

    case 'h2': {
      return {
        level: 2,
      }
    }

    case 'h3': {
      return {
        level: 3,
      }
    }

    case 'h4': {
      return {
        level: 4,
      }
    }

    case 'h5': {
      return {
        level: 5,
      }
    }

    case 'h6': {
      return {
        level: 6,
      }
    }

    case 'div':
    case 'span': {
      return {
        level,
        tag,
      }
    }
  }
}

const tags: Record<LevelType, SemanticCore> = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
}

export const getTagByLevel: (level: LevelType) => SemanticCore = (level) =>
  tags[level]
