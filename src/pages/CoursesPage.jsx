import Header from "../component/Header/Header";


const CoursesPage = () => {
    return(
    <div>
      <Header/>
      <div className="courses-container">
        <h1 className="h1tag">VIVEKANAND COLLEGE, KOLHAPUR</h1>
        <h2>BCA (Bachelor of Computer Applications)</h2>
        <h5>
          The BCA full form is Bachelor of Computer Applications. It is a
          3-year-long undergraduate degree program primarily focused on computer
          applications and software development. It serves as a gateway for
          students who wish to pursue a career in the field of Information
          Technology (IT).
        </h5>
        <p>
          BCA degree Colleges prescribe the eligibility criteria for admission
          to BCA courses as per the University Grants Commission (UGC)
          guidelines. Eligibility for BCA after 12th is a major factor
          contributing to the popularity of the course. The BCA course is open
          to candidates from all streams, unlike Engineering courses open only
          to the Science stream students.
        </p>
        <hr/>
        <h2>Key aspect of BCA course</h2>
        <ul>
          <li>
            <b>Course Duration:</b> 3 years (6 semesters)
          </li>
          <li>
            <b>Eligibility:</b> Class 12 with a minimum of 50% marks from a
            recognized board.
          </li>
          <li>
            <b>Admission:</b> Majorly based on the merit system; however, some
            colleges may accept CUET and MAH BCA CET exam scores.
          </li>
          <li>
            <b>Top Colleges:</b> Christ University, Galgotias University, Loyola
            College, Amity University, St. Xavier's College, Ahmedabad, and St.
            Joseph's University.
          </li>
          <li>
            <b>BCA Subjects:</b> C++, Java, Python, Database Management Systems
            (DBMS), cyber security, operating systems (Windows, Linux), computer
            networks, software development methodologies, etc.
          </li>
        </ul>
        <h2>Top picks for Bachelor of Computer Applications:</h2>
        <ul>
          <a href="https://www.shiksha.com/science/cuet-exam-answer-key/bca-2455">
            <li>CUET BCA Answer Key 2025: Download OMR Sheet Here</li>
          </a>
          <a href="https://www.shiksha.com/science/articles/cuet-difficulty-level-blogId-159281">
            <li>CUET UG Difficulty Level 2025: Is CUET Easy Or Complicated?</li>
          </a>
        </ul>
        <hr/>
        <h2>BCA Course Details: Highlights</h2>
        <p>
          The IT industry is one of the fastest-growing industries in India, and
          there is a high demand for skilled IT professionals. A Bachelor of
          Computer Applications course can help students get great employment
          opportunities in this field.
        </p>
        <h5>
          Interested candidates can see the table below for key highlights of
          the BCA program:
        </h5>
        <table border={2} className="center">
          <tr>
            <th>Parameters</th>
            <th>BCA course details</th>
          </tr>
          <tr>
            <td>BCA Full Form</td>
            <td>Bachelor of Computer Applications</td>
          </tr>
          <tr>
            <td>BCA Course Level</td>
            <td>Undergraduate</td>
          </tr>
          <tr>
            <td>BCA Course Duration</td>
            <td>3 Year</td>
          </tr>
          <tr>
            <td>BCA Eligibility Criteria</td>
            <td>Class 12 pass with at least 50% marks</td>
          </tr>
          <tr>
            <td>BCA Admission Criteria</td>
            <td>Merit-based/Exam-based</td>
          </tr>
          <tr>
            <td>BCA Course Top Colleges</td>
            <td>
              Christ University, Symbiosis Institute of Computer Studies and
              Research, Loyola College, Amity University, and St. Joseph's
              University.
            </td>
          </tr>
        </table>
        <div className="button">
          <a href="https://admvck.bterp.org/StudentLogIn1/Index/">
            <button>Apply Now</button>
          </a>
        </div>
      </div>
    </div>
    )
}

export default CoursesPage;