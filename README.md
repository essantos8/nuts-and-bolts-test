[nuts and bolts.md](https://github.com/user-attachments/files/22140624/nuts.and.bolts.md)
# HOW TO USE

1. Install [node.js](http://node.js) and Angular on your system.  
2. Open a terminal in the source folder (the one with angular.json).  
3. Run ‘**ng serve**’.

# 

# SETUP

**Framework: Angular**  
I’m very comfortable with using this, and most basic things such as routing are already built in, so I don’t have to worry about third party libraries too much.

**IDE: Cursor**  
It has MCP Integration and built in AI tools for the job.

**Tools:**  
**Framelink Figma MCP Server**  
With this, I’m able to access the Figma MCP without needing to pay for anything. I’m not sure how this compares with the dev mode MCP that Figma released.

**ChatGPT**  
For general architecture level questions. This helps me refine the development prompt better.

**Github Copilot / VS Code**  
I’ll be using this for the business logic implementation, since Cursor has limited credits.

# UI DEVELOPMENT

After verifying that the setup worked, I moved on to testing if the model properly pulled data from Figma.  Here’s some of the more effective prompts I used:

**“Can you convert the given figma file into static Angular pages, with HTML and SCSS?”**  
**“Ok, now I want you to remove the templates from app.routes.ts, and place them into their own component folders.”**  
The first prompt converted the Figma design into routing, but the problem was that it was hardcoded templates on the routes. I had to use another prompt to turn them into proper pages.

**‘@Figma\_Link**  
**Please use the Figma design. I want you to use the design to create a navbar in app.html. use get\_figma\_data and download\_figma\_images.’**  
I already had the idea of having a navbar in the app.html so it’s shared with all the pages. This prompt directs the model to create the navbar in where I want it to, and the model takes care of the rest. I also explicitly told it to use get\_figma\_data as the model doesn’t always use it.

## Figma MCP Issues

I noticed that even with the MCP, the model didn’t quite follow the styling and layout of the Figma File. Upon further inspection, I’ve narrowed down some less than ideal practices being followed in the file.

**No color variables being used**  
From what I’ve gathered, the Figma MCP isn’t a magic tool. It can only be as good and as organized as the original design file, so having a badly organized design can cause it to have issues with accuracy and responsiveness. Having labeled variables makes it much easier for the model to create the CSS styling for the page.

**Hardcoded sizes and layouts**  
In a similar vein, the Figma MCP works much better when auto layout and adjustable sizes are used. It makes it easier for the MCP to decide how to format the divs, and the intended location for buttons and other components.

I tried to remake the navbar in Figma to fit my standards, and when I prompted it again, it captured most of the design. I still need to change the styling a bit.

![image1](https://res.cloudinary.com/dmmwhx6lf/image/upload/v1756997012/image1_pnxmjl.png)

I decided to move on to functionality, as I would need to clean up the entire Figma file to accurately recreate the Figma design using AI. I also ran out of cursor credits 🙁.

# FUNCTIONALITY

Given that the general layout of the form is already there, I decided to focus on functionality instead. I will be using Github Copilot for this. Here’s a sample prompt.

**“Check the user inputs of the pages in the campaign folder. I want you to create a service that collects these inputs and stores them in an object when you click the launch button in the step 4 component.**

**Step 1 should log what campaign type was selected.**  
**Step 2 Should log the Extracted Details.**  
**Step 3 should log the Email sending option, as well as the google sheet update.**  
**Step 4 should log the Email draft subject and body.**

**Ignore the file upload inputs.”**

Here, since there might have been a lack of context due to switching models, I had to be more accurate with what I wanted. I wanted to collect the data inputted in the 4 pages, and collected once the launch button was clicked.

![image2](https://res.cloudinary.com/dmmwhx6lf/image/upload/v1756997025/image2_trqgcg.png)

The resulting code was accurate to what I wanted to do, but I had to make another prompt since it missed editing a few of the HTML files. 

![image3](https://res.cloudinary.com/dmmwhx6lf/image/upload/v1756997015/image3_ll3f3i.png)

In the end, I managed to make a rudimentary app that takes your selection and input data, and collects them in a single point. You can then pass this data to wherever you need.

# FUTURE IMPROVEMENTS

## Animations

I could use GSAP for animating the panels going down, instead of its current look. Unfortunately, the current UI still needs some work before I can implement that.

## File Uploads

I ran out of time before being able to implement file uploads, but it should be relatively easy to add. I’m thinking of one prompt to setup getting the file paths in your computer, then another prompt for sending the file to a backend server.

## Fixing the Figma Design

The navbar was a proof of concept in testing if the Figma MCP worked as intended. Unfortunately, It would have taken much more time than the 2 hours allotted to clean up the Figma design for proper export. Even if the time spent was limited, I can see potential in the Figma MCP for rapid frontend development.
