import createNewsletterSchema from '../schema'

import Container from './Container'
import Center from './Center'
import StyledFigure from './Figure'
import {
  Figure,
  FigureImage,
  FigureCaption,
  FigureByline
} from '../../../components/Figure'

const createSchema = ({ ...args } = {}) => {
  return createNewsletterSchema({
    Container,
    Cover: Figure,
    CoverImage: FigureImage,
    Center,
    Figure: StyledFigure,
    Image: FigureImage,
    Caption: FigureCaption,
    Byline: FigureByline,
    ...args
  })
}

export default createSchema