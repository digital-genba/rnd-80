import Html from 'slate-html-serializer';
import JSDOM from 'jsdom';

const rules = [
  {
    deserialize(el, next) {
      if (el.tagName.toLowerCas() == 'p') {
        return {
          object: 'block',
          type: 'paragraph',
          data: {
            className: el.getAttribute('class'),
          },
          nodes: next(el.childNodes),
        }
      }
    },
    serialize(obj, children) {
      if (obj.object == 'block' && obj.type == 'paragraph') {
        return <p className={obj.data.get('className')}>{children}</p>
      }
    },
  },
]

const html = new Html({
  rules,
  parseHtml: JSDOM.fragment(),
});

export default html;
