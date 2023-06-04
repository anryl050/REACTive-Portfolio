import React from 'react';
import Button from 'react-bootstrap/Button';

const styles = {
  p: {
    color: '#F3EEE8',
    margin: "30px"
  },

  li: {
    color: '#F3EEE8',
  }
};

export default function Resume() {
  return (
    <section className="place-content-center h-full py-20">
      <h1 className="flex flex-wrap justify-center">Resume</h1>

      <div className="  mx-auto bg-slate-800 rounded-xl shadow-md overflow-hidden sm:max-w-md md:max-w-2xl lg:max-w-6xl md:m-5 m-5" >

        <p className="text-sm" style={styles.p}> Over 15 years of experience working within the FDA and EMA regulated pharmaceutical industry, specializing in plasma-based services. Experience in hosting regulatory inspections, client and corporate audits, and conducting internal audits. Extensive background with manufacturing, analytical, problem-solving and facility qualification activities as well as various plasma collection equipment, Blood Establishment Computer systems (BECS), and software validation processes. Recognized on multiple occasions for outstanding performance and commitment to quality, clients, and exceptional teamwork.</p>

        <p className="text-sm" style={styles.p}> SOFTWARE VALIDATION SPECIALIST</p>
        <p className="text-sm" style={styles.p}>GRIFOLS – Seattle, WA </p>
        <p className="text-sm" style={styles.p}>MAR 2020   – Present </p>
        <ul className='mt-4 mb-4'>

          <li className="text-sm" style={styles.li}>Demonstrated and supported continuous improvement and growth mindset.</li>
          <li className="text-sm" style={styles.li}>Established and implemented departmental policies, goals, objectives and procedures in conjunction with other departments and team members.</li>
          <li className="text-sm" style={styles.li}>Collaborated with departmental leaders to establish organizational goals, strategic plans and objectives.</li>
          <li className="text-sm" style={styles.li}>Mentored center staff and leadership teams on use of the new  Blood Establishment Computer systems (BECS).</li>
          <li className="text-sm" style={styles.li}>Assisted with employee recruitment and interviews.</li>
          <li className="text-sm" style={styles.li}>Support centers with the audit process (audit preparation, post audit responses, assistance during the audit, etc.)</li>
          <li className="text-sm" style={styles.li}>Development and composition of the Standard Operation Procedures (SOPs), Center Notifications, and Corporate Directives. </li>
          <li className="text-sm" style={styles.li}>Resolved testing problems by modifying testing methods and revising test objectives and standards.</li>
          <li className="text-sm" style={styles.li}>Developed validation master plans, process flow diagrams, test cases and standard operating procedures.</li>
          <li className="text-sm" style={styles.li}>Conducted audits of validation or performance qualification processes to comply with regulatory requirements.</li>
          <li className="text-sm" style={styles.li}>Prepared detailed reports based on results of validation and qualification tests, compliance documentation and reviews of procedures and protocols.</li>
          <li className="text-sm" style={styles.li}>Analyzed validation test data to determine whether systems and processes had met validation criteria and to identify root causes of production problems.</li>
          <li className="text-sm" style={styles.li}>Recommended resolution of identified deviations from established product and process standards.</li>
          <li className="text-sm" style={styles.li}>Participated in internal and external training programs to maintain knowledge of validation principles, industry trends and novel technologies.</li>
          <li className="text-sm" style={styles.li}>Directed protocol creation and testing.</li>
          <li className="text-sm" style={styles.li}>Communicated with regulatory agencies regarding compliance documentation and validation results.</li>
          <li className="text-sm" style={styles.li}>Conducted validation and qualification tests of new and existing processes, equipment and software in accordance with internal protocols and external standards.</li>
          <li className="text-sm" style={styles.li}>Coordinated implementation and scheduling of validation testing with affected departments and personnel.</li>
          <li className="text-sm" style={styles.li}>Reviewed quality documentation necessary for regulatory submissions and inspections.</li>
        </ul>

        <div className="mt-2 mb-2">
          <p className="text-xs" style={styles.p}> * For additional details related to the work experience, additional skills and references, please download the Resume.</p>
          <a href="./assets/resume.pdf" download className="flex flex-wrap justify-center ">
            <Button variant="success">Download Resume</Button>{' '}
          </a>
        </div>
      </div>
    </section>
  );
}
