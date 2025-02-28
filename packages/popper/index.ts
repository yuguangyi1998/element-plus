import type { App } from 'vue'
import Popper from './src/index.vue'

Popper.install = (app: App): void => {
  app.component(Popper.name, Popper)
}

export default Popper

export { default as defaultProps, Effect, Placement, Options } from './src/use-popper/defaults'
export type { TriggerType, IPopperOptions, PopperInstance } from './src/use-popper/defaults'
export { default as usePopper } from './src/use-popper/index'
export * from './src/renderers/index'
