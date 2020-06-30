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
  ContainerUI
} from './ContainerUI'
export {
  ComponentSingleUI,
  ComponentMultipleUI,
  SelfProp
} from './ComponentUI'

export let gennerateUUID = () => {
  return new Date().getTime().toString()
}

