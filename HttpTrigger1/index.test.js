const httpFunction= require('./index');
const context = require ('../testing/Context');

test('Http trigger example', async() => {
const request={
    query:{name: 'schuc'}
    }

await httpFunction(context,request);
expect(context.res.body).toContain('example');
expect(context.res.body).toEqual('Welcome, schuc example');
expect(context.log.mock.calls.length).toBe(1);
});