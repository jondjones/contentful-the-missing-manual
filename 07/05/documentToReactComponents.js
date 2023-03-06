
import { documentToReactComponents } from '@contentful/rich-text-react- renderer';

const contentfulResponse = {
nodeType: 'document',
data: {},
content: [{
    nodeType: 'paragraph',
    data: {},
    content: [{
        nodeType: 'text',
        value: 'Some text',
        marks: [],
        data: {},
    }]
}]};

documentToReactComponents(contentfulResponse);