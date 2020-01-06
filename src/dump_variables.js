function() {
    var x, d, i, v, st;
    x = open();
    d = x.document;
    d.open();

    function hE(s) {
        s = s.replace(/&/g, "&amp;");
        s = s.replace(/>/g, "&gt;");
        s = s.replace(/</g, "&lt;");
        return s;
    }
    d.write("<style>td{vertical-align:top; white-space:pre; } table,td,th { border: 1px solid #ccc; } div.er { color:red }</style><table border=1><thead><tr><th>Variable</th><th>Type</th><th>Value as string</th></tr></thead>");
    for (i in window) {
        if (!(i in x)) {
            v = window[i];
            d.write("<tr><td>" + hE(i) + "</td><td>" + hE(typeof(window[i])) + "</td><td>");
            if (v === null) d.write("null");
            else if (v === undefined) d.write("undefined");
            else try {
                st = v.toString();
                if (st.length) d.write(hE(v.toString()));
                else d.write("%C2%A0")
            } catch (er) {
                d.write("<div class=er>" + hE(er.toString()) + "</div>")
            };
            d.write("</pre></td></tr>");
        }
    }
    d.write("</table>");
    d.close();
}
