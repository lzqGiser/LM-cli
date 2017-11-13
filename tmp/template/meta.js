/**
 * Created by lzq on 2017/11/7.
 */
module.exports = {
    questions:[
        {
            type: 'input',
            name: 'projectName',
            message: 'input your project name: ',
            default: 'myProject'
        },
        {
            type: 'confirm',
            name: 'confirm',
            message: 'is ESlint need?'
        },
        {
            type: 'list',
            name: 'choice',
            message: 'select one ',
            choices: [
                {
                    name: 'selectA',
                    value: "A",
                    short: 'a'
                },
                {
                    name: 'selectB',
                    value: 'B',
                    short: 'b'
                }
            ]
        }
    ]
}