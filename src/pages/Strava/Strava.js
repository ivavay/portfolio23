import "./Strava.css"
import stravatn from "../../images/strava-redesign.png"
import sketches from "../../images/strava-sketches.png"
import feedback from "../../images/strava-feedback.png"
import gif from "../../images/strava.gif"


export default function Strava() {
    return(
        <div>
            <img src={stravatn} alt="banner" className="banner"/>
            <h2 className="header">Strava Redesign</h2>
            <div className="two-col">
                <div>
                <h2 className="title">Problem Statement</h2>
                <p className="small-p">Through personal experience and user research, the lack of accountability and company makes it harder for people to keep up with their running goals.</p>
                </div>
                <div>
                <h2 className="title">Overview</h2>
                <p className="small-p"> Role — User Research / UX Design / Product Thinking / Prototyping<br></br>
                Timeline — Oct 2022 - Nov 2022 / Part of Useful School<br></br>
                Tools — Figma, User Testing</p>
                </div>
            </div>
            <h2 className="title">User Research + Insights</h2>
            <p>Insights from user testing on the existing Strava group feature shows that the onboarding process is lengthy; however, most people did not have significant problems going through the exisitng user flow to create a group running challenge.</p>
            <h2 className="title">Ideation</h2>
            <p>I chose to do this particular feature’s redesign because I believe that doing things collectively is more motivating than doing things alone. I thought that this existing Strava could be improved via simplicity with more emphasis on seeing each others’ updates.</p>
            <div className="center">
                <img alt="sketch" src={sketches} className="fullsize-img"/>
            </div>
            <h2 className="title">Iterations based on Feedbacks</h2>
            <div className="center">
                <img alt="feedback"src={feedback} className="fullsize-img"/>
            </div>
            <p>I fixed my designs based on feedback from two POC designers</p>
            <h2 className="title">Solutions Statement</h2>
            <p>This redesign aims solve the problem of lack of accountability for runners working towards a collective runnning goal.</p>
            <div className="center">
                <img src={gif} alt="gif" className="midsize-img"/>
            </div>
            <h2 className="title">Try out the protytpe here</h2>
            <p>Feel free to use options in the top right corner to adjust your viewing preference and bottom right corner to restart the flow.</p>
            <iframe color="white" width="100%" height="800" title="This is a prototype" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FbJSR6LYlrK2BptePaZJLmk%2FUseful-School-HW%3Fpage-id%3D105%253A54%26node-id%3D105-254%26starting-point-node-id%3D105%253A254%26scaling%3Dscale-down" allowfullscreen></iframe>
            <h2 className="title">Reflection</h2>
            <p>If I had more time + resources, I would do a larger and more diverse sample size for initial user testing and user feedback for the prototype to make sure it’s encompassing for diverse user groups. I learned how to use UserTesting.com and got more comfortable with prototyping in Figma. Challenges-wised, it was still a little difficult for me to balance taking in insights from user reserach with my own ideas for the solution, but I tried my best based on what I could comprehend.</p>
       </div>
    )
}