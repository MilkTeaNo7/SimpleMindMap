(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9742"],{"8e32":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this;e._self._c;return e._m(0)},d=[function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Render instance")]),t("p",[e._v("The "),t("code",[e._v("render")]),e._v(" instance is responsible for the entire rendering process and can be accessed through "),t("code",[e._v("mindMap.renderer")]),e._v(".")]),t("h2",[e._v("Properties")]),t("h3",[e._v("activeNodeList")]),t("p",[e._v("Gets the current list of active nodes.")]),t("h3",[e._v("root")]),t("p",[e._v("Gets the root node of the node tree.")]),t("h2",[e._v("Methods")]),t("h3",[e._v("highlightNode(node, range)")]),t("blockquote",[t("p",[e._v("v0.9.0+")])]),t("ul",[t("li",[t("p",[t("code",[e._v("node")]),e._v("：Target node instance to highlight")])]),t("li",[t("p",[t("code",[e._v("range")]),e._v("：Optional, Array, a range array, [0, 1]")])])]),t("p",[e._v("Highlight a node or child node. If the 'range' parameter is not passed, the specified 'node' node is directly highlighted. If the 'range' passes a range of child nodes to be highlighted, the child nodes of that range will be highlighted.")]),t("p",[e._v("The highlight effect is wrapped by a rectangular box, and the stroke and fill style of the rectangle can be configured through the 'highlightNodeBoxStyle' instantiation option.")]),t("h3",[e._v("closeHighlightNode()")]),t("blockquote",[t("p",[e._v("v0.9.0+")])]),t("p",[e._v("隐藏节点高亮框。")]),t("h3",[e._v("setRootNodeCenter()")]),t("blockquote",[t("p",[e._v("v0.8.0+")])]),t("p",[e._v("Return to the central theme, that is, set the root node to the center of the canvas.")]),t("h3",[e._v("setData(data)")]),t("blockquote",[t("p",[e._v("v0.7.3+")])]),t("p",[e._v("Dynamically set mind map data.")]),t("h3",[e._v("clearActive()")]),t("blockquote",[t("p",[e._v("v0.8.0+ abandoned")])]),t("p",[e._v("Clears the currently active node.")]),t("h3",[e._v("clearAllActive()")]),t("blockquote",[t("p",[e._v("v0.8.0+ abandoned")])]),t("p",[e._v("Clears all currently active nodes and triggers the "),t("code",[e._v("node_active")]),e._v(" event.")]),t("h3",[e._v("clearActiveNode()")]),t("blockquote",[t("p",[e._v("v0.8.0+")])]),t("p",[e._v("Clears all currently active nodes and triggers the "),t("code",[e._v("node_active")]),e._v(" event.")]),t("h3",[e._v("clearActiveNodeList()")]),t("blockquote",[t("p",[e._v("v0.8.0+")])]),t("p",[e._v("Clears all currently active nodes but not triggers the "),t("code",[e._v("node_active")]),e._v(" event.")]),t("h3",[e._v("startTextEdit()")]),t("blockquote",[t("p",[e._v("v0.1.6+")])]),t("p",[e._v("If there is a text editing requirement, this method can be called to disable the enter key and delete key related shortcuts to prevent conflicts.")]),t("h3",[e._v("endTextEdit()")]),t("blockquote",[t("p",[e._v("v0.1.6+")])]),t("p",[e._v("End text editing, restore enter key and delete key related shortcuts.")]),t("h3",[e._v("addActiveNode(node)")]),t("blockquote",[t("p",[e._v("v0.8.0+ abandoned")])]),t("p",[e._v("Add a node to the active list.")]),t("h3",[e._v("addNodeToActiveList(node)")]),t("blockquote",[t("p",[e._v("v0.8.0+")])]),t("p",[e._v("Add a node to the active list.")]),t("h3",[e._v("removeActiveNode(node)")]),t("blockquote",[t("p",[e._v("v0.8.0+ abandoned")])]),t("p",[e._v("Remove a node from the active list.")]),t("h3",[e._v("removeNodeFromActiveList(node)")]),t("blockquote",[t("p",[e._v("v0.8.0+")])]),t("p",[e._v("Remove a node from the active list.")]),t("h3",[e._v("findActiveNodeIndex(node)")]),t("p",[e._v("Search for the index of a node in the active list.")]),t("h3",[e._v("getNodeIndex(node)")]),t("p",[e._v("Get the position index of a node among its siblings.")]),t("h3",[e._v("removeOneNode(node)")]),t("p",[e._v("Delete a specific node.")]),t("h3",[e._v("copyNode()")]),t("p",[e._v("Copy a node, the active node is the node to be operated on, if there are multiple active nodes, only the first node will be operated on.")]),t("h3",[e._v("setNodeDataRender(node, data, notRender)")]),t("ul",[t("li",[t("code",[e._v("notRender")]),e._v(": v0.6.9+, "),t("code",[e._v("Boolean")]),e._v(", Default is "),t("code",[e._v("false")]),e._v(", Do not trigger rendering.")])]),t("p",[e._v("Set node "),t("code",[e._v("data")]),e._v(", i.e. the data in the data field, and will determine whether the node needs to be re-rendered based on whether the node size has changed, "),t("code",[e._v("data")]),e._v(" is an object, e.g. "),t("code",[e._v("{text: 'I am new text'}")]),e._v(".")]),t("h3",[e._v("moveNodeTo(node, toNode)")]),t("blockquote",[t("p",[e._v("v0.1.5+")])]),t("p",[e._v("Move a node as a child of another node.")]),t("h3",[e._v("insertBefore(node, exist)")]),t("blockquote",[t("p",[e._v("v0.1.5+")])]),t("p",[e._v("Move a node in front of another node.")]),t("h3",[e._v("insertAfter(node, exist)")]),t("blockquote",[t("p",[e._v("v0.1.5+")])]),t("p",[e._v("Move a node behind another node.")]),t("h3",[e._v("moveNodeToCenter(node)")]),t("blockquote",[t("p",[e._v("v0.2.17+")])]),t("p",[e._v("Move a node to the center of the canvas.")]),t("p",[e._v("Currently, if there is zoom, returning to the center will reset the zoom.")]),t("h3",[e._v("expandToNodeUid(uid, callback)")]),t("blockquote",[t("p",[e._v("v0.6.7+")])]),t("ul",[t("li",[t("p",[t("code",[e._v("uid")]),e._v(": uid of node")])]),t("li",[t("p",[t("code",[e._v("callback")]),e._v(": Expand completed callback function")])])]),t("p",[e._v("Expand to the node of the specified uid.")]),t("h3",[e._v("findNodeByUid(uid)")]),t("blockquote",[t("p",[e._v("v0.6.7+")])]),t("ul",[t("li",[t("code",[e._v("uid")]),e._v(": uid of node")])]),t("p",[e._v("Find the corresponding node instance based on the uid.")]),t("h3",[e._v("copy()")]),t("blockquote",[t("p",[e._v("v0.6.8+")])]),t("p",[e._v("Copy nodes. After calling this method, the current activated node data will be stored. Multiple activated nodes will only operate on the first node, and subsequent calls to the 'paste()' method can be pasted.")]),t("h3",[e._v("cut()")]),t("blockquote",[t("p",[e._v("v0.6.8+")])]),t("p",[e._v("Cut a node. After calling this method, the currently active node will be cut and the node data will be stored. Multiple nodes will only operate on the first node, and subsequent calls to the 'paste()' method can be pasted.")]),t("h3",[e._v("paste()")]),t("blockquote",[t("p",[e._v("v0.6.8+")])]),t("p",[e._v("Pasting nodes can be done by calling the 'copy()' or 'cut()' method after calling it. This method does not support pasting data from the user's clipboard. Please use the built-in 'Ctrl+v' shortcut key.")])])}],a={},v=a,i=o("2877"),l=Object(i["a"])(v,n,d,!1,null,null,null);t["default"]=l.exports}}]);