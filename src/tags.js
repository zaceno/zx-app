import {h} from 'picodom'
export default str => {
    return str
    .replace(/\s/g, '')
    .split(',')
    .reduce((tags, name) => {
        tags[name] = (props, children) =>
            (typeof props === 'object' && !Array.isArray(props))
            ? h(name, props, children)
            : h(name, {}, props)
        return tags
    }, {})
}
    