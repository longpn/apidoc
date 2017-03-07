define({
  "name": "apidoc-dating",
  "version": "0.3.0",
  "description": "apidoc dating project",
  "title": "apiDoc dating",
  "url": "http://localhost:9011/api",
  "sampleUrl": "http://localhost:9011/api",
  "header": {
    "title": "Dating project header",
    "content": "<h2><span id=\"api-example-for-a-submenu-entry\">How to use api</span></h2>\n<p>Custom header for each request to server.</p>\n<p>Accept-version: client side send version api for each request to server</p>\n<p>Ex: accept-version: '0.2.0'</p>\n<p>Authentication: client side use their shared key that provided from server to hash access token for each request to server</p>\n<p>Ex: x-access-token: token value</p>\n<p>Response format: Json is default format for all response from server</p>\n<pre><code>{\n  &quot;error&quot;: true/false,\n  &quot;message&quot;: &quot;fail / success&quot;,\n  &quot;data&quot;: [{\n      &quot;username&quot; : &quot;long&quot;,\n      &quot;email&quot; : &quot;longpn2008@gmail.com&quot;\n    }]\n}\n</code></pre>\n"
  },
  "footer": {
    "title": "Dating project footer",
    "content": "<h1></h1>\n"
  },
  "template": {
    "withCompare": true,
    "withGenerator": true
  },
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2017-03-07T06:37:24.797Z",
    "url": "http://apidocjs.com",
    "version": "0.17.5"
  }
});
