const layout = require('../layout')

module.exports = ({ req }) => {
    return layout({content: `
        <div>
            <form method="POST">
                <input name="email" placeholder="email" type="text">
                <input name="password" placeholder="password" type="text">
                <input name="passwordConfirmation" placeholder="password confirmation" type="text">
                <button>Sign up</button>
            </form>
        </div>
    `
    });
};

