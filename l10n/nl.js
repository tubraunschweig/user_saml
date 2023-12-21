OC.L10N.register(
    "user_saml",
    {
    "This user account is disabled, please contact your administrator." : "Dit gebruikersaccount is uitgeschakeld, neem a.u.b. contact op met je beheerder.",
    "Saved" : "Bewaard",
    "Could not save" : "Kon niet opslaan",
    "Provider" : "Provider",
    "Unknown error, please check the log file for more details." : "Onbekende fout, controleer de logbestand voor meer details.",
    "Direct log in" : "Directe log-in",
    "SSO & SAML log in" : "SSO & SAML login",
    "This page should not be visited directly." : "Deze pagina zou niet rechtstreeks bezocht moeten worden. ",
    "Provider " : "Provider ",
    "X.509 certificate of the Service Provider" : "X.509 certificaat ban de Service Provider",
    "Private key of the Service Provider" : "Privésleutel van de Service Provider",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Geeft aan dat de nameID van de <samlp:logoutRequest> verzonden door deze SP zal worden versleuteld.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Geeft aan of het <samlp:AuthnRequest> bericht, verzonden door deze SP, zal worden ondertekend. [Metadata van de SP verschaft deze info]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Geeft aan of het <samlp:logoutRequest> bericht, verzonden door deze SP, zal worden ondertekend.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Geeft aan of het <samlp:logoutResponse> bericht, verzonden door deze SP, zal worden ondertekend.",
    "Whether the metadata should be signed." : "Of de metadata moet worden ondertekend.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Betekent de vereiste van de ondertekening van de <samlp:Response>, <samlp:LogoutRequest> en <samlp:LogoutResponse> elementen die door deze SP worden ontvangen.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Betekent de vereiste van ondertekening van het <saml:Assertion> element dat door deze SP wordt ontvangen.\n[Metadata van de SP geeft deze info]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Betekent de vereiste van versleuteling van het <saml:Assertion> element dat door deze SP wordt ontvangen.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Betekent dat het NameID element in het door deze SP ontvangen SAMLResponse aanwezig moet zijn.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Betekent dat het NameID element dat wordt ontvangen door deze SP versleuteld moet zijn.",
    "Indicates if the SP will validate all received XML." : "Geeft aan of de SP alle ontvangen XMLs zal valideren.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS URL - codeert SAML gegevens als kleine letters en de toolkit gebruikt standaard hoofdletters. Inschakelen voor ADFS compatibiliteit voor handtekeningverificatie.",
    "Algorithm that the toolkit will use on signing process." : "Algoritme dat de toolkit zal gebruiken bij het ondertekeningsproces.",
    "Retrieve query parameters from $_SERVER. Some SAML servers require this on SLO requests." : "Haal queryparameters op van $ _SERVER. Sommige SAML-servers vereisen dit bij SLO-verzoeken.",
    "Attribute to map the UID to." : "Attribuut om de UID op te mappen.",
    "Attribute to map the displayname to." : "weergavenaam toekennen om in kaart te brengen",
    "Attribute to map the email address to." : "Email adres toekennen om in kaart te brengen",
    "Attribute to map the quota to." : "Attribuut om de quota op te mappen.",
    "Attribute to map the users home to." : "Attribuut om de startpagina van de gebruiekrs aan te koppelen.",
    "Attribute to map the users groups to." : "Attribuut om de gebruikersgroep aan te koppelen.",
    "Email address" : "E-mailadres",
    "Encrypted" : "Versleuteld",
    "Entity" : "Eenheid",
    "Kerberos" : "Kerberos",
    "Persistent" : "Blijvend",
    "Transient" : "Tijdelijk",
    "Unspecified" : "Ongedefinieerd",
    "Windows domain qualified name" : "Windows domain qualified name",
    "X509 subject name" : "X509 onderwerpnaam",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "Gebruik SAML authenticatie voor de %s desktop clients (vereist gebruiker herauthenticatie)",
    "Optional display name of the identity provider (default: \"SSO & SAML log in\")" : "Optionele weergave naam van de identity provider (standaard: \"SSO & SAML log-in\")",
    "Allow the use of multiple user back-ends (e.g. LDAP)" : "Sta het gebruik van meerdere gebruikers back-ends toe (bijvoorbeeld LDAP)",
    "SSO & SAML authentication" : "SSO & SAML authenticatie",
    "Authenticate using single sign-on" : "Authenticeren via single sign-on",
    "Using the SSO & SAML app of your Nextcloud you can make it easily possible to integrate your existing Single-Sign-On solution with Nextcloud. In addition, you can use the Nextcloud LDAP user provider to keep the convenience for users. (e.g. when sharing)\nThe following providers are supported and tested at the moment:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Authentication via Environment Variable**\n\t* Kerberos (mod_auth_kerb)\n\t* Any other provider that authenticates using the environment variable\n\nWhile theoretically any other authentication provider implementing either one of those standards is compatible, we like to note that they are not part of any internal test matrix." : "Door gebruik te maken van de SSO & SAML app van je Nextcloud kun je makkelijk je bestaande Single-Sign-On oplossing integreren met Nextcloud. En daarbij kun je ook de Nextcloud LDAP gebruikersbeheerfuncties gebruiken voor meer gebruiksgemak van de gebruikers (bijv nij delen)\nDe volgende providers worden momenteel ondersteund en getest :\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Authenticatie via Omgevingsvariabele**\n\t* Kerberos (mod_auth_kerb)\n\t* Elke andere provider die inloggen via de omgevingsvariabele biedt\n\nHoewel in theorie elke andere authenticatieprovider die deze standaarden hanteert ook compatible zou moeten zijn, moeten we opmerken dat deze geen onderdeel van de interne testmatrix zijn.",
    "Open documentation" : "Open documentatie",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Kies of je wilt authenticeren via de in Nextcloud ingebouwde SAML provider, of dat je wilt authenticeren tegen een omgevingsvariabele",
    "Use built-in SAML authentication" : "Ingebouwde SAML authenticatie gebruiken",
    "Use environment variable" : "Gebruik een omgevingsvariabele",
    "Global settings" : "Globale instellingen",
    "Remove identity provider" : "Verwijderen identity provider",
    "Add identity provider" : "Toevoegen identity provider",
    "General" : "Algemeen",
    "Service Provider Data" : "Service Provider gegevens",
    "If your Service Provider should use certificates you can optionally specify them here." : "Als je Service Provider certificaten moet gebruiken, kun je die hier optioneel opgeven.",
    "Show Service Provider settings…" : "Serviceverleners instellingen weergeven...",
    "Name ID format" : "Naam ID formaat",
    "Identity Provider Data" : "Identity Provider gegevens",
    "Configure your IdP settings here." : "Configureer hier je IdP instellingen.",
    "Identifier of the IdP entity (must be a URI)" : "Identificatie van de IdP (moet een URI zijn)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "URL doel van de IdP waar de SP het Authentication Request Message naartoe zal versturen",
    "Show optional Identity Provider settings…" : "Optionele Identiteit serviceverleners instellingen weergeven...",
    "URL Location of the IdP where the SP will send the SLO Request" : "URL locatie van de IdP waar de SP het SLO Request naartoe zal versturen",
    "URL Location of the IDP's SLO Response" : "URL locatie van de IDP's SLO Response",
    "Public X.509 certificate of the IdP" : "Publiek X.509 certificaat van de IdP",
    "Attribute mapping" : "mapping toekennen",
    "If you want to optionally map attributes to the user you can configure these here." : "Mocht je optionele kenmerken aan de gebruiker wilt koppelen, kun je deze hier instellen",
    "Show attribute mapping settings…" : "Attribuut instellingen weergeven...",
    "Security settings" : "Beveiligingsinstellingen",
    "For increased security we recommend enabling the following settings if supported by your environment." : "Voor verhoogde beveiliging adviseren we om de volgende instellingen te activeren als die door jouw omgeving worden ondersteund.",
    "Show security settings…" : "Beveiligingsinstellingen weergeven...",
    "Signatures and encryption offered" : "Beschikbare handtekeningen en versleuteling",
    "Signatures and encryption required" : "Vereiste handtekeningen en versleuteling",
    "Download metadata XML" : "Downloaden metadata XML",
    "Reset settings" : "Terugzetten instellingen",
    "Metadata invalid" : "Metadata ongeldig",
    "Metadata valid" : "Metadata geldig",
    "Error" : "Fout",
    "Account not provisioned." : "Account niet verstrekt.",
    "Your account is not provisioned, access to this service is thus not possible." : "Je account is niet verstrekt, toegang tot deze dienst is dus niet mogelijk.",
    "Login options:" : "Inlogopties:",
    "Choose a authentication provider" : "Kies een authenticatieprovider"
},
"nplurals=2; plural=(n != 1);");
