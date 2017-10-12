# node-dataurify-html
Simple CLI utility toto wrap a URI in a simple HTML link

# Simple example
Output a link in HTML:

    npm install -g linkwrap-uri
    echo 'https://google.com' | linkwrap-uri

The default text in the link is "Copy my link!".

# Sample HTML and configuring the link text
Any parameters passed to linkwrap-uri will be inserted as the text of the link.

    echo 'https://google.com' | linkwrap-uri Long click the link to copy it!

Will result in a HTML like:

    <html><body><a href="https://google.com">Long click the link to copy it!</a></body></html>

# Example with inlined assets within a dataURI
[Remy Sharp](https://github.com/remy) has made a wonderful tool called [inliner](https://github.com/remy/inliner) which can be very helpful when bundling your application into a single file. There is also a simple tool called [dataurify-html](https://github.com/amv/node-dataurify-html) to bundle that file as a data URI which can subsequently be distributed within a HTML link wrapper:

    npm install -g dataurify-html linkwrap-uri inliner
    inliner 'https://remysharp.com' | dataurify-html | linkwrap-uri > link-installer.html

The link-installer.html file can then be shipped either as an email attachment or any other way you usually send html files.
