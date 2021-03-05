let domJson = [
    {
        tag: "div",
        child: [
            {
                tag: "div",
                child: [
                    {
                        tag: "txt",
                        content: "hello lab111111111"
                    }
                ]
            },
            {
                tag: "div",
                child: [
                    {
                        tag: "txt",
                        content: "hello lab222222222"
                    }
                ]
            },
            {
                tag: "div",
                child: [
                    {
                        tag: "txt",
                        content: "hello lab3333333333"
                    }
                ]
            },
            {
                tag: "div",
                child: [
                    {
                        tag: "txt",
                        content: "hello lab4444444444"
                    }
                ]
            },

        ]
    }
]
null


function parseEleInfoTree(eleLists, father) {
    let result;
    let temp;
    let _thisOne
    for (let i = 0, length = eleLists.length; i < length; i++) {
        switch (element.tag) {
            case "div":
                _thisOne = new BlockLevel()
                
                _thisOne.father = father
                _thisOne.child = parseEleInfoTree(element.child, temp_balck)
                break
            case "span":
                _thisOne = new lineLevel()

                _thisOne.father = father
                _thisOne.child = parseEleInfoTree(element.child, temp_line)
                break
            case "txt":
                _thisOne = new txtLevel(element.content)
                _thisOne.father = father
                break
        }

        if (i == 0) {
            result = _thisOne;
            temp = result;
        } else {
            temp.brother = _thisOne;
            _thisOne.bigBrother = temp;
        }
    }
}

