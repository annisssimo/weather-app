function loadXMLDoc(dname) {
    var xmlDoc;
    try { // Internet Explorer
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    } catch (e) {
        try { // Firefox, Mozilla, Opera, etc.
            xmlDoc = document.implementation.createDocument("", "", null);
        } catch (e) {
            alert(e.message);
            return null;
        }
    }

    try {
        xmlDoc.async = false;

        if (window.ActiveXObject) {
            xmlDoc.load(dname); // For IE
        } else if (window.XMLHttpRequest) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", dname, false);
            xhr.send(null);
            xmlDoc = xhr.responseXML;
        } else {
            alert("Your browser does not support loading XML documents.");
            return null;
        }

        return xmlDoc;
    } catch (e) {
        alert(e.message);
        return null;
    }
}