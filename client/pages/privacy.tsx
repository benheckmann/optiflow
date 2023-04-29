import {Container, Center, Space, Text} from "@mantine/core";
import {NextPage} from "next";
import TitleText from "../components/landing_page/TitleText";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Privacy: NextPage = () => {

    return (
        <Container className="py-10">
            <Center>
                <TitleText size={40}/>

            </Center>
            <Space h={100}/>
            <Text className="text-center" size={40} fw={700}>Datenschutzerklärung</Text>
            <Space h={50}/>
            <h1>1. Einleitung und Kontaktdaten des Verantwortlichen</h1>
            <p>1.1 Wir freuen uns, dass Sie unsere Website besuchen und bedanken uns für Ihr Interesse. Im Folgenden
                informieren wir Sie über den Umgang mit Ihren personenbezogenen Daten bei der Nutzung unserer Website.
                Personenbezogene Daten sind hierbei alle Daten, mit denen Sie persönlich identifiziert werden
                können.</p>
            <p>1.2 Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der
                Datenschutz-Grundverordnung (DSGVO) ist Marius Weigt, Implerstraße 10, 81371 München, Deutschland, Tel.:
                015732128812, E-Mail: info@meddy.me. Der für die Verarbeitung von personenbezogenen Daten
                Verantwortliche ist diejenige natürliche oder juristische Person, die allein oder gemeinsam mit anderen
                über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.</p>
            <p>1.3 Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung personenbezogener Daten und
                anderer vertraulicher Inhalte (z.B. Bestellungen oder Anfragen an den Verantwortlichen) eine SSL-bzw.
                TLS-Verschlüsselung. Sie können eine verschlüsselte Verbindung an der Zeichenfolge „https://“ und dem
                Schloss-Symbol in Ihrer Browserzeile erkennen.</p>

            <h2>2. Datenerfassung beim Besuch unserer Website</h2>
            <p>Bei der bloß informatorischen Nutzung unserer Website, also wenn Sie sich nicht registrieren oder uns
                anderweitig Informationen übermitteln, erheben wir nur solche Daten, die Ihr Browser an unseren Server
                übermittelt (sog. „Server-Logfiles“). Wenn Sie unsere Website aufrufen, erheben wir die folgenden Daten,
                die für uns technisch erforderlich sind, um Ihnen die Website anzuzeigen:</p>
            <ul>
                <li>Unsere besuchte Website</li>
                <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
                <li>Menge der gesendeten Daten in Byte</li>
                <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
                <li>Verwendeter Browser</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
                <li>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses
                    an der Verbesserung der Stabilität und Funktionalität unserer Website.
                </li>
                <li>Eine Weitergabe oder anderweitige Verwendung der Daten findet nicht statt.</li>
                <li>Wir behalten uns allerdings vor, die Server-Logfiles nachträglich zu überprüfen, sollten konkrete
                    Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.
                </li>

            </ul>
            <br/>
            <h1>2. Datenerfassung beim Besuch unserer Website</h1>
            <p>Bei der bloß informatorischen Nutzung unserer Website, also wenn Sie sich nicht registrieren oder uns
                anderweitig Informationen übermitteln, erheben wir nur solche Daten, die Ihr Browser an unseren Server
                übermittelt (sog. „Server-Logfiles“). Wenn Sie unsere Website aufrufen, erheben wir die folgenden Daten,
                die für uns technisch erforderlich sind, um Ihnen die Website anzuzeigen:</p>
            <br/>
            <ul>
                <li>Unsere besuchte Website</li>
                <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
                <li>Menge der gesendeten Daten in Byte</li>
                <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
                <li>Verwendeter Browser</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
            </ul>
            <br/>
            <p>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an
                der Verbesserung der Stabilität und Funktionalität unserer Website. Eine Weitergabe oder anderweitige
                Verwendung der Daten findet nicht statt. Wir behalten uns allerdings vor, die Server-Logfiles
                nachträglich zu überprüfen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.</p>
            <br/>
            <h1>3. Cookies</h1>
            <p>Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu
                ermöglichen, verwenden wir Cookies, also kleine Textdateien, die auf Ihrem Endgerät abgelegt werden.
                Teilweise werden diese Cookies nach Schließen des Browsers automatisch wieder gelöscht (sog.
                „Session-Cookies“), teilweise verbleiben diese Cookies länger auf Ihrem Endgerät und ermöglichen das
                Speichern von Seiteneinstellungen (sog. „persistente Cookies“). Im letzteren Fall können Sie die
                Speicherdauer der Übersicht zu den Cookie-Einstellungen Ihres Webbrowsers entnehmen.</p>
            <p>Sofern durch einzelne von uns eingesetzte Cookies auch personenbezogene Daten verarbeitet werden, erfolgt
                die Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO entweder zur Durchführung des Vertrages, gemäß Art. 6
                Abs. 1 lit. a DSGVO im Falle einer erteilten Einwilligung oder gemäß Art. 6 Abs. 1 lit. f DSGVO zur
                Wahrung unserer berechtigten Interessen an der bestmöglichen Funktionalität der Website sowie einer
                kundenfreundlichen und effektiven Ausgestaltung des Seitenbesuchs.</p>
            <p>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
                einzeln über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle oder generell
                ausschließen können.</p>
            <p>Bitte beachten Sie, dass bei Nichtannahme von Cookies die Funktionalität unserer Website eingeschränkt
                sein kann.</p>
            <br/>
            <h1>4. Kontaktaufnahme</h1>
            <p>Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden – ausschließlich zum
                Zweck der Bearbeitung und Beantwortung Ihres Anliegens und nur im dafür erforderlichen Umfang –
                personenbezogene Daten verarbeitet. Rechtsgrundlage für die Verarbeitung dieser Daten ist unser
                berechtigtes Interesse an der Beantwortung Ihres Anliegens gemäß Art. 6 Abs. 1 lit. f DSGVO. Zielt Ihre
                Kontaktierung auf einen Vertrag ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs.
                1 lit. b DSGVO. Ihre Daten werden gelöscht, wenn sich aus den Umständen entnehmen lässt, dass der
                betroffene Sachverhalt abschließend geklärt ist und sofern keine gesetzlichen Aufbewahrungspflichten
                entgegenstehen.</p>


        </Container>
    )

}

export async function getStaticProps({locale}: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common'
            ])),
            // Will be passed to the page component as props
        },
    }
}

export default Privacy;