
import { ModuleInstance } from '@mikefeng110808/ui-generator'
import { restoreInstance } from './save'
import { storage } from './storage'

export let compilerInstance: ModuleInstance = new ModuleInstance()


var res = storage.get('saveedit')
restoreInstance(compilerInstance, res)
