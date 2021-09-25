const layout = require('../layout');
const { getError } = require('../../helpers')

module.exports = ({ req, errors }) => {
    return layout({content: `
        <div>
            <form method="POST">
                <input name="email" placeholder="email" type="text">
                ${getError(errors, 'email')}
                <input name="password" placeholder="password" type="text">
                ${getError(errors, 'password')}
                <input name="passwordConfirmation" placeholder="password confirmation" type="text">
                ${getError(errors, 'passwordConfirmation')}
                <button>Sign up</button>
            </form>
        </div>
    `
    });
};

