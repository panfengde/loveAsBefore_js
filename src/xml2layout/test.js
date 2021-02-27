var xmlStr = `<?xml version="1.0"encoding="utf-8"?>
                <config>
                <name>potatog
                </name>
                <age>
                18
                </age>
                <sex>
                <man>
                1
                </man>
                <wman>
                0
                </wman>
                </sex>
                </config>
            `;

var jsonObj = xmlStrToJsonObj(xmlStr);
console.log(jsonObj)
function xmlStrToJsonObj(xmlStr) {
    var xmlObj = xmlStrToXmlObj(xmlStr);
    var jsonObj = {};
    if (xmlObj.childNodes.length > 0) {
        jsonObj = xmlObjToJsonObj(xmlObj.childNodes);
    }
    return jsonObj;
}

 

function xmlStrToXmlObj(xmlStr) {
    var xmlObj = {};
    if (document.all) {
        var xmlDom = new ActiveXObject("Microsoft.XMLDOM");
        xmlDom.loadXML(xmlStr);
        xmlObj = xmlDom;
    } else {
        xmlObj = new DOMParser().parseFromString(xmlStr, "text/xml");
    }
    return xmlObj;

}

function xmlObjToJsonObj(xmlNodes) {

    var obj = {};
    if (xmlNodes.length == 0) {
        obj = '';
    } else {
        for (var i = 0; i < xmlNodes.length; i++) {
            var node = xmlNodes[i];
            if (typeof node.tagName == "undefined" || node.nodeName == "#text") {
                obj = node.nodeValue;
            } else {
                var key = node.tagName;
                var value = xmlObjToJsonObj(node.childNodes)
                obj[key] = value;
            }
        }

    }
    return obj;
}