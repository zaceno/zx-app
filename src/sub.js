import {h, patch} from 'picodom'
import state from './state'
export default fn => (...args) => {
    const props = {}
    props.oncreate = el => {
        var node
        el._zx = {}
        el._zx.upd = _ => patch(node, (node = el._zx.bvf()), el)
        el._zx.vfn = state(fn, el._zx.upd)
        el._zx.bvf = _ => el._zx.vfn(...args)
    }
    props.onupdate = el => {
        el._zx.bvf = _ => el._zx.vfn(...args)
        el._zx.upd()
    }
    if (args[0] && args[0].key) props.key = args[0].key
    return h('x-', props)    
}