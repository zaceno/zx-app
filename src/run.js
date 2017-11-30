import {patch} from 'picodom'
import state from './state'
export default (fn, container) => {
    var node
    const view = state(fn, _ => patch(node, (node = view()), container))
}