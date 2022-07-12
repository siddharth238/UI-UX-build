import './App.css';
import Animatedone from './Backgrounds/Animatedone';

import { About, Footer, Whysrm, Adventures, Places } from './containers';
import { Video, Comps } from './components'
import Social from './Backgrounds/Social';
import Photocard from './Backgrounds/Photocard';
import Gallery from './containers/Gallery/Gallery';
import Research from './containers/research/Research';
function App() {
  return (
    <div className="App">
      <Animatedone />
      <Social />
      <About />
      <Whysrm /><div id='video' />
      <Video  text="Being the second home for thousands of students, SRM University-AP Andhra Pradesh is more than a destination for higher education. Students from diverse places in India and worldwide gather at SRM AP to experience vibrant cultures and opportunities. The elegant campus infrastructure provides a favourable atmosphere for dynamic discussions."
        title="SRM University-AP Andhra Pradesh"
        Src="https://www.youtube.com/watch?v=uC9NLF09nTc&ab_channel=SRMUniversity-AP%2CAndhraPradesh"
      />
      
      <Video text="At SRM AP, learning happens everywhere: In and out of the classroom, on and off campus, and at both formal and informal settings. Our buildings foster a new culture of learning that is multi-dimensional, global, social, experiential, and interactive."
        title="SRM University, AP – Andhra Pradesh is designed by Perkins + Will, the American architecture firm."
        left={true} Src="https://www.youtube.com/watch?v=ASPvEpv-Pck&ab_channel=SRMUniversity-AP%2CAndhraPradesh"
      />
      <Video text="Students enhance their strengths and potentials through the multifold innovative pathways available. SRM AP functions as a gateway to the myriad avenues of curricular, co-curricular, and extracurricular activities. Here the students are motivated to find their true interests, pursue dreams and write their own success stories."
        title="Life at SRM University-AP Andhra Pradesh"
          Src="https://www.youtube.com/watch?v=ic0P7RiRZEE&feature=youtu.be&ab_channel=SRMUniversity-AP%2CAndhraPradesh"
      />
      
      <Comps title="SRM University Careers Directory" link1="https://srmap.edu.in/about/crcs/placement/" link2="https://srm.prosple.com/" heading="View records" />
      <Gallery heading="Students are encouraged to participate in sports at national and international meets." 
      title="Sports Archive" 
      link="https://srmap.edu.in/wp-content/uploads/2022/05/campus2.jpg?x95317" link1="https://srmap.edu.in/campus-life/sports/" link2="https://srmap.edu.in/campus-life/sports/"/>
      <Comps title="Students are encouraged to establish many clubs and intercurricular events."   link1="https://srmap.edu.in/category/events/research-events/" heading="View research events" link2="https://srmap.edu.in/events-srm-2/#events"/>
      <Gallery heading="In our curricula, we have ensured that one size fits all approach no longer exists. 
      Rather, students are provided with different domains of learning." 
      title="Philosophy"
       link="https://srmap.edu.in/file/2017/11/oXkvf7ccG8u2Mey0hGBmYu1_8658iU9x5TtnXuBVUSweJxFPc.jpg?x95317"
       link1="https://srmap.edu.in/academics/#academics" link2="https://srmap.edu.in/academics/ideal/"/>
      <Research/>
     
      <Footer />
    </div>
  );
}

export default App;
