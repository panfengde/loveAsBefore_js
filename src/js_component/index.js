import { the_null } from './aotom_constant/index.js';
import cons from './cons/index.js';
import list from './list/index.js';
import json from './json/index.js';
import frame from './frame/index.js';
import parse_txt from './parse_txt/index.js';
import Parse from './parse_exp/index.js';
import global_env from './inital_env/index.js';
import run_eval from './run_eval/index.js';

function loveAsBefore() {

    let code1123 = `

    (if 5 (+ 1 1) (+ 100 100))
    ( begin ( + 5 5 ) ( + 6 6 ) ( + 7 7 ) ( + 8 8 )  )

    (define-syntax when
        (syntax-rules ()
          ((_ pred b1 ...)
           (if pred (begin b1 ...)))
           )
    )

    (when 5 (+ 5 5) (+ 6 6)  (+ 7 7)  (+ 8 8))


    (define-syntax when
        (syntax-rules ()
          ((_ pred b1 ...)
           (if pred (begin b1 ...)))
           )
    )

    (define-syntax cond
        (syntax-rules ()
            ((_ (else e1 ...))
            (begin e1 ...))
            ((_ (e1 e2 ...))
            (when e1 e2 ...))
            ((_ (e1 e2 ...) c1 ...)
            (if e1
            (begin e2 ...)
            (cond c1 ...)))))

            (define a 10)

    `
    let code = `
    (define-syntax let*
        (syntax-rules ()
          ((_ ((p v)) b ...)
           (let ((p v)) b ...))
          ((_ ((p1 v1) (p2 v2) ...) b ...)
           (let ((p1 v1))
             (let* ((p2 v2) ...)
              b ...)))))

             

(let* 
(
    (a 1)
    (b a)    
)
(+ a 1)
(+ a b)
)
    `

    let codex = `
    (define-syntax let*
        (syntax-rules ()
          ((_ ((p v)) b ...)
           (let ((p v)) b ...))
          ((_ ((p1 v1) (p2 v2) ...) b ...)
           (let ((p1 v1))
             (let* ((p2 v2) ...)
              b ...)))))

(let* 
    (
        (a 10)
        (b (+ a 10))
    )
    (cond
        ((= b 10) (display "b"))
        ((= a 10) (display "a"))
    )
)
    `
    let code2 = `
    // (+ 1 1)
     (define a 10)
    // a
     (+ a 5)
    // (if 5
    //     (+ 1 20)
    //     (+ 2 2)
    //     )

    (define (go x) (+ x 10))
    (go 15)

    
    `

    let hello = new list(1);
    // console.log(hello);
    // console.log(hello.push(1))
    // console.log(hello.push(new list(1444)))
    //console.log(parse_txt(code))
    parse_txt(code).forEach((code) => {
        //console.log(Parse.strExp_to_List(code).cdr.car.show)
        //console.log(Parse.strExp_to_List(code).show)
        //run_eval(Parse.strExp_to_List(code), global_env)
        //console.log(global_env)
        console.log(run_eval(Parse.strExp_to_List(code), global_env))
    }
    )
}



export {
    loveAsBefore
}