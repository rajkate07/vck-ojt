import { Link } from "react-router-dom";
import Header from "../component/Header/Header";

const AboutPage = () => {
        return(

    <div>
        <Header/>
            <div className="about-container">
                <h1 className="h1tag">ABOUT VCK</h1>
                <p>Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering transformative education since its inception in [Year of Establishment, e.g., 1980]. Located in the bustling heart of [City/Area, e.g., Chembur, Mumbai], our college has consistently strived to uphold the highest standards of academic rigor and ethical values.</p>
                <p>Our vision is to empower students with critical thinking skills, a global perspective, and a strong sense of social responsibility. We aim to nurture individuals who are not only successful in their careers but also contributing members of society.</p>
                <hr></hr>
                <div className="mission">
                    <h2>Our Mission</h2>
                    <ul>
                        <li>To provide high-quality, accessible education across various disciplines.</li>
                        <li>To foster research, innovation, and creativity among students and faculty.</li>
                        <li>To cultivate a diverse and inclusive learning environment.</li>
                        <li>To instill strong ethical values and leadership qualities.</li>
                    </ul>
                </div><hr></hr>
                    <h2>Our Values</h2>
                    <p>Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built. We encourage open dialogue, intellectual curiosity, and a relentless pursuit of knowledge.</p>
                    <hr></hr>
                    <h2>History</h2>
                    <p>Vivekanand College, Kolhapur which was established in 1964 is known as one of the best quality colleges in Maharashtra. The U.G.C. granted autonomy to this college from the academic year 2018-19. About 8000 students are enrolled every year for various programmes. Besides the conventional programmes like B.A., B.Com.and B.Sc., the college offers the professional programmes like B.B.A., B.C.A., B.C.S., B.Sc. (Biotechnology) ,B.Sc. Microbiology, B.Voc. , Community College and M. B. A. The college also provides opportunity to undertake degrees like B.A.,B.Com.,B.Sc. , B.Lib.,M.Lib. and M.B.A. of YCMOU, Nashik. </p>
                    <p>The college has also acquired reputation in the fields of dance, drama, music, other arts and sports, besides academics. Our college has been securing the first place for last twenty years by winning maximum number of Shivaji University Merit Scholarships. The faculties of the college are not only excellent in teaching but also in research. Till date in all 27 minor and major research projects are undertaken by the faculties.</p>
                    <p>The college has won the ‘MeghnathNageshkar Trophy’ of Shivaji University for the Best College in the field of Sports for eleven years continuously. SandipTarate and SnehankitaVarute are the recipients of the “ChhatrapatiShivaji Award”. RahiSarnobat is the winner of the Asian Games held in Indonesia  in August 2018. RahiSarnobat and VeerdhavalKhade represented India in ‘London Olympics-2012’, which is a historic record as both belong to the same college. Till date the college has produced more than 250 national and 10 international sports persons.</p>
                    <p>The college has also proved its talent in the field of cultural activities by winning General Championship in the Central Youth Festival of the university for seven consecutive years. Our student UshaJadhav, a film actress, is the winner of ‘The Best Actress National Award-2013’ for her performance in Marathi film ‘Dhag’. Presently, our three girl students are heroines in the five different Marathi films.</p>
                    <p>Considering the strengths of the college, the NAAC, Bangalore has reaccredited the college with ‘A’ Grade. The college is identified twicw as the “College with Potential for Excellence” by the UGC, and included in “The Star College Scheme” by the DBT, Govt. of India.</p>
                <ul>
                    <li>Past Principals</li>
                </ul>
                <table className="abouttable" border={2}>
                    <tr className="about-table-heading">
                        <th rowSpan="2">Sr. No.</th>
                        <th rowSpan="2">Name of the Principal</th>
                        <th colspan="2">Tenure</th>
                    </tr>
                    <tr className="about-table-heading">
                        <th align="center">From</th>
                        <th align="center">To</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Mr. R. K. Kanabarkar</td>
                        <td align="center">1964</td>
                        <td align="center">1971</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Mr. B. A. Babar</td>
                        <td align="center">1971</td>
                        <td align="center">1974</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Dr. D. N. Solanki</td>
                        <td align="center">1974</td>
                        <td align="center">1975</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Mr. R. M. Chitnis</td>
                        <td align="center">1975</td>
                        <td align="center">1979</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Mr. A. P. Rane</td>
                        <td align="center">1979</td>
                        <td align="center">1982</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Mrs. V. H. Patil</td>
                        <td align="center">1982</td>
                        <td align="center">1987</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Mr. D. A. Patil</td>
                        <td align="center">1987</td>
                        <td align="center">2002</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Dr. A. N. Jagtap</td>
                        <td align="center"> 2002</td>
                        <td align="center">2008</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Dr. H. B. Patil</td>
                        <td align="center">2008</td>
                        <td align="center">2017</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Dr. S. Y. Hongekar</td>
                        <td align="center">2017</td>
                        <td align="center">2020</td>
                    </tr>
                </table>
            </div>
    </div>
    )
}

export default AboutPage;