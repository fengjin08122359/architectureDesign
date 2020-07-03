export { SelfProp } from './UI'
export {
  Position,
  PositionPayload,
} from './Position'
export {
  Style
} from './Style'
export {
  EventBind
} from './EventBind'
export {
  ContainerUI,
  ContainerUIPayload,
} from './ContainerUI'
export {
  ComponentSingleUI,
  ComponentSingleUIPayload,
  ComponentMultipleUI,
  ComponentMultipleUIPayload
} from './ComponentUI'

export let gennerateUUID = () => {
  return new Date().getTime().toString()
}

