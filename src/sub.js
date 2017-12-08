import {h, patch} from 'picodom'
import state from './state'
export default fn => props => {
    const x = {}
    x.oncreate = el => {
        var node
        const view = state($ => {
            $.set(props)
            el.$ = $
            return fn($)
        }, _ => patch(node, (node = view()), el))
    }
    x.onupdate = el => el.$.set(props)
    if (props && props.key) x.key = props.key
    return h('x-', x)    
}