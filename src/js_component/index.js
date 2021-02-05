import { the_null } from './aotom_constant/index.js';
import list from './list/index.js';

function loveAsBefore() {
    let oneList = new list(
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5,
    )
    console.log(oneList)
    console.log(oneList.getClone())
    console.log(oneList.map((x) => x * 2))
    console.log(oneList.forEach((x) => x + 1))
    console.log(oneList.length())
    let twoList = new list(
        new list(
            "x", 2, 3, 4, 5,6,
            "x", 2, 3, 4, 5,6,
            "x", 2, 3, 4, 5,6,
        ),
        new list(
            1, 2, 3, 4, 5,6,
            1, 2, 3, 4, 5,6,
            1, 2, 3, 4, 5,6,
        ),
        3,
        new list(
            1, 2, 3, 4, 5
        ),
        5
    )
    console.log(twoList)
    console.log(twoList.show)
}

export {
    loveAsBefore
}