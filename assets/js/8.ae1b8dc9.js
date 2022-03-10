(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{406:function(t,s,a){"use strict";a.r(s);var e=a(56),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tusbundle-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tusbundle-guide"}},[t._v("#")]),t._v(" TusBundle Guide")]),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("TusBundle is a Symfony Bundle wrapping "),a("a",{attrs:{href:"https://github.com/ankitpokhrel/tus-php",target:"_blank",rel:"noopener noreferrer"}},[t._v("tus-php"),a("OutboundLink")],1),t._v(". The main motivation is to\nreduce the friction and manual typing when using "),a("code",[t._v("tus-php")]),t._v(" with Symfony.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://tus.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("tus"),a("OutboundLink")],1),t._v(" is a protocol for chunkable and resumable uploads implemented by the\n"),a("a",{attrs:{href:"https://uppy.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Uppy"),a("OutboundLink")],1),t._v(" uploader.")]),t._v(" "),a("h2",{attrs:{id:"versions-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#versions-support"}},[t._v("#")]),t._v(" Versions Support")]),t._v(" "),a("p",[t._v("The Bundle currently supports Symfony "),a("strong",[t._v("4.4")]),t._v(" and "),a("strong",[t._v("5.x")]),t._v(", changes to this will be published here in and in the release\nnotes.")]),t._v(" "),a("h2",{attrs:{id:"installation-and-quickstart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-and-quickstart"}},[t._v("#")]),t._v(" Installation and Quickstart")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" require efrane/tus-bundle\n")])])]),a("h3",{attrs:{id:"if-you-do-not-have-symfony-flex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if-you-do-not-have-symfony-flex"}},[t._v("#")]),t._v(" If you do not have Symfony Flex:")]),t._v(" "),a("p",[t._v("Enable the bundle in your "),a("code",[t._v("bundles.php")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[t._v("EFrane"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("TusBundle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Bundle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("TusBundle")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'all'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("This bundles contains route definitions, to load them, simply add")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tus_bundle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tus_bundle\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("resource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" .\n")])])]),a("p",[t._v("to your "),a("code",[t._v("routes.yaml")]),t._v(".")]),t._v(" "),a("p",[t._v("If you need to make adjustments to the "),a("a",{attrs:{href:"#default-configuration"}},[t._v("default configuration")]),t._v(", you can run")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("php bin/console config:dump TusBundle\n")])])]),a("p",[t._v("to dump the default configuration. Copy and paste or redirect the output into a configuration file\nat "),a("code",[t._v("config/packages/tus.yaml")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"default-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-configuration"}},[t._v("#")]),t._v(" Default Configuration")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Default Value")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("upload_dir")]),t._v(" "),a("td",[a("code",[t._v("%kernel.project_dir%/public/uploads")])]),t._v(" "),a("td",[t._v("Storage directory for finished uploads")])]),t._v(" "),a("tr",[a("td",[t._v("api_path")]),t._v(" "),a("td",[a("code",[t._v("/_tus/upload")])]),t._v(" "),a("td",[t._v("Routing path to direct tus clients to")])]),t._v(" "),a("tr",[a("td",[t._v("cache_ttl")]),t._v(" "),a("td",[t._v("300")]),t._v(" "),a("td",[t._v("Seconds until a cache entry gets invalidated")])])])]),t._v(" "),a("h2",{attrs:{id:"caching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#caching"}},[t._v("#")]),t._v(" Caching")]),t._v(" "),a("p",[t._v("You "),a("strong",[t._v("MUST")]),t._v(" configure a caching provider. It is recommended, to use the "),a("code",[t._v("native")]),t._v(" cache which will use whatever cache\nprovider you configured in your Symfony application.")]),t._v(" "),a("p",[t._v("Tus uses the cache to store")]),t._v(" "),a("h3",{attrs:{id:"available-caching-providers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-caching-providers"}},[t._v("#")]),t._v(" Available Caching Providers")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("apcu")])])]),t._v(" "),a("p",[t._v("You can use APCu as cache:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache_type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apcu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),a("p",[a("strong",[a("code",[t._v("file")])])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("file")]),t._v(" cache writes caching information to the server-local filesystem. To configure it, you need to set:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache_type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),a("p",[t._v("Additional available options for the "),a("code",[t._v("file")]),t._v(" cache type:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Default Value")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("dir")])]),t._v(" "),a("td",[a("code",[t._v("%kernel.cache_dir%/%kernel.environment%")])]),t._v(" "),a("td",[t._v("Directory the file cache writes to")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("name")])]),t._v(" "),a("td",[a("code",[t._v("tus_php.server.cache")])]),t._v(" "),a("td",[t._v("Key for the cached files")])])])]),t._v(" "),a("p",[a("strong",[a("code",[t._v("native")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("If you're unsure about the implications, use this provider.")])]),t._v(" "),a("p",[t._v("To configure it, you need to set:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache_type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("native")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),a("p",[a("strong",[a("code",[t._v("redis")])])]),t._v(" "),a("p",[t._v("To configure Redis as caching provider, you need to at least enable it:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache_type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("redis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),a("p",[t._v("Additionally, you can configure the redis connection with these keys on the redis "),a("code",[t._v("cache_type")]),t._v(":")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Default Value")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("db")])]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("Redis DB")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("host")])]),t._v(" "),a("td",[a("code",[t._v("127.0.0.1")])]),t._v(" "),a("td",[t._v("Redis Host")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("port")])]),t._v(" "),a("td",[a("code",[t._v("6371")])]),t._v(" "),a("td",[t._v("Redis Port")])])])]),t._v(" "),a("h2",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),a("p",[t._v("The Bundle wires the default event manager of your Symfony application into "),a("code",[t._v("tus-php")]),t._v(", which means, the\n"),a("a",{attrs:{href:"https://github.com/ankitpokhrel/tus-php#events",target:"_blank",rel:"noopener noreferrer"}},[t._v("tus-php events"),a("OutboundLink")],1),t._v(" can just be listened or subscribed to.")]),t._v(" "),a("p",[t._v("An example event subscriber might look like this:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Listener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Repository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("FileRepository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Symfony"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EventDispatcher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EventSubscriberInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("TusPhp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Events"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("UploadComplete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("TusUploadEventSubscriber")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventSubscriberInterface")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @var FileRepository\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$files")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("__construct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("FileRepository")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$files")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("files")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$files")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @return array<string,string>\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("getSubscribedEvents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword return-type"}},[t._v("array")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("UploadComplete")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NAME")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'onUploadComplete'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("onUploadComplete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("UploadComplete")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$completedEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword return-type"}},[t._v("void")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("files")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("storeTusUploadedFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$completedEvent")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"middleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#middleware"}},[t._v("#")]),t._v(" Middleware")]),t._v(" "),a("p",[t._v("While "),a("code",[t._v("tus-php")]),t._v(" supports adding, skipping and removing middlewares (read: request pre-/post-processors), middleware\nsupport in this bundle is by default limited to adding middlewares. To do so, simply create a class implementing\nthe "),a("code",[t._v("TusPhp\\Middleware\\TusMiddleware")]),t._v(" interface, e.g:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Upload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Middleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Psr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("LoggerInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("TusPhp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Middleware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("TusMiddleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("TusPhp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("TusPhp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("IsRunningMiddleware")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TusMiddleware")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @var LoggerInterface\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$logger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("__construct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("LoggerInterface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$logger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("logger")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$logger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("handle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("Request")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("Response")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("logger")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Middleware is running'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"taking-full-control-of-the-server-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#taking-full-control-of-the-server-configuration"}},[t._v("#")]),t._v(" Taking full control of the server configuration")]),t._v(" "),a("p",[t._v("Since the bundle registers all of it's services into Symfonys' dependency injection container, you can easily take over\nfull control of the server configuration. To do so, you can assign a different class\nto "),a("code",[t._v("EFrane\\TusBundle\\Bridge\\ServerBridgeInterface")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Upload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("EFrane"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("TusBundle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Bridge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ServerBridge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("EFrane"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("TusBundle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Middleware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MiddlewareCollection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Psr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("LoggerInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Symfony"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EventDispatcher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EventDispatcherInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("TusPhp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Tus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("CustomServerBridge")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServerBridge")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @var LoggerInterface\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$logger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("__construct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("EventDispatcherInterface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$eventDispatcher")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("LoggerInterface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$logger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("MiddlewareCollection")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$middlewareCollection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("Server")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$server")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword static-context"}},[t._v("parent")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__construct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$eventDispatcher")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$middlewareCollection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("logger")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$logger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("getServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name return-type"}},[t._v("Server")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("logger")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Using overridden ServerBridge'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword static-context"}},[t._v("parent")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# in your services.yaml:")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("EFrane\\TusBundle\\Bridge\\ServerBridgeInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@App\\Upload\\CustomServerBridge'")]),t._v("\n")])])]),a("h2",{attrs:{id:"tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[t._v("#")]),t._v(" Tips")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Don't overwrite the "),a("code",[t._v("ServerBridge")]),t._v(" to set the maximum upload size to "),a("code",[t._v("post_max_size")]),t._v(" or any of the likes. Tus fails\nuploads if the size of a to-be-uploaded file is less than this setting. Instead, you want to configure your Tus\nClient(s) to use chunked uploading. You may pass a slightly lower value than\n"),a("code",[t._v("post_max_size")]),t._v(" to the clients as chunk size.")])]),t._v(" "),a("li",[a("p",[t._v("If uploads fail mysteriously, make sure that the destination directory (i.e. "),a("code",[t._v("upload_dir")]),t._v(") exists. Neither this bundle\nnor the "),a("code",[t._v("tus-php")]),t._v(" library do the actual work to take care of creating this directory.")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);