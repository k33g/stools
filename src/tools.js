let show = (...args) => {
  let args2shows = []
  let types = ["Container", "Functor", "Monad", "Maybe", "None", "Some", "Either", "Left", "Right", "Validation", "Success", "Fail"]
  let transform = (o) => {
    var clone = Object.assign({value:o.value}, o);
    return {type:o.constructor, instance:clone}
  }

  args.forEach(arg => {
    if(types.find(name => name === arg.constructor.name)) {
      args2shows.push(transform(arg))
    } else {
      args2shows.push(arg)
    }
  })
  console.log(...args2shows)
}

module.exports = {
  show: show
}
