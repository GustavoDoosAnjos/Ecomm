const layout = require('../layout')
const { getError } = require('../../helpers')

module.exports = ({ errors }) => {
    return layout({ content: `
        <div>
            <form method="POST">
                <input name="email" placeholder="email" type="text">
                ${getError(errors, 'email')}
                <input name="password" placeholder="password" type="text">
                ${getError(errors, 'password')}
                <button>Sign in</button>
            </form>
        </div>
`
    });
};