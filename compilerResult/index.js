(function (env) {
          return "ok";
        })(global_env);(function (env) {
          return "ok";
        })(global_env);(function (env) {
          return "ok";
        })(global_env);(function (env) {
          return "ok";
        })(global_env);(function (env) {
          return "ok";
        })(global_env);(function (env) {
          return "ok";
        })(global_env);(function (env) {
          return "ok";
        })(global_env);(function (env) {
          return "ok";
        })(global_env);(function (env) {
          return "ok";
        })(global_env);(analyze.parseLambdaDefine("fib",analyze.parseLambda(function(env){
                    let macro=analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("="),[analyze.parseVariable("n"),analyze.parseNumber(0)]),analyze.parseNumber(0),function(env){
                    let macro=analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("="),[analyze.parseVariable("n"),analyze.parseNumber(1)]),analyze.parseNumber(1),function(env){
                    let macro=analyze.parseIf(analyze.parseBboolean(true),analyze.parseOperandsApp(analyze.parseVariable("+"),[analyze.parseOperandsApp(analyze.parseVariable("fib"),[analyze.parseOperandsApp(analyze.parseVariable("-"),[analyze.parseVariable("n"),analyze.parseNumber(1)])]),analyze.parseOperandsApp(analyze.parseVariable("fib"),[analyze.parseOperandsApp(analyze.parseVariable("-"),[analyze.parseVariable("n"),analyze.parseNumber(2)])])]),analyze.parseBboolean(false));
                    return macro(env)});
                    return macro(env)});
                    return macro(env)},["n"])))(global_env);(analyze.parseOperandsApp(analyze.parseVariable("fib"),[analyze.parseNumber(100)]))(global_env);