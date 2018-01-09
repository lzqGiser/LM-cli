
// 没有采用babel  原因是 由于这里的代码都会被发布，发布不适合采用 babel-register 这样的工具；
// 后期应该解决分两块，建立develop environment 和 production environment

require("./lm");