[![OPEN open source software](https://img.shields.io/badge/Open--OSS-%E2%9C%94-brightgreen.svg)](http://open-oss.com)

# imito

NOTE: Currently the eventual structure of the API of this module is being experimented on so please don't rely on it remaining the same from version to version until further note.
This also explains the current absence of examples.  Hopefully I will nail down enough of this shortly so I'll be able to provide more documentation.

This module will eventually provide functionality for transforming primitives and objects into other objects or primitivs while duplicating them.  There are many targeted use cases, so here are some common examples:

* deep copy - duplicate the entire object
* mixed copy - duplicate the object while leaving some references pointing to the same sub object as the original
* deep compare - transform two or more objects (i.e. one array of two or more objects) into a boolean value (true if the objects are the same, false otherwise)
* remove circular references - duplicate the entire object while replacing circular reference with other values
* unhide hidden properties - transform an object into one with all the hidden properties unhidden.
* generate HTML from an object - transform an object into a string containing valid HTML
* transform XML string into an object

There are many more uses, but importantly imito will support easy customization of these transformations.
Transformation configurations can be chained so you only need to specify a changed behavior, not the entire transformation.
Thus you can start with a plain "deep copy" transformation and then specify that a property .some.other should be changed to some other value.
You can also use chaining to "compose" transformations.  For instance, if you have one transformation that can create an object out of XML
and another that can convert an object to HTML then you can chain them together to generate HTML from XML.
A number of predefined transformations will be provided so you can use them by name rather than having to specify the full syntax.
Additionally, you can "register" new custom transformations (including any chanined ones) so that you can refer to them by name as well.  