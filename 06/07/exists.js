const url = `GET/spaces/{SPACE_ID}/environments/{ENVIRONMENT_ID}/entries?`
const contentTypeFilter = `content_type={MY_CONTENT_TYPE}&{MY_ATTRIBUTE}[exists]={MY_VALUE}`

// content_type=blog&fields.myField[exists]=true

// This matches if `blog` contains a field called `myfield` that has a value