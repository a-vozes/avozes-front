function Lista() {

    var prog = [
      { name: "Html", stack: "Front" }, //0
      { name: "CSS" },  //1
      { name: "Java" },
      { name: "Typescript" }
    ]
  
    return (
      <>
        { prog.map(function(item){
          return (
            <>
              <div key={ item.name }>
                <h1>{ item.name }</h1>
                <h1>{ item.stack }</h1>
              </div>
            </>
          )
        }) }
      </>
    )
  }
  
  export default Lista