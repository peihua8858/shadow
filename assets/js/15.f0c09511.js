(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{169:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("By default, JAR files generated by Gradle (with or without Shadow) for a single project with the same source code may not be identical to each other. Sometimes it's desireable to configure a project to consistently output a byte-for-byte identical JAR on every build. Gradle supports this with the following configuration, and Shadow will correctly respect these settings too:")]),t._v(" "),t._m(1),s("p",[t._v("One effect that this configuration will have is that the timestamps of all files in the JAR will be reset to a single consistent value. If your code or any files being included into the JAR depend on the timestamps being set accurately within the JAR, then this may not be the correct choice for you.")]),t._v(" "),s("p",[t._v("See the "),s("a",{attrs:{href:"https://docs.gradle.org/4.9/userguide/working_with_files.html#sec:reproducible_archives",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reproducible archives section in Gradle's documentation"),s("OutboundLink")],1),t._v(" for more information.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"reproducible-builds"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reproducible-builds","aria-hidden":"true"}},[this._v("#")]),this._v(" Reproducible Builds")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-groovy extra-class"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("tasks"),s("span",{attrs:{class:"token operator"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("withType")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AbstractArchiveTask"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    preserveFileTimestamps "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    reproducibleFileOrder "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="README.md";e.default=n.exports}}]);