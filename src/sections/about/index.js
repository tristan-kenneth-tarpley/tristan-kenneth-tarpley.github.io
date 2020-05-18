import React from 'react'
import Particles from 'react-particles-js';
import Progress from 'components/progress'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class Hero extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
            <section id={`${this.props.id}`} className="about" style={{height: this.context.height}}>
                {this.particles()}
                <Row>
                    <Col md={6} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Me</h4>
                            </div>
                            <h3>I'm a Full Stack Software Engineer, marketer, and founder.</h3>
                            <div className="separator" />
                            <p>Developer, marketer, and entrepreneur passionate about making complexity attainable, palatable, and delightful for the person who can most benefit from it.</p>

                            <p>Currently this is applied by building my company, Market(r), which gives marketers superpowers-- focusing on prescriptive analysis to marketing decision-makers, not just the doers.</p>

                            <p>What else? I'm a musician, a dog parent, and I like to think I'm a pretty good cook.</p>
                            <div className="social social_icons">
                                <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://github.com/tristan-kenneth-tarpley/')}/>
                                <FontAwesomeIcon icon={faTwitter} className="social_icon" onClick={() => window.open('https://twitter.com/_TristanKenneth')} />
                                <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/in/tristantarpley')} />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="skills">
                            <div className="line-text">
                                <h4>My Skills</h4>
                            </div>
                            <div className="skills-container">
                                <Progress name="JavaScript (esp. ES6)" value={90} delay={600} />
                                <Progress name="React" value={80} delay={600} />
                                <Progress name="Node.JS" value={75} delay={600} />
                                <Progress name="TypeScript" value={60} delay={600} />
                                <Progress name="HTML/CSS" value={100} delay={600} />
                                <Progress name="Python" value={60} delay={600} />
                            </div>
                    </Col>
                </Row>
            </section>
        )
    }

    particles() {
        return (
            <Particles
                className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false,
                                "value_area": 5000
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": .5
                        },
                        "size": {
                            "value": 1
                        },
                    },
                    "retina_detect": true
            }}/>
        )
    }

}

export default Hero