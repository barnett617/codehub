function type(x) {
    return Object.prototype.toString.call(x).slice(8, -1).toLowerCase();
}

function test() {
    const testcase = [
        {
            name: 'Primitive Types',
            types: ['hello', 12, true, undefined, null]
        },
        {
            name: 'New Primitive Types',
            types: [Symbol("ID"), 11n]
        },
        {
            name: 'Reference Types',
            types: [{name: 'Wilson'}, [1,2,3], function(){ console.log("Hello") }]
        },
        {
            name: 'Special Types',
            types: [new Date(), new RegExp(), /^a$/, new Error('exception')]
        },
        {
            name: 'Data Structure Types',
            types: [new Map(), new Set(), new WeakMap(), new WeakSet(), new ArrayBuffer()]
        },
        {
            name: 'Arguments Type',
            types: [arguments]
        }
    ]
    testcase.forEach(group => {
        console.log(group.name);
        const curGroup = [];
        group.types.forEach(input => {
            curGroup.push({
                origin: String(input),
                type: type(input)
            });
        })
        console.table(curGroup);
    })
}
test();

// Primitive Types
// ┌─────────┬─────────────┬─────────────┐
// │ (index) │   origin    │    type     │
// ├─────────┼─────────────┼─────────────┤
// │    0    │   'hello'   │  'string'   │
// │    1    │    '12'     │  'number'   │
// │    2    │   'true'    │  'boolean'  │
// │    3    │ 'undefined' │ 'undefined' │
// │    4    │   'null'    │   'null'    │
// └─────────┴─────────────┴─────────────┘
// New Primitive Types
// ┌─────────┬──────────────┬──────────┐
// │ (index) │    origin    │   type   │
// ├─────────┼──────────────┼──────────┤
// │    0    │ 'Symbol(ID)' │ 'symbol' │
// │    1    │     '11'     │ 'bigint' │
// └─────────┴──────────────┴──────────┘
// Reference Types
// ┌─────────┬──────────────────────────────────────┬────────────┐
// │ (index) │                origin                │    type    │
// ├─────────┼──────────────────────────────────────┼────────────┤
// │    0    │          '[object Object]'           │  'object'  │
// │    1    │               '1,2,3'                │  'array'   │
// │    2    │ 'function(){ console.log("Hello") }' │ 'function' │
// └─────────┴──────────────────────────────────────┴────────────┘
// Special Types
// ┌─────────┬───────────────────────────────────────────────────────────┬──────────┐
// │ (index) │                          origin                           │   type   │
// ├─────────┼───────────────────────────────────────────────────────────┼──────────┤
// │    0    │ 'Mon Mar 28 2022 11:26:47 GMT+0800 (China Standard Time)' │  'date'  │
// │    1    │                         '/(?:)/'                          │ 'regexp' │
// │    2    │                          '/^a$/'                          │ 'regexp' │
// │    3    │                    'Error: exception'                     │ 'error'  │
// └─────────┴───────────────────────────────────────────────────────────┴──────────┘
// Data Structure Types
// ┌─────────┬────────────────────────┬───────────────┐
// │ (index) │         origin         │     type      │
// ├─────────┼────────────────────────┼───────────────┤
// │    0    │     '[object Map]'     │     'map'     │
// │    1    │     '[object Set]'     │     'set'     │
// │    2    │   '[object WeakMap]'   │   'weakmap'   │
// │    3    │   '[object WeakSet]'   │   'weakset'   │
// │    4    │ '[object ArrayBuffer]' │ 'arraybuffer' │
// └─────────┴────────────────────────┴───────────────┘
// Arguments Type
// ┌─────────┬──────────────────────┬─────────────┐
// │ (index) │        origin        │    type     │
// ├─────────┼──────────────────────┼─────────────┤
// │    0    │ '[object Arguments]' │ 'arguments' │
// └─────────┴──────────────────────┴─────────────┘