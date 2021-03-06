// @flow

import React from "react"
import { Link } from "react-router-dom"
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  List
} from "semantic-ui-react"

import Map from "../../components/map/"
import SuggestionsGrid from "../../components/suggestionsGrid"
import { TERRITORY_NAMES } from "../../config/"
import { ReactComponent as Logo } from "../../logo.svg"
import { ElectionType, RouteProps, ThesisType } from "../../types/"

import "./styles.css"

type State = {
  isLoading: boolean,
  election: ElectionType,
  theses: Array<ThesisType>,
  error?: ?string
}

class LandingView extends React.Component<RouteProps, State> {
  render() {
    const territorries = Object.keys(TERRITORY_NAMES)
      .filter(k => ["deutschland", "europa"].indexOf(k) === -1)
      .map(k => (
        <List.Item key={k}>
          <Link to={"/wahlen/" + k + "/"}>{TERRITORY_NAMES[k]}</Link>
        </List.Item>
      ))

    return (
      <div>
        <Container>
          <Grid columns="2" stackable verticalAlign="middle" id="hero">
            <Grid.Column>
              <h1 className="ui header" style={{ fontSize: "4rem" }}>
                <Logo className="logo" alt="Metawahl Logo" />
              </h1>
            </Grid.Column>
            <Grid.Column>
              <Header size="large">
                Metawahl zeigt, wie sich der politische Konsens in Deutschland
                über Zeit ändert.
              </Header>
              <Header size="medium">
                Hierzu werden die Aussagen der Parteien aus 50 Wahl-o-Maten mit
                den dazugehörigen Wahlergebnissen zusammengeführt. Es wird
                sichtbar, welche Politik von vielen Stimmen gestützt wird und
                welche Parteien dies möglich machen.
              </Header>

              <div
                className="ui sub header"
                style={{
                  fontSize: "0.9rem",
                  fontStyle: "italic",
                  marginTop: ".5rem",
                  textTransform: "none"
                }}
              >
                Von{" "}
                <a
                  href="https://blog.vincentahrend.com/"
                  style={{
                    color: "rgba(0,0,0,.6)",
                    borderBottom: "1px solid rgba(0,0,0,.4)"
                  }}
                >
                  Vincent Ahrend
                </a>
              </div>

              <Button
                basic
                as='a'
                href="wahlen/thueringen/49"
                icon
                labelPosition="left"
                style={{ marginBottom: 5, marginTop: "1.5em" }}
              >
                <Icon name="arrow right" />
                Thüringen 2019
              </Button>

              <Button basic
                as='a'
                href="/quiz/thueringen/49" icon labelPosition="left"
                style={{ marginBottom: 5 }}>
                <Icon name="arrow right" />
                Quiz zu Thüringen
              </Button><Button
                basic
                as='a'
                href="/wahlen/"
                icon
                labelPosition="left"
              >
                <Icon name="arrow right" />
                Alle Länder
              </Button>


            </Grid.Column>
          </Grid>
        </Container>

        <Container>
          <Grid stackable columns="3">
            <Grid.Row>
              <Grid.Column>
                <h1>Wie Metawahl funktioniert</h1>
              </Grid.Column>
            </Grid.Row>

            <Grid.Column>
              <Header size="medium">
                Parteien fordern unterschiedliche Politik
              </Header>

              <p>
                Bei Wahlen geben wir Parteien unsere Stimme, damit diese in
                unserem Namen Entscheidungen treffen. Jede Partei vertritt dabei
                unterschiedliche Positionen zu ausstehenden Entscheidungen.
              </p>

              <p>
                Vieles sehen die Parteien auch sehr ähnlich – aber in welchen
                Punkten unterscheiden sie sich eigentlich voneinander? Der
                Wahl-o-Mat der Bundeszentrale für politische Bildung ist enorm
                erfolgreich darin, uns zu zeigen, welche Fragen wir ihnen
                stellen können um sie klar voneinander zu trennen. Es stellt
                sich die Frage, welche Antworten auf diese Fragen die Mehrheit
                gewählt hat.
              </p>
            </Grid.Column>

            <Grid.Column>
              <Header size="medium">
                Aber welche Politik hat die Wahl gewonnen?
              </Header>

              <p>
                Nach der Wahl wissen wir, welche Parteien die meisten Stimmen
                bekommen haben. Wenn Parteien und Positionen sich einfach in
                links und rechts teilen ließen, wäre damit auch klar, welche
                Positionen gewonnen haben.
              </p>

              <p>
                Aber was ist, wenn Parteien sich in vielen verschiedenen
                Richtungen gegenüberstehen? Wenn eine klassisch konservative
                Partei auch linke Postionen vertritt, oder eine klassisch linke
                Partei auch für konservative Interessen einsteht? Welche Politik
                hat jetzt die Mehrheit der Wählerstimmen bekommen? Genau das
                zeigt Metawahl für viele Wahlen in Deutschland, durch eine
                Verbindung der Fragen und Antworten aus dem Wahl-o-Mat mit den
                jeweiligen Wahlergebnissen.
              </p>
            </Grid.Column>
            <Grid.Column>
              <Header size="medium">Oft unter einem Kompromiss</Header>
              <p>
                Die Position mit einer Mehrheit ist dabei nicht immer die, die
                von den meisten Wählern gewünscht wird. In einem repräsentativen
                Wahlsystem werden auch ungewünschte Positionen mit eingekauft,
                weil es nur eine begrenzte Anzahl an Parteien auf dem Wahlzettel
                gibt.
              </p>

              <p>
                <strong>
                  Auf Metawahl findest du heraus, welche Positionen unter diesem
                  Kompromiss eine Mehrheit der Wählerstimmen bekommen haben.
                </strong>
              </p>

              <p>
                In den Thesen spiegelt sich auch, wie sich die Position der
                Wähler – oder einer Partei – über die Zeit entwickelt hat, und
                wie unterschiedlich sie bei Wahlen in Europa, den Bundestags-
                und verschiedenen Landtagswahlen sein kann.
              </p>
            </Grid.Column>
          </Grid>

          <Header size="large" style={{ margin: "4rem auto 1em" }}>
            <Link
              to="/wahlen"
              style={{ borderBottom: "1px solid rgba(0,0,0,0.4)" }}
            >
              Alle Wahlen
            </Link>
          </Header>

          <Grid stackable columns="4">
            <Grid.Column>
              <Link to={"/wahlen/deutschland/"}>
                <h3>Deutschland</h3>
                <Map territory="deutschland" style={{ maxHeight: "12em" }} />
              </Link>
            </Grid.Column>

            <Grid.Column>
              <Link to={"/wahlen/europa/"}>
                <h3>Europa</h3>
                <Map territory="europa" style={{ maxHeight: "12em" }} />
              </Link>
            </Grid.Column>

            <Grid.Column>
              <h3>Landtagswahlen</h3>
              <List>
                {territorries.slice(0, Math.ceil(territorries.length / 2))}
              </List>
            </Grid.Column>

            <Grid.Column>
              <h3>&nbsp;</h3>
              <List>
                {territorries.slice(Math.ceil(territorries.length / 2))}
              </List>
            </Grid.Column>
          </Grid>


          <SuggestionsGrid
            title="Und jetzt"
            sections={[
              {
                subTitle: "Quiz zur Wahl",
                title: "Wie gut kennst du Thüringen?",
                href: "/quiz/thueringen/49/"
              },
              {
                subTitle: "Alle Fragen aus der",
                title: "Bundestagswahl 2017",
                href: "/wahlen/deutschland/42/"
              },
              {
                subTitle: "5 Wahlen im Vergleich",
                title: "#Diesel",
                href: "/themen/dieselkraftstoff/"
              },
              {
                subTitle: "oder stöbere in weiteren",
                title: "600+ Themen",
                href: "/themen/"
              }
            ]}
          />
        </Container>
      </div>
    )
  }
}

export default LandingView
