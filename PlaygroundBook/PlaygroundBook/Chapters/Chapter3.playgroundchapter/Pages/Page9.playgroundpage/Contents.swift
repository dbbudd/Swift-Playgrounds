//: Instead of using a for-loop we can use a while-loop where we can use a counter a part of the loop.
//:
//: ![Image 1](Post10_1.jpg)
//:
//: Run the program to see what it does.
//: Now modify the program so taht the distance between each line in the spiral is 10. Your finished program should look like the image below.
//:
//: ![Image 2](Post10_2.jpg)
//:
//#-hidden-code
import PlaygroundSupport
import SpriteKit

_setup()

func addShape(pen: Pen){
    let view = PlaygroundPage.current.liveView as! GridPaperView
    view.add(pen)
}

makeAssessment(of: PlaygroundPage.current.text)
//#-end-hidden-code

var p = Pen()
//#-editable-code

p.addLine(distance: 100)
p.turn(degrees: 90)

//#-end-editable-code
addShape(pen: p)

