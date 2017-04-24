//: You have already used the `addLine()` command, but you can also use the `move()` command. The `move()` command will behave the same as the `addLine()` but it won't draw a line.
//:
//: ![Image 1](Post7_1.jpg)
//:
//#-hidden-code
import PlaygroundSupport
import SpriteKit

_setup()

func addShape(pen: Pen){
    let view = PlaygroundPage.current.liveView as! GridPaperView
    view.add(pen)
}
//#-end-hidden-code

//Create a new Pen()
var p: Pen = Pen()

//#-editable-code
p.addLine(distance: 100)
p.move(distance: 100)
//#-end-editable-code

// Add our path to the canvas
addShape(pen: p)



