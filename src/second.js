import React from "react";
import mainimage2 from './download.jpeg'
import myimage from './cake.png'

const Second = () => {
    return (
        <div>
            <div className="firstdiv">
                <img className="mainimagestyle" src={mainimage2}></img>
                <p className="firstdivtext">here you,ll find some description about js</p>
            </div>
            <div>
                <h1>  A high-level definition</h1>
                JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web
                page does more than just sit there and display static information for you to look at — displaying timely content updates,
                interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved.
                It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more
                detail in other parts of the Learning Area.
            </div>
            <div className="centered">
                <img className="cakeimage" src={myimage}></img>
            </div>
            <p>
                <h2>HTML is the markup language</h2> that we use to structure and give meaning to our web content, for example defining
                paragraphs, headings, and data tables, or embedding images and videos in the page.
                <h2>CSS is a language of style rules</h2> that we use to apply styling to our HTML content, for example setting background colors\
                and fonts, and laying out our content in multiple columns.
                <h2>JavaScript is a scripting language</h2> that enables you to create dynamically updating content, control multimedia
                , animate images, and pretty much everything
                else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)
            </p>
        </div>
    )
}
export default Second;