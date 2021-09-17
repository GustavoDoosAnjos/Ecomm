const layout = require('../layout')

module.exports = () => {
    return layout({ content: `
        <div>
            <form method="POST">
                <input name="email" placeholder="email" type="text">
                <input name="password" placeholder="password" type="text">
                <button>Sign in</button>
            </form>
        </div>
`
    });
};