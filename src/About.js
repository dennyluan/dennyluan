import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const About = ({}) => {
  return (
    <div id="about">
      <div className="container center">
        <div className="row">
          <div className="col-xs-12 col-md-12">

            <Link to={''}>
              <h1>Denny Luan</h1>
            </Link>


            <table>
              <tr><td><b>1989</b></td></tr>
              <tr>
                <td>June</td>
                <td>Born in Florence, Alabama to Bill and Jean Luan. Bill is an engineer at a Reynold's </td>
              </tr>

              <tr><td><b>1990</b></td></tr>
              <tr>
                <td>October</td>
                <td>Brother Alan is born.</td>
              </tr>
              <tr><td><b>1991</b></td></tr>
              <tr>
                <td></td>
                <td>Family moves to Alpharetta, Georgia.</td>
              </tr>

              <tr><td><b>1999</b></td></tr>
              <tr>
                <td>Fall</td>
                <td>Family moves from Atlanta, Georgia to Redmond, Washington.</td>
              </tr>

              <tr><td><b>2004</b></td></tr>
              <tr>
                <td>Summer</td>
                <td>Takes a course in game theory at Saint Mary's College, Maryland.</td>
              </tr>

              <tr><td><b>2005</b></td></tr>
              <tr>
                <td>Summer</td>
                <td>Studies philosophy of mind at Loyola Marymount University in Los Angeles.</td>
              </tr>

              <tr><td><b>2006</b></td></tr>
              <tr>
                <td>Summer</td>
                <td>Spends two months at Cornell University studying history and anthropology of medicine and science.</td>
              </tr>

              <tr><td><b>2007</b></td></tr>
              <tr>
                <td>June</td>
                <td>Completes high school at International Community School, Kirkland, Washington.</td>
              </tr>

              <tr>
                <td>June - August</td>
                <td>Starts undergraduate studies at the University of Washington.</td>
              </tr>

              <tr><td><b>2008</b></td></tr>
              <tr>
                <td>January</td>
                <td>Attends a lecture with Mohammad Yunus, the founder of Grameen Bank.</td>
              </tr>
              <tr>
                <td>May</td>
                <td>Starts research studies in the Pollack Lab at UW, not really studying anything meaningful.</td>
              </tr>
              <tr>
                <td>November</td>
                <td>Auditions for the Seattle Sounders in try-out's over two days in Tukwila, WA. Does not make the team for a professional contract.</td>
              </tr>

              <tr><td><b>2009</b></td></tr>
              <tr>
                <td>January</td>
                <td>Attends a townhall with Matt Flannery, the founder of Kiva.org.</td>
              </tr>

              <tr><td><b>2010</b></td></tr>
              <tr>
                <td>June</td>
                <td>Starts work in the Seelig Lab at UW as a research technician, studying RNA interference in bacteria.</td>
              </tr>

              <tr><td><b>2011</b></td></tr>
              <tr>
                <td>June</td>
                <td>Graduates from University of Washington in Seattle, studying Biochemistry and Economics.</td>
              </tr>

              <tr><td><b>2012</b></td></tr>
              <tr>
                <td>March 14</td>
                <td>Starts Experiment, a crowdfunding website for scientists.</td>
              </tr>

              <tr><td><b>2013</b></td></tr>
              <tr>
                <td>January - March</td>
                <td>Participates in Y Combinator's Winter 2013 batch.</td>
              </tr>

            </table>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
