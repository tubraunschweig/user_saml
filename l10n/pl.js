OC.L10N.register(
    "user_saml",
    {
    "This user account is disabled, please contact your administrator." : "To konto użytkownika jest wyłączone, skontaktuj się z administratorem.",
    "Saved" : "Zapisano",
    "Could not save" : "Nie można zapisać",
    "Provider" : "Dostawca",
    "Unknown error, please check the log file for more details." : "Nieznany błąd, sprawdź plik dziennika, aby dowiedzieć się więcej.",
    "Direct log in" : "Bezpośrednie logowanie",
    "SSO & SAML log in" : "Logowanie SSO i SAML",
    "This page should not be visited directly." : "Ta strona nie powinna być odwiedzana bezpośrednio.",
    "Provider " : "Dostawca",
    "X.509 certificate of the Service Provider" : "Certyfikat X.509 dostawcy usługi",
    "Private key of the Service Provider" : "Klucz prywatny dostawcy usługi",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Wskazuje, że nameID <samlp:logoutRequest> wysłany przez tego dostawcę usług będzie zaszyfrowany.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Wskazuje, czy wiadomości <samlp:AuthnRequest> wysłane przez tego dostawcę usług będą podpisane. [Metadane dostawcy usług będą przekazywały te informacje]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Wskazuje, czy wiadomości <samlp:logoutRequest> wysłane przez tego dostawcę usług będą podpisane.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Wskazuje, czy wiadomości <samlp:logoutResponse> wysłane przez tego dostawcę usług będą podpisane.",
    "Whether the metadata should be signed." : "Określa, czy metadane powinny być podpisane.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Wskazuje wymóg podpisania dla elementów <samlp:Response>, <samlp:LogoutRequest> i <samlp:LogoutResponse> otrzymanych przez tego dostawcę usług.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Wskazuje wymóg podpisania dla elementów <saml:Assertion> otrzymanych przez tego dostawcę usług. [Metadane dostawcy usług będą przekazywały te informacje]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Wskazuje wymóg szyfrowania dla elementów <saml:Assertion> otrzymanych przez tego dostawcę usług.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Wskazuje wymóg obecności elementu NameID przy SAMLResponse otrzymanego przez tego dostawcę usług.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Wskazuje wymóg szyfrowania NameID otrzymanego przez tego dostawcę usług.",
    "Indicates if the SP will validate all received XML." : "Wskazuje, czy dostawca usług zatwierdzi wszystkie odebrane XML.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "Dane ADFS URL-Encodes SAML są małymi literami a narzędzie standardowo obsługuje duże litery. Włącz dla ADFS kompatybilność weryfikacji podpisu.",
    "Algorithm that the toolkit will use on signing process." : "Algorytm, który zostanie użyty podczas procesu podpisywania.",
    "Retrieve query parameters from $_SERVER. Some SAML servers require this on SLO requests." : "Pobierz parametry zapytania z $_SERVER. Niektóre serwery SAML wymagają tego w żądaniach SLO.",
    "Attribute to map the UID to." : "Atrybut do mapowania UID.",
    "Only allow authentication if an account exists on some other backend (e.g. LDAP)." : "Zezwalaj na uwierzytelnianie tylko wtedy, gdy konto istnieje na innym zapleczu (np. LDAP).",
    "Attribute to map the displayname to." : "Atrybut do mapowania wyświetlanej nazwy użytkownika.",
    "Attribute to map the email address to." : "Atrybut do zamapowania adresu e-mail.",
    "Attribute to map the quota to." : "Atrybut do mapowania przydziału.",
    "Attribute to map the users home to." : "Atrybut do mapowania katalogów domowych użytkowników.",
    "Attribute to map the users groups to." : "Atrybut do mapowania grup użytkowników.",
    "Attribute to map the users MFA login status" : "Atrybut do mapowania statusu logowania użytkowników MFA",
    "Reject members of these groups. This setting has precedence over required memberships." : "Odrzuć członków tych grup. To ustawienie ma pierwszeństwo przed wymaganymi członkostwami.",
    "Group A, Group B, …" : "Grupa A, Grupa B,…",
    "Require membership in these groups, if any." : "Wymagaj członkostwa w tych grupach, jeśli takie istnieją.",
    "Email address" : "Adres e-mail",
    "Encrypted" : "Zaszyfrowane",
    "Entity" : "Jednostka",
    "Kerberos" : "Kerberos",
    "Persistent" : "Stały",
    "Transient" : "Przejściowy",
    "Unspecified" : "Nieokreślony",
    "Windows domain qualified name" : "Zakwalifikowana nazwa domeny Windows",
    "X509 subject name" : "Nazwa X509",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "Użyj uwierzytelnienia LDAP dla %s klienta desktopowego (wymaga ponownego uwierzytelnienia)",
    "Optional display name of the identity provider (default: \"SSO & SAML log in\")" : "Opcjonalna wyświetlana nazwa dostawcy tożsamości (domyślnie: \"Logowanie SSO i SAML\")",
    "Allow the use of multiple user back-ends (e.g. LDAP)" : "Zezwalaj na korzystanie z zaplecza przez wielu użytkowników (np. LDAP)",
    "SSO & SAML authentication" : "Uwierzytelenienie SSO i SAML",
    "Authenticate using single sign-on" : "Uwierzytelniaj używając pojedynczego logowania (SSO)",
    "Using the SSO & SAML app of your Nextcloud you can make it easily possible to integrate your existing Single-Sign-On solution with Nextcloud. In addition, you can use the Nextcloud LDAP user provider to keep the convenience for users. (e.g. when sharing)\nThe following providers are supported and tested at the moment:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Authentication via Environment Variable**\n\t* Kerberos (mod_auth_kerb)\n\t* Any other provider that authenticates using the environment variable\n\nWhile theoretically any other authentication provider implementing either one of those standards is compatible, we like to note that they are not part of any internal test matrix." : "Korzystając z aplikacji SSO & SAML w Nextcloud, możesz łatwo zintegrować istniejące rozwiązanie jednokrotnego logowania z Nextcloud. Ponadto możesz użyć LDAP w Nextcloud, jako dostawcy użytkownika, aby zachować wygodę dla użytkowników (np. podczas udostępniania).\nObecnie obsługiwani i testowani są dostawcy:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* ** Uwierzytelnianie za pomocą zmiennej środowiskowej **\n\t* Kerberos (mod_auth_kerb)\n\t* Każdy inny dostawca, który uwierzytelnia się przy użyciu zmiennej środowiskowej\n\nChociaż teoretycznie każdy inny dostawca wdrażający jeden z tych standardów uwierzytelniania jest zgodny, chcemy zwrócić uwagę, że nie są one częścią żadnej wewnętrznej macierzy testowej.",
    "Open documentation" : "Otwórz dokumentację",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account will not be possible anymore, unless you enabled \"%s\" or you go directly to the URL %s." : "Upewnij się, że skonfigurowany został użytkownik administracyjny, który może zalogować się do instancji poprzez SSO. Logowanie za pomocą zwykłego konta %s nie będzie już możliwe, chyba że włączone zostało \"%s\" lub przejdziesz bezpośrednio pod adres URL %s.",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account will not be possible anymore, unless you go directly to the URL %s." : "Upewnij się, że skonfigurowany został użytkownik administracyjny, który może zalogować się do instancji poprzez SSO. Logowanie za pomocą zwykłego konta %s nie będzie już możliwe, chyba przejdziesz bezpośrednio pod adres URL %s.",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Wybierz czy chcesz uwierzytelniać używając wbudowanego w Nextcloud dostawcę SAML czy chcesz uwierzytelniać przez zmienne środowiskowe.",
    "Use built-in SAML authentication" : "Użyj wbudowanego uwierzytelnienia SAML",
    "Use environment variable" : "Użyj zmiennej środowiskowej",
    "Global settings" : "Ustawienia globalne",
    "Remove identity provider" : "Usuń dostawcę tożsamości",
    "Add identity provider" : "Dodaj dostawcę tożsamości",
    "General" : "Ogólne",
    "Service Provider Data" : "Dane dostawcy usług",
    "If your Service Provider should use certificates you can optionally specify them here." : "Jeśli Twój dostawca usług powinien używać certyfikatów, możesz opcjonalnie określić je tutaj.",
    "Show Service Provider settings…" : "Pokaż ustawienia dostawcy usług…",
    "Name ID format" : "Format nazwy ID",
    "Identity Provider Data" : "Dane od dostawcy tożsamości",
    "Configure your IdP settings here." : "Skonfiguruj swoje ustawienia IdP.",
    "Identifier of the IdP entity (must be a URI)" : "Identyfikator jednostki IdP (musi być URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "Adres URL IdP, z którego dostawca usług wyśle wiadomość o żądaniu uwierzytelnienia",
    "Show optional Identity Provider settings…" : "Pokaż opcjonalne ustawienia tożsamości dostawcy usług…",
    "URL Location of the IdP where the SP will send the SLO Request" : "Adres URL IdP gdzie dostawca usług wyśle żądanie SLO",
    "URL Location of the IDP's SLO Response" : "Adres URL lokalizacji odpowiedzi SLO IDP",
    "Public X.509 certificate of the IdP" : "Publiczny certyfikat X.509 IdP",
    "Attribute mapping" : "Atrybut mapowania",
    "If you want to optionally map attributes to the user you can configure these here." : "Tutaj możesz opcjonalnie przypisać atrybuty użytkownikowi.",
    "Show attribute mapping settings…" : "Wyświetl ustawienia atrybutów mapowania…",
    "Security settings" : "Ustawienia bezpieczeństwa",
    "For increased security we recommend enabling the following settings if supported by your environment." : "Dla zwiększenia bezpieczeństwa zalecamy włączenie kolejnych ustawień jeśli są wspierane przez twoje środowisko.",
    "Show security settings…" : "Pokaż ustawienia bezpieczeństwa…",
    "Signatures and encryption offered" : "Podpisy i szyfrowanie są oferowane",
    "Signatures and encryption required" : "Podpisy i szyfrowanie są wymagane",
    "User filtering" : "Filtrowanie użytkowników",
    "If you want to optionally restrict user login depending on user data, configure it here." : "Jeśli chcesz opcjonalnie ograniczyć logowanie użytkownika w zależności od danych użytkownika, skonfiguruj to tutaj.",
    "Show user filtering settings …" : "Pokaż ustawienia filtrowania użytkowników…",
    "Download metadata XML" : "Ściągnij metadane XML",
    "Reset settings" : "Zresetuj ustawienia",
    "Metadata invalid" : "Nieprawidłowe metadane",
    "Metadata valid" : "Prawidłowe metadane",
    "Error" : "Błąd",
    "Access denied." : "Brak dostępu.",
    "Your account is denied, access to this service is thus not possible." : "Twoje konto zostało zablokowane, dostęp do tej usługi jest niemożliwe.",
    "Account not provisioned." : "Brak konta.",
    "Your account is not provisioned, access to this service is thus not possible." : "Nie posiadasz konta, stąd dostęp do tej usługi jest niemożliwy.",
    "Login options:" : "Opcje logowania:",
    "Choose a authentication provider" : "Wybierz dostawcę uwierzytelniania"
},
"nplurals=4; plural=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);");
