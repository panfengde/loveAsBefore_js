//(+ 1 1)

/* (function (env) {
    global.look_variable_env("a").(
        (function (env) {
            env.look_variable_env(a)
        })(env),
        1
    )

}
)(global) */

let global = {
    a: function (a, b) { console.log(a + b) },
    number: 1,
    xx: 1
};

(function (env) {
    global.a(
        (function (env) {
            return env.xx
        })(env),
        (function (env) {
            return env.number
        })(env)
    )
}
)(global)

