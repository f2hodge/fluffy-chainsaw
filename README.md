# fluffy-chainsaw

## HTML, CSS, JavaScript crashes

<!--  -->
<!-- HTML Cheat Sheet -->
<!--  -->

## What is HTML? :

- Hypertext Markup Language
- Not a programming language
- Markup Language for creating webpages / documents
- Building blocks of the web

## Creating an HTML File:

- Does NOT need a server
- Files must end with the .html extension
- Runs in a web browser
- index.html is the root / home page of a website
- Tags open and close, closing with a forward slash, but some are self-closing and only single

## Page Structure:

- Open and closing html tags, inside a head(which doesn't render in the page) and body
- The body is the page content for the website
- Doctype at the top indicates the type of document(simpler in HTML5 from other versions)

## Inline vs. Block Level Elements:

- Inline Elements:
  - Do not start on a new line
  - Take only the necessary width for content
- Block Elements:
  - Start on a new line
  - Take the full width available
- Block Level: div, h1 - h6, p, form
- Inline Level: span, img, a

## Tag Attributes:

<!--
Sample:
<tagname attrubuteName="attrubuteValue">content</tagname>
Example:
<h1 title="My Company">About Us</h1>
 -->

-
- All tags can have attributes
- Provide Information about an element
- Placed within the start tag
- Key/value pairs (id="someId")

## HTML5 Semantic Tags:

## <!-- A semantic element clearly describes its meaning to both the browser and the developer -->

- header, footer, aside, main, article, nav, section, details

<!--  -->
<!-- CSS Cheat Sheet -->
<!--  -->

## What is CSS? :

- NOT a programming language
- Stylesheet/Styling language
- Used for website layout and design
- Can be extended with Sass or Less

## 3 Methods for Adding CSS:

- Inline CSS: Directly in the html element (NO!)
- Internal CSS: Using style tags within a single document
- External CSS: Linking an external .css file (BEST!)

## CSS Selectors:

- "a { background-color: yellow; }
- selector { property: value; }

## Colors in CSS:

- Color names like "red, green, etc" or HTML5 color names like "coral, cornsilk, etc"
- Hexadecimal names like "#fff, #00ff00, etc"
- RGB (red, green, blue) values as amount of each, like "rgb(0,0,255)" for blue

## Margin, Border, Padding, Box-model:

- The order from internal to external is -> Element, Padding, Border, Margin
- The Border is the exterior edge of the element content
- Long declaration involves saying things like "margin-top, margin-bottom"
- Shorthand declaration for size only is "margin: top right bottom left"
  - or if opposing sides are the same "margin: top-bottom right-left"
  - or if they're all equal "margin: all"
- Shorthand declaration general is "margin: size color style"

## Positioning in CSS:

- Static: Default, rendering in order of the markup document flow
- Relative: Positioning relative to element's normal position, pushing (top, left, etc) value
- Absolute: Target position we want inside a relative element reference
- Fixed: Always in the same position to browser window, regardless of scrolling
- Initial: Sets property to its default value
- Inherit: Takes property from its parent element value

<!--  -->
<!-- JavaScript Cheat Sheet -->
<!--  -->

## What is JavaScript? :

- High-level, interpreted programming language
- Conforms to ECMAScript specification
- Multi-paradigm
- Runs on the client/browser as well as on the server(Node.js)
- The programming language of the browser (most wide-spread language today)
- Build interactive user interfaces with frameworks like React
- Used in building very fast server-side and full-stack applications
- Used in mobile development (React Native, NativeScript, Iconic)
- Used in desktop application development (Electron JS)

## Course Content:

- Variables and Data Types
- Arrays
- Object Literals
- Methods for string, array, objects, etc.
- Looping: for, while, for..of, forEach, map
- Conditionals (if, ternary, and switch)
- Functions (Normal & Arrow)
- OOP (prototypes and classes)
- DOM Selection
- DOM Manipulation
- Events
- Basic Form Validation

## 2 Methods of adding JS into webpage:

- Directly into the markup with script tags <!-- <script>alert("hello world");</script> -->
- Create .js files and reference into .html files with Script tags and Source(src) properties

## Variables and Data Types:

- Variables:
- - var: general variable declaration, not used anymore due to scope bleed and conflicts
  - let: general variable declaration, when a variable needs to change value
  - const: general variable declaration, values that don't change (must be instantiated)

- Data Types:
- - String: any collection of characters
  - Number: any number, including decimal
  - Boolean: true or false value
  - null: no value, but still instantiates
  - undefined: no value, but can't be stored in const except explicitly
  - symbol: (beyond the scope of this course)

- Array:
- - collection of values
  - indexed beginning with location at 0
  - may be of any variable type
  - can still be modified as a const, just not reassigned to a new array

Objects and Object Literals:
- can use the original ES5 or earlier version and methods declared outside constructor
- can use classes for syntactic sugar and more elegant code design


<!--  -->
<!-- DOM Selection -->
<!--  -->
