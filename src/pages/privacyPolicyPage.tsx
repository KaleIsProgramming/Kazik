import { useState, useEffect } from "react";
import styled  from '@emotion/styled';
import { NavBar } from "../components";

export const PrivacyPolicyPage = () => {
    const[width, setWidth] = useState(1980)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        })
    },[]);

    return(
        <div>
            <NavBar data={width}/>
            <PrivacyPolicyContainer>
                <h1>Polityka prywatności</h1>
                <h3>Informacje ogólne</h3>
                Niniejsza polityka dotyczy serwisu www.aretus8.com.<br/>
                Operatorem serwisu oraz administratorem danych osobowych jest: Aretus, ul. Iskierki 40/1, 62-080 Lusówko<br/>
                Adres kontaktowy poczty elektronicznej operatora:  aretus8@gmail.com<br/>
                Operator jest administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie.<br/>
                Serwis wykorzystuje dane osobowe w następujących celach:<br/>
                &emsp;– Obsługa zapytań,<br/>
                &emsp;– Przygotowanie i wysyłka towarów,<br/>
                &emsp;– Realizacja zamówionych usług,<br/>
                &emsp;– Prezentacja oferty lub informacji.<br/>
                Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”).<br/>
                Wybrane metody ochrony danych stosowane przez Operatora
                Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze użytkownika i mogą być odczytane jedynie na docelowym serwerze.<br/>
                Operator okresowo zmienia swoje hasła administracyjne.<br/>
                W celu ochrony danych Operator regularnie wykonuje kopie bezpieczeństwa.<br/>
                <h3>Hosting</h3>
                Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora: home.pl, ul. Zbożowa 4, 70-653 Szczecin<br/>
                <h3>Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</h3>
                1. W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na Administratorze. Dotyczy następujących  grup odbiorców:<br/>
                &emsp;– firma hostingowa na zasadzie powierzenia<br/>
                &emsp;– kurierzy<br/>
                &emsp;– poczta<br/>
                &emsp;– firmy, świadczące usługi marketingu na rzecz Administratora<br/>
                2. Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.<br/>
                3. Przysługuje Ci prawo żądania od Administratora:<br/>
                &emsp;– dostępu do danych osobowych Ciebie dotyczących,<br/>
                &emsp;– ich sprostowania,<br/>
                &emsp;– usunięcia,<br/>
                &emsp;– ograniczenia przetwarzania,<br/>
                &emsp;– oraz przenoszenia danych.<br/>
                4. Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.<br/>
                5. Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.<br/>
                6. Dane osobowe nie są przekazywane do krajów trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza to, że nie przesyłamy  ich poza teren Unii Europejskiej.<br/>
                <h3>Istotne techniki marketingowe</h3>
                1. Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z siedzibą w USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane informacje. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. W zakresie informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać i edytować informacje wynikające z plików cookies przy pomocy narzędzia: <a href="https://www.google.com/ads/preferences/">https://www.google.com/ads/preferences/</a><br/>
                2. Operator stosuje techniki remarketingowe, pozwalające na dopasowanie przekazów reklamowych do zachowania użytkownika na stronie, co może dawać złudzenie, że dane osobowe użytkownika są wykorzystywane do jego śledzenia, jednak w praktyce nie dochodzi do przekazania żadnych danych osobowych od Operatora do operatorom reklam. Technologicznym warunkiem takich działań jest włączona obsługa plików cookie.<br/>
                4. Operator stosuje rozwiązanie automatyzujące działanie Serwisu w odniesieniu do użytkowników, np. mogące przesłać maila do użytkownika po odwiedzeniu konkretnej podstrony, o ile wyraził on zgodę na otrzymywanie korespondencji handlowej od Operatora.


            </PrivacyPolicyContainer>
        </div>
    )
}

const PrivacyPolicyContainer = styled.div`
    
    min-height: 88.4vh;
    padding-left: 10%;
    padding-bottom: 8vh;

    h1 {
        padding: 14vh 0 28px 0;
        display: flex; 
        align-items: end;
        justify-content: start;
    }

    h3 {
        padding: 24px 0;
    }
`;