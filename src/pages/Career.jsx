import React, { useState } from 'react';
import './Style.css';
import emailjs from "@emailjs/browser"

const sendemail =(e) => {
    e.preventDefault();

    emailjs.sendForm('service_3l4dgyd', 'template_w4vznto', e.target, 'E3mfhclz6ZPRLLYfD');
}

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    age: '',
    currentRole: '',
    recommend: '',
    improvements: [],
    comments: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        improvements: checked
          ? [...prev.improvements, value]
          : prev.improvements.filter((improvement) => improvement !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you can send formData to your API
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 id="title">Software Developer</h1>
          <h3 id="description">Job description</h3>
          <p id="sk1">Skills and requirement:</p>
          <br />
          <ul id="Skills" className="text-left justify-center">
          <li>– B.E /B.sc in Computer Science or any equivalent degree.</li>
            <li>– Minimum 1-4 years of strong coding skills with strong hands-on and practical working experience in websites & software development /mobile app development.</li>
            <li>– Knowledge of multiple front-end languages and libraries (e.g. HTML, CSS, Bootstrap, React JS, Angular, and JavaScript, XML, jQuery, Vue.js).</li>
            <li>– Hands-on Knowledge in React-Redux.</li>
            <li>– Knowledge of multiple back-end languages (e.g., C#, Python, .NET, PHP) and JavaScript frameworks (e.g., React, Node.js, Angular, Laravel).</li>
            <li>– Familiarity with databases (e.g. MySQL, MongoDB), and UI/UX design.</li>
            <li>– Experience in cloud native platforms, such as Open Stack, Azure, GCP, or AWS, Google Cloud.</li>
            <li>– Strong experience in creating Restful APIs. API integration.</li>
            <li>– Knowledgeable in using Postman for API request and response testing.</li>
            <li>- Experienced in integrating frontend and backend using Axios.</li>
            <li>- Hands-on knowledge in JWT authorization and authentication for secure API access.</li>
            <li>- Strong experience in using GitHub for version control and collaboration.</li>
            <li>- Experience in mobile application development (Flutter/Android Studio/any etc).</li>
            <li>– Substantial experience in building complex and scalable solutions.</li>
            <li>– Excellent debugging skills.</li>
          </ul>

          <br />

          <form id="survey-form" onSubmit={sendemail}>
            <div className="form-group">
              <h1 id="formh1">Apply For Job!</h1>
              <br />
              <label htmlFor="name" id="name-label">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your full name" 
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" id="email-label">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email address" 
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact" id="contact-label">Contact No</label>
              <input 
                type="number" 
                id="contact" 
                name="contact" 
                placeholder="Enter Your Mobile No" 
                required
                value={formData.contact}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="age" id="age-label">Age (optional)</label> <input 
                type="number" 
                id="age" 
                name="age" 
                min="13" 
                max="120" 
                placeholder="Enter your age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="dropdown">What are you looking for?</label>
              <select 
                id="dropdown" 
                name="currentRole" 
                required
                value={formData.currentRole}
                onChange={handleChange}
              >
                <option value="" disabled>Select</option>
                <option value="internship">Internship</option>
                <option value="job">Job</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <p>How likely are you to recommend continuous learning?</p>
              <div className="radio-group">
                <label>
                  <input 
                    type="radio" 
                    name="recommend" 
                    value="definitely" 
                    checked={formData.recommend === 'definitely'}
                    onChange={handleChange}
                  /> Definitely
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="recommend" 
                    value="maybe"
                    checked={formData.recommend === 'maybe'}
                    onChange={handleChange}
                  /> Maybe
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="recommend" 
                    value="not-likely"
                    checked={formData.recommend === 'not-likely'}
                    onChange={handleChange}
                  /> Not Likely
                </label>
              </div>
            </div>

            <div className="form-group">
              <p>What areas would you like to improve? (Check all that apply)</p>
              <div className="checkbox-group">
                <label>
                  <input 
                    type="checkbox" 
                    name="improvements" 
                    value="technical-skills"
                    checked={formData.improvements.includes('technical-skills')}
                    onChange={handleChange}
                  /> Technical Skills
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    name="improvements" 
                    value="soft-skills"
                    checked={formData.improvements.includes('soft-skills')}
                    onChange={handleChange}
                  /> Soft Skills
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    name="improvements" 
                    value="time-management"
                    checked={formData.improvements.includes('time-management')}
                    onChange={handleChange}
                  /> Time Management
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    name="improvements" 
                    value="communication"
                    checked={formData.improvements.includes('communication')}
                    onChange={handleChange}
                  /> Communication
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    name="improvements" 
                    value="leadership"
                    checked={formData.improvements.includes('leadership')}
                    onChange={handleChange}
                  /> Leadership
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="comments">Cover Letter</label>
              <textarea 
                id="comments" 
                name="comments" 
                rows="4" 
                placeholder="Share your thoughts..."
                value={formData.comments}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="file-upload">Upload your resume (PDF, DOC, DOCX)</label>
              <input 
                type="file" 
                id="file-upload" 
                name="resume" 
                accept=".pdf,.doc,.docx" 
                required
                onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
              />
            </div>

            <div className="form-group">
              <input 
                type="submit" 
                id="submit" 
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Career;