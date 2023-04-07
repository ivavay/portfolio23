import AccordianItem from "./AccordianItem"
import "./Accordian.css"

export default function Accordian() {
    return(
         <>
          <div className="accordian">
            <AccordianItem 
                question="What got you into design?"
                answer="I got into design in the beginning of college because I thought this career will be fulfilling for me as someone who's intrigued by the functionality and aesthetics of built things.
                I studied Cognitive Science in college because I thought that psychology could inform the design of products for positive behavior change, such as habit-building."
            />
            <AccordianItem 
                question="What tools do you use for 3D?"
                answer="My go-to tool is Cinema4D + Redshift, though I've been seen dabbling in Blender and Spline as well. For cloths simulations, I use Marvelous Designer."
            />
            <AccordianItem 
                question="What product have you seen recently that you think is great design?"
                answer=" I really enjoy the Nike Run App for its guided training plans and data viz breakdowns of your runs.
                The micro animations and overall experience of the app are phenomenal in getting me motivated to run more frequently.
                "
            />
            <AccordianItem 
                question="Where is your hometown?"
                answer="I was born in Germany and I grew up in Toronto, the Bay, Taipei, and then the Bay. I've spent the most time in SF Bay Area so I guess I would call that my hometown until another city outnumbers it."
            />
          </div>                
        </>
    )
}