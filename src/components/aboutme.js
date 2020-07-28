import React, { Component } from 'react';


class About extends Component {
  render() {
    return (
      <div>

         <img src={process.env.PUBLIC_URL + 'kendra.jpeg'} alt="kendrapic" />
        
        <div style={{textAlign: 'center'}}class="container">
          <p>I am an enthusiastic software engineer that graduated Digital Crafts Houston in July 2020 and is eager to join the technology industry. As I am an Army veteran, I enjoy being challenged and engaged with projects that require me to work outside my comfort and knowledge set while working alone or in a collaborative environment. My passion for creating practical proficient software is what drives me to keep striving to deliver stellar work ethic and drive. I am a skilled professional with proven leadership and supervisory skills, outstanding communication and interpersonal skills, and a friendly, pleasant demeanor with excellent social skills to encourage a healthy atmosphere. </p>
        </div>

      </div>


    )
  }
}

export default About;
