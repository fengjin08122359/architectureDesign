
import { ModuleInstance } from '@mikefeng110808/ui-module'
import { restoreInstance } from './save'
import { storage } from './storage'

export let compilerInstance: ModuleInstance = new ModuleInstance()


var res = storage.get('saveedit')
if (res) {
  restoreInstance(compilerInstance, res)
}
