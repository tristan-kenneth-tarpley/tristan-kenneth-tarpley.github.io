import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import BaffleText from 'components/baffle-text'
import AnimationContainer from 'components/animation-container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faAngular, faAws } from '@fortawesome/free-brands-svg-icons'
import {
  faPencilRuler,
  faHouse,
  faServer,
  faRobot,
  faSmileBeam,
  faPizzaSlice,
  faQuoteRight,
  faCode,
  faHouseDamage,
  faRoad,
  faPersonBooth,
} from '@fortawesome/free-solid-svg-icons'
import Counter from 'components/counter'
import ThemeContext from '../../context'
import './styles.scss'

class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.show = this.show.bind(this)
  }

  static contextType = ThemeContext

  show() {
    this.setState({ show: true })
  }

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="services"
        style={{ height: this.context.height }}
      >
        <Row
          className="top"
          style={{
            maxHeight:
              this.context.height !== 'auto'
                ? this.context.height * 0.8
                : 'inherit',
          }}
        >
          <div className="content">
            <Col md={12}>
              <div className="line-text">
                <h4>Beliefs</h4>
              </div>
              <div className="heading">
                <BaffleText
                  text="What I Believe in"
                  revealDuration={500}
                  revealDelay={500}
                  parentMethod={this.show}
                  callMethodTime={1100}
                />
              </div>
              <div
                className="services_container"
                style={{
                  minHeight:
                    this.context.height !== 'auto'
                      ? this.context.height * 0.6
                      : 'inherit',
                }}
              >
                <Container>{this.services()}</Container>
              </div>
            </Col>
          </div>
        </Row>
        {/* <Row className="bottom">{this.counters()}</Row> */}
      </section>
    )
  }

  services() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <Row>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={400} animation="fadeInDown fast">
              <div className="icon">
                <FontAwesomeIcon icon={faRoad} />
              </div>
              <h4>End to end ownership</h4>
              <p>
                My background as a marketer and founder has given me immense insight and discipline around building with the end user in mind. Coupling that with my full-stack skillset, I'm uniquely well-rounded while still being able to dive deep.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={200} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faHouseDamage} />
              </div>
              <h4>Strong Architecture</h4>
              <p>
                My greatest strength is not as a code jockey, but as an architect; a creator. To that end, the most important role of an architect is to build with preparation in mind, walking the line between speed to market and not going in to tech debt.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={600} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faPersonBooth} />
              </div>
              <h4>Being market-driven</h4>
              <p>
                You can't be all things to all people &mdash; you have to be everything to somebody. How do you build software that people love? Ah, well, that's why you bring in devs with marketing chops :)
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={800} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faPencilRuler} className="solid" />
              </div>
              <h4>Starting with UX</h4>
              <p>
                Sorry, I probably sound like a broken record now. Sorry, I probably sound like a broken record now. Sorry, I probably sound like a broken record now. Sorry, I probably sound like a broken record now. Sorry, I probably sound like a broken record now.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={1000} animation="fadeInUp fast">
              <div className="icon">
                <FontAwesomeIcon icon={faServer} className="solid" />
              </div>
              <h4>Not being tied to frameworks</h4>
              <p>
                When you build a house, you don't hire a hammer guy. You hire a builder. There are a lot of "React experts," "MERN stack engineers," and Python guys out there. I specialize in choosing the best tools for the job.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={1200} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faRobot} className="solid" />
              </div>
              <h4>MDP > MVP</h4>
              <p>
                The "MVP" (minimum VIABLE product) pales in comparison to the "MDP" (minimum DELIGHTFUL product). I walk the line between where you should not cheap out, and where you can prioritize speed to market.
              </p>
            </AnimationContainer>
          </Col>
        </Row>
      )
    }
  }

  counters() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <Container>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faSmileBeam}
                value={100}
                text="Questions about why I'm doing this?"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faPizzaSlice}
                value={1000}
                text="These "
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faQuoteRight}
                value={500}
                text="Reviews"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faCode}
                value={50000}
                text="Lines of Code"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
        </Container>
      )
    }
  }
}

export default Services
