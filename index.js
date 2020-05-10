module.exports = function (babel) {
  const { types: t } = babel;

  return {
    name: "nomarlfn-to-arrowfn", // not required
    visitor: {
      FunctionDeclaration(path, state) {
        console.log('opts', state.opts)  // 配置
        if (state.opts.enable === false) {
          return
        }
        const id = path.node.id
        const arrowFunction = t.arrowFunctionExpression(path.node.params, path.node.body)
        path.replaceWith(t.variableDeclaration('const', [t.variableDeclarator(id, arrowFunction)]))
      }
    }
  };
}
