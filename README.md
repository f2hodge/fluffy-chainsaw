# fluffy-chainsaw

HTML, CSS, JavaScript crashes

<!--  -->
<!-- HTML Cheat Sheet -->
<!--  -->

What is HTML? :

- Hypertext Markup Language
- Not a programming language
- Markup Language for creating webpages / documents
- Building blocks of the web

Creating an HTML File:

- Does NOT need a server
- Files must end with the .html extension
- Runs in a web browser
- index.html is the root / home page of a website
- Tags open and close, closing with a forward slash, but some are self-closing and only single

Page Structure:

- Open and closing html tags, inside a head(which doesn't render in the page) and body
- The body is the page content for the website
- Doctype at the top indicates the type of document(simpler in HTML5 from other versions)

Inline vs. Block Level Elements:

- Inline Elements:
  - Do not start on a new line
  - Take only the necessary width for content
- Block Elements:
  - Start on a new line
  - Take the full width available
- Block Level: div, h1 - h6, p, form
- Inline Level: span, img, a

Tag Attributes:

<!--
Sample:
<tagname attrubuteName="attrubuteValue">content</tagname>
Example:
<h1 title="My Company">About Us</h1>
 -->

- All tags can have attributes
- Provide Information about an element
- Placed within the start tag
- Key/value pairs (id="someId")

HTML5 Semantic Tags:

<!-- A semantic element clearly describes its meaning to both the browser and the developer -->

- header, footer, aside, main, article, nav, section, details

<!--  -->
<!-- CSS Cheat Sheet -->
<!--  -->

What is CSS? :

- NOT a programming language
- Stylesheet/Styling language
- Used for website layout and design
- Can be extended with Sass or Less

3 Methods for Adding CSS:

- Inline CSS: Directly in the html element (NO!)
- Internal CSS: Using style tags within a single document
- External CSS: Linking an external .css file (BEST!)

Margin, Border, Padding, Box-model:

- The order from internal to external is -> Element, Padding, Border, Margin
- The Border is the exterior edge of the element content
- Long declaration involves saying things like "margin-top, margin-bottom"
- Shorthand declaration is "margin: top, right, bottom, left"
  - or if opposing sides are the same "margin: top-bottom, right-left"
  - or if they're all equal "margin: all"
